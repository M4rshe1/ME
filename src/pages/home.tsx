import {useEffect, useState} from "react";
import Timeline from "../components/timeline.tsx";
import MdComp from "../components/md-comp.tsx";
import Projects from "./projects.tsx";
import Posts from "./posts.tsx";

const Home = () => {
    const [content, setContent] = useState("loading...");

    const mdFile = "about";

    useEffect(() => {
        fetch(`/content/${mdFile}.md`)
            .then((res) => res.text())
            .then((md) => {
                setContent(md);
            });
    }, []);

    return (
        <>
            <MdComp>
                {content}
            </MdComp>
            <Timeline/>
            <Projects
                head={3}
            />
            <Posts head={3}/>
        </>
    )
}

export default Home;