import Contact from './contact';
import Skills from './skills';
import skills from '../data/skills.ts';
import languages from "../data/languages.ts";
import Line from "./line.tsx";

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
                    className="flex flex-col items-start justify-center w-full mb-6"
                >
                    <p
                        className="flex items-center justify-start gap-2 w-full"
                    >
                        <div
                            className="text-violet-300 dark:text-orange-300 bg-violet-300 dark:bg-orange-300 rounded-full"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                 viewBox="0 0 512 512"
                                 className="w-6 h-6 p-1"
                            >
                                <path
                                    d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
                            </svg>
                        </div>
                        <span
                            className="ml-1"
                        >Betriebsinformatiker</span>
                    </p>
                    {/*className="text-violet-300 dark:text-orange-300 bg-violet-300 dark:bg-orange-300 rounded-full w-4 p-1 scale-150"*/}
                    <p
                        className="flex items-center justify-start gap-2 w-full mt-2"
                    >
                        <div
                            className="text-violet-300 dark:text-orange-300 bg-violet-300 dark:bg-orange-300 rounded-full"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18"
                                 className="w-6 h-6 p-1"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                        </div>
                        <span
                            className="ml-1"
                        >Switzerland</span>
                    </p>
                    <p
                        className="flex items-center justify-start gap-2 w-full mt-2"
                    >
                        <div
                            className="text-violet-300 dark:text-orange-300 bg-violet-300 dark:bg-orange-300 rounded-full"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                 viewBox="0 0 512 512"
                            className="w-6 h-6 p-1"
                            >
                                <path
                                    d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                            </svg>
                        </div>
                        <a
                            href="mailto:colin.heggli@gmail.com"
                            className="ml-1"
                        >colin.heggli@gmail.com</a>
                    </p>
                </div>
                <Line/>
                <Skills
                    skillName="Skills"
                    skills={skills}
                    head={4}
                >
                </Skills>
                <Line/>
                <Skills
                    skillName="Languages"
                    skills={languages}
                    head={4}
                />
            </div>
            <Contact/>
        </>
    )
}

export default Side