import { useEffect, useState } from "react";
import MdComp from "../components/md-comp.tsx";
import { useParams } from "react-router-dom";
import NotFound from "./404.tsx";

async function getRepoReadme(repo: string | undefined) {
  if (!repo) return "";

  // Fetch the repository details to get the default branch
  const repoResponse = await fetch(`https://api.github.com/repos/M4rshe1/${repo}`);
  const repoData = await repoResponse.json();
  const defaultBranch = repoData.default_branch || "master";

  // Fetch the README from the default branch
  const readmeResponse = await fetch(`https://raw.githubusercontent.com/M4rshe1/${repo}/${defaultBranch}/README.md`);
  return await readmeResponse.text();
}

const Project = () => {
  const { repositoryID } = useParams();
  const [readme, setReadme] = useState("");

  useEffect(() => {
    getRepoReadme(repositoryID).then((res) => {
      setReadme(res);
    });
  }, [repositoryID]);

  if (repositoryID === undefined) {
    return (
      <NotFound></NotFound>
    );
  }

  return (
    <>
      <MdComp>
        {readme}
      </MdComp>
    </>
  );
};

export default Project;
