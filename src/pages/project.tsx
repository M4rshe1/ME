import {useEffect, useState} from "react";
import MdComp from "../components/md-comp.tsx";
import {useParams} from "react-router-dom";
import NotFound from "./404.tsx";

async function getRepoReadme(repo: string | undefined) {
    const response = await fetch(`https://raw.githubusercontent.com/M4rshe1/${repo}/master/README.md`);
    return await response.text();
}


const Project = () => {
    const {repositoryID} = useParams()
    const [readme, setReadme] = useState("");

    useEffect(() => {
        getRepoReadme(repositoryID).then((res) => {
            setReadme(res);
        });
    }, [repositoryID]);

    if (repositoryID === undefined) {
        return (
            <NotFound></NotFound>
        )
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
