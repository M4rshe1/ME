const Title = ({children, subtitle = ""}: { children: string, subtitle: string }) => {
    return (
        <>
            <h1
                className="comp-title flex items-center justify-start gap-2 w-full mt-2"
                id="timeline"
            >
                {children}
            </h1>
            <span className={"my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"}>
                {subtitle}
            </span>
        </>

    )
};

export default Title;
    