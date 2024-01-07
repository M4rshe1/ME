// import ProjectItem from "../components/projectItem.tsx";
//
// const GITHUB_REPOS_API: string = "https://api.github.com/users/M4rshe1/repos"
//
// async function getRepos() {
//     const response = await fetch(GITHUB_REPOS_API);
//     return await response.json();
// }
//
// async function getRepoLanguages(repo: string) {
//     const response = await fetch(`https://api.github.com/repos/${repo}/languages`);
//     const languages = await response.json();
//     let total = 0;
//     for (const key in languages) {
//         total += languages[key];
//     }
//     const formattedLanguages: { name: string, percentage: number }[] = [];
//
//     languages.forEach((value: number, key: string) => {
//         formattedLanguages.push({
//             name: key,
//             percentage: (value / total) * 100
//         });
//     });
//     return formattedLanguages;
// }
//
//
// async function reformatGitHubRepos(repos: never[]) {
//     const reformattedRepos: {
//         name: string,
//         description: string,
//         url: string,
//         _languages: { name: string, percentage: number }[],
//         updated: string,
//         archived: boolean
//     }[] = [];
//
//     for (const repo of repos) {
//         try {
//             const languages: { name: string, percentage: number }[] = await getRepoLanguages(repo["full_name"]);
//             reformattedRepos.push({
//                 name: repo["full_name"],
//                 description: repo["description"] || "",
//                 url: repo["html_url"],
//                 _languages: languages,
//                 updated: repo["updated_at"],
//                 archived: repo["archived"]
//             });
//         } catch (error) {
//             console.error("Error fetching languages for repo:", repo["full_name"], error);
//             // Handle error as needed, like pushing a default or empty value for languages
//         }
//     }
//
//
//     return reformattedRepos;
// }
//    
//
// const Projects = async () => {
//     const Repositories = getRepos();
//     const reformattedRepos = await reformatGitHubRepos(await Repositories);
//
//     return (
//         <>
//             {
//                 reformattedRepos.map((repo) => (
//                     <ProjectItem
//                         key={repo.name}
//                         name={repo.name}
//                         description={repo.description}
//                         url={repo.url}
//                         languages={repo._languages}
//                         updated={repo.updated}
//                         archived={repo.archived}
//                     />
//                 ))
//             }
//         </>
//     );
// }
//
// export default Projects


import {useEffect, useState} from 'react';
import ProjectItem from '../components/projectItem.tsx';
import Title from "../components/title.tsx";

const GITHUB_REPOS_API = 'https://api.github.com/users/M4rshe1/repos';

async function getRepos() {
    const response = await fetch(GITHUB_REPOS_API);
    return await response.json();
}

async function getRepoLanguages(repo: never) {
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

async function reformatGitHubRepos(repos: any) {
    let reformattedRepos = [];

    // order by updated newest to oldest
    repos = repos.sort((a: { updated_at: string; }, b: { updated_at: string; }) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB - dateA; // Change to dateA - dateB for ascending order
    });

    for (const repo of repos) {
        try {
            const updated = new Date(repo['updated_at']);
            const updatedString = `${updated.getDate()} ${updated.toLocaleString('default', {month: 'short'})} ${updated.getFullYear()}`;

            // const updatedString = `${updated.toLocaleString('default', { month: 'long' })} ${updated.getFullYear()}`;

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


const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const repos = await getRepos();
                const reformattedRepos = await reformatGitHubRepos(repos);
                setRepositories(reformattedRepos);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }

        fetchData().then(r => console.log(r));
    }, []);

    return (
        <>
            <div>
                <Title>
                    Projects
                </Title>
            </div>
            {
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
