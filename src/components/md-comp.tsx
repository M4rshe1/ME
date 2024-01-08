import Markdown from "markdown-to-jsx";
import React, {useEffect, useRef} from "react";
import hljs from "highlight.js";

interface MdCompProps {
    children: string;
}

function getMarkdownCodeBlockLanguages(mdCode: string) {
    // return mdCode.split("\n")[0].replace(/```/g, "").trim();
//     get all languages from code blocks
    const languages: string[] = [];
    const codeBlocks = mdCode.split("```");
    codeBlocks.forEach((codeBlock, index) => {
        if (index % 2 !== 0) {
            const language = codeBlock.split("\n")[0].trim();
            languages.push(language);
        }
    });
    return languages;
}

const MdComp: React.FC<MdCompProps> = ({ children }) => {
    const languages: string[] = getMarkdownCodeBlockLanguages(children);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const codeBlocks = containerRef.current.querySelectorAll("pre code");
            codeBlocks.forEach((codeBlock, index) => {
                if (index < languages.length) {
                    codeBlock.classList.add(languages[index]);
                    hljs.highlightBlock(codeBlock as HTMLElement);
                }
            });
        }
    }, [children, languages]);


    return (
        <div className="md-component" ref={containerRef}>
            <Markdown>{children}</Markdown>
        </div>
    );
};

export default MdComp;
