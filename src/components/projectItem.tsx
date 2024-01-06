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
                    <h2>
                        {repository.name}
                    </h2>
                    <span
                        className="mt-2 ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    >last update: {repository.updated}</span>
                </div>
                <a href={repository.url}><img
                    className="w-8 aspect-square text-gray-200 bg-gray-200"
                    src="/assets/github.svg" alt="github"/></a>
            </div>
            <p>
                {repository.description}
            </p>
            <div
                className="w-full bg-gray-200 dark:bg-gray-700 h-6 rounded-full flex items-center justify-center overflow-hidden first:rounded-l-full last:rounded-r-full"
            >
                {
                    repository.languages.map((language: { name: string, percentage: number }) => (
                        <div
                            key={language.name}
                            className={"h-6 flex items-center justify-center transition-all duration-500 ease-in-out " + replaceWithUnderscore(language.name) + "-bg"}
                            style={{width: language.percentage + "%"}}
                        >
                            {language.percentage + "%"}
                        </div>
                    ))
                }
            </div>
            <div
                className="grid lg:grid-cols-3 gap-4 mt-2"
            >
                {
                    repository.languages.map((language: { name: string, percentage: number }) => (
                        <div
                            className="flex items-center justify-start"
                        >
                            &nbsp;
                            <p
                                key={language.name}
                                className={"h-1 aspect-square" + replaceWithUnderscore(language.name) + "-bg"}
                            >
                            </p>
                            <span>{language.name} <span
                                className="mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
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