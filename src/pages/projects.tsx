import ProjectItem from '../components/projectItem.tsx';
import Title from "../components/title.tsx";
import {useEffect, useState} from "react";

const GITHUB_REPOS_API = 'https://api.github.com/users/M4rshe1/repos';

interface reformattedReposInterface {
    name: string;
    description: string;
    url: string;
    _languages: { name: string; percentage: number; }[];
    updated: string;
    archived: boolean;
}

async function getRepos() {
    const response = await fetch(GITHUB_REPOS_API);
    return await response.json();
}

async function getRepoLanguages(repo: string) {
    const response = await fetch(`https://api.github.com/repos/${repo}/languages`);
    const languages = await response.json();
    let total = 0;
    for (const key in languages) {
        total += languages[key];
    }
    const formattedLanguages = [];
    for (const key in languages) {
        formattedLanguages.push({
            name: key,
            percentage: Math.round((languages[key] / total) * 100),
        });
    }
    return formattedLanguages;
}

async function reformatGitHubRepos(repos: never[]) {
    const reformattedRepos = [];

    // order by updated newest to oldest
    repos = repos.sort((a: { updated_at: string; }, b: { updated_at: string; }) => {
        const dateA = new Date(a.updated_at).getDate();
        const dateB = new Date(b.updated_at).getDate()
        return dateA - dateB;
    });

    for (const repo of repos) {
        try {
            const updated = new Date(repo['updated_at']);
            const updatedString = `${updated.getDate()} ${updated.toLocaleString('default', {month: 'short'})} ${updated.getFullYear()}`;
            const languages = await getRepoLanguages(repo['full_name']);
            reformattedRepos.push({
                name: repo['full_name'],
                description: repo['description'] || '',
                url: repo['html_url'],
                _languages: languages,
                updated: updatedString,
                archived: repo['archived'],
            });
        } catch (error) {
            console.error('Error fetching languages for repo:', repo['full_name'], error);
        }
    }
    return reformattedRepos;
}


const Projects = ({head = 0}: { head: number}) => {
    const [repositories, setRepositories] = useState<reformattedReposInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [repoLength, setRepoLength] = useState(0);
    useEffect(() => {
        async function fetchData() {
            try {
                const repos = await getRepos();
                const reformattedRepos = await reformatGitHubRepos(repos);
                setRepoLength(reformattedRepos.length)
                // shorten the list to the amount specified in the head prop
                if (head !== 0) {
                    setRepositories(reformattedRepos.slice(0, head));
                } else {
                    setRepositories(reformattedRepos);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }

        fetchData().then(r => (r));
    }, [head]);

    return (
        <>
            <div>
                <Title
                    subtitle={repoLength > 0 && head > 0 ? `${head} of ${repoLength} repositories` : ""}
                    link={"/projects"}
                >
                    Projects
                </Title>
            </div>
                {
                    loading ?
                        <ProjectItem
                            key={"loading"}
                            name={"loading..."}
                            description={"loading..."}
                            url={"loading..."}
                            languages={[]}
                            updated={"loading..."}
                            archived={false}
                        />
                        :
                        repositories.map((repo:
                                              {
                                                  name: string;
                                                  description: string;
                                                  url: string;
                                                  _languages: { name: string; percentage: number; }[];
                                                  updated: string;
                                                  archived: boolean;
                                              }
                        ) => (
                            <ProjectItem
                                key={repo.name}
                                name={repo.name}
                                description={repo.description}
                                url={repo.url}
                                languages={repo._languages}
                                updated={repo.updated}
                                archived={repo.archived}
                            />
                        ))
                }
        </>
    );
};

export default Projects;

