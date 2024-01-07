
import {useEffect, useState} from "react";
import Timeline from "../components/timeline.tsx";
import MdComp from "../components/md-comp.tsx";
import Projects from "./projects.tsx";
import Title from "../components/title.tsx";

const Home = () => {
    const [content, setContent] = useState("");

    const mdFile = "about";
    
    useEffect(() => {
        import((`../content/${mdFile}.md`)).then((res) => {
                fetch(res.default)
                    .then((res) => res.text())
                    .then((md) => {
                        setContent(md);
                    });
            }
        );
    }, []);

    return (
        <>
            <MdComp>
                {content}
            </MdComp>
            <Timeline/>
            <Projects/>
        </>
    )
}

export default Home;