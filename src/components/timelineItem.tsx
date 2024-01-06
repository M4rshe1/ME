import React from "react";

const TimelineItem = ({year, title, duration, details}) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-gray-200 dark:border-gray-700">
            <li className="ms-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-[7px] border border-white dark:border-gray-900 dark:bg-gray-700"/>
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-gray-900 rounded-md dark:text-gray-900 dark:bg-white">
                        {year}
                    </span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </span>
                    <div className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {duration}
                    </div>
                </div>
                <p className="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem