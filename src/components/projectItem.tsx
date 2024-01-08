import {Link} from "react-router-dom";

const replaceWithUnderscore = (text: string): string => {
    // Define regular expression patterns
    const spacePattern = /\s+/g;
    const specialCharPattern = /[^\w\s]+/g;
    const numberPattern = /\d+/g;

    // Replace spaces, special characters, and numbers with underscores
    let replacedText = text.replace(spacePattern, '_');
    replacedText = replacedText.replace(specialCharPattern, '_');
    replacedText = replacedText.replace(numberPattern, '_');

    return replacedText.toLowerCase();
};


const ProjectItem = (
    repository: {
        name: string,
        description: string,
        url: string,
        languages: { name: string, percentage: number }[],
        updated: string,
        archived: boolean
    }
) => {
    return (
        <div
            className="md-component"
        >
            <div
                className="flex items-center justify-between"
            >
                <div
                    className="flex items-center justify-start"
                >
                    <Link
                        to={repository.url.replace("https://github.com/M4rshe1", "/projects")}
                    >
                        <h2>
                            {repository.name}
                        </h2>
                    </Link>
                    <span
                        className="mt-2 ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    >last update: {repository.updated}</span>
                </div>
                <a href={repository.url} target={"_blank"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="w-8 dark:text-gray-200 text-gray-900 hover:dark:text-orange-300 hover:text-violet-300 ease-in-out duration-200"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </a>
            </div>
            <p
                className="mb-2"
            >
                {repository.description}
            </p>
            <div
                className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full flex items-center justify-center overflow-hidden first:rounded-l-full last:rounded-r-full"
            >
                {
                    repository.languages.map((language: { name: string, percentage: number }, index: number) => (
                        <div
                            key={index}
                            className={"h-2 flex items-center justify-center transition-all duration-500 ease-in-out " + replaceWithUnderscore(language.name) + "-bg"}
                            style={{width: language.percentage + "%"}}
                        >
                        </div>
                    ))
                }
            </div>
            <div
                className="grid lg:grid-cols-3 gap-1 mt-2 grid-cols-2"
            >
                {
                    repository.languages.map((language: { name: string, percentage: number }, index: number) => (
                        <div
                            className="flex items-center justify-start"
                        >
                            &nbsp;
                            <span
                                key={index}
                                className={"h-3 aspect-square rounded-full " + replaceWithUnderscore(language.name) + "-bg"}
                            >
                                
                            </span>
                            <span
                                className="ml-2"
                            >
                                {language.name}
                                <span
                                    className="text-sm ml-1 font-normal leading-none text-gray-400 dark:text-gray-500"
                                >
                                {language.percentage + "%"}
                            </span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectItem