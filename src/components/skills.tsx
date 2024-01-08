import {useEffect, useState} from "react";
import SkillsItem from "./skillsItem.tsx";

interface SkillsProps {
    name: string;
    level: number;
    colorLanguage: string;
    nameEnglish?: string;
    comment?: string;
}

const Skills = ({skillName, skills, head = 0}: { skillName: string; skills: SkillsProps[]; head?: number; }) => {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const [displayedSkills, setDisplayedSkills] = useState<SkillsProps[]>([]);
    
    if (head === 0) {
        head = skills.length;
    }

    useEffect(() => {
        if (head && head < skills.length && !skillsExpanded) {
            setDisplayedSkills(skills.slice(0, head));
        } else {
            setDisplayedSkills(skills);
        }
    }, [skillsExpanded, head, skills]);

    const toggleSkills = () => {
        setSkillsExpanded(!skillsExpanded);
    };

    return (
        <div className="flex flex-col items-start justify-center w-full mb-6">
            <h1 className="comp-title">{skillName}</h1>
            {
                displayedSkills.map((item: SkillsProps, index: number) => (
                    <SkillsItem
                        key={index}
                        name={item.name}
                        level={item.level}
                        colorLanguage={item.colorLanguage}
                        comment={item.comment}
                    />
                ))
            }
            {
                head && head > 0 && head < skills.length && (
                    <button
                        onClick={toggleSkills}
                        className="text-violet-300 dark:text-orange-300 hover:underline mt-2"
                    >
                        {skillsExpanded ? "Show less" : "Show more"}
                    </button>
                )
            }
        </div>
    );
};

export default Skills;
