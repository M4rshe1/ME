import {useEffect, useState} from "react";
import MdComp from "../components/md-comp.tsx";

const Posts = () => {
    const [content, setContent] = useState("");

    const mdFile = "demo";

    useEffect(() => {
        import((`../content/posts/${mdFile}.md`)).then((res) => {
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
        </>
    )
}

export default Posts;