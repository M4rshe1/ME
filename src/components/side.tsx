import Contact from './contact';
import Skills from '../data/skills.ts';

const Side = () => {
    return (
        <>
            <div
                className="my-4 rounded bg-white dark:bg-gray-800 shadow-lg p-4 w-full lg:w-[400px] flex flex-col items-start justify-start"
            >
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/avatar.png"
                        alt="Me"
                        className="rounded-full p-4"
                    />
                    <h1
                        className="mt-4 mb-8 font-bold text-5xl"
                    >
                        Colin
                    </h1>
                </div>
                <div
                    className="flex flex-col items-start justify-center w-full"
                >
                    <h1
                    className="comp-title"    
                    >Skills</h1>
                    {
                        Skills.map((skill, index) => (
                            <div
                                key={index}
                            className="flex flex-col items-start justify-center gap-2 w-full"
                            >
                                <p
                                className="font-bold mt-4"   
                                >{skill.name}</p>
                                <div
                                    className="bg-gray-200 dark:bg-gray-700 rounded-full h-8 flex items-center w-full"
                                >
                                    <div
                                        style={{width: skill.level + "%"}}
                                        className={"font-bold text-black bg-violet-300 dark:bg-orange-300 rounded-full h-8 flex items-center justify-center transition-all duration-500 ease-in-out"}
                                    >
                                        {skill.level + "%"}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <Contact/>
        </>
    )
}

export default Side