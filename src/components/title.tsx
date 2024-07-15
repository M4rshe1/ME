import {Link} from "react-router-dom";

const Title = (
    {
        children,
        subtitle = "",
        link,
    }
        : {
        children: string;
        subtitle?: string;
        link?: string;
    }) => {
    return (
        <>
            {link == undefined ? (
                <h1 className="comp-title flex items-center justify-start gap-2 w-full mt-2">
                    {children}
                </h1>
            ) : (
                <>
                    <Link to={link}>
                        <h1 className="comp-title dark:text-white text-black flex items-center justify-start gap-2 w-full mt-2">
                            {children}
                        </h1>
                    </Link>
                </>
            )}
            <span
                className={
                    "my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                }
            >
        {subtitle}
      </span>
        </>
    );
};

export default Title;
