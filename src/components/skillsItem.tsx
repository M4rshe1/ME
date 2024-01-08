const SkillsItem = (
    {
        name,
        level,
        colorLanguage,
        comment
    }: {
        name: string,
        level: number,
        colorLanguage: string,
        comment?: string
    }
) => {
    return (
        <div
            className="flex flex-col items-start justify-center gap-2 w-full"
        >
            <p
                className="font-bold mt-4"
            >
                {name}
                <span
                className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-2"
                >
                {comment}
            </span>
            </p>
            <div
                className="bg-gray-200 dark:bg-gray-700 rounded-full h-6 flex items-center w-full"
            >
                <div
                    style={{width: level + "%"}}
                    className={"font-bold text-black rounded-full h-6 flex items-center justify-center transition-all duration-500 ease-in-out " + colorLanguage + "-bg"}
                >
                    {level + "%"}
                </div>
            </div>

        </div>

    );
}

export default SkillsItem