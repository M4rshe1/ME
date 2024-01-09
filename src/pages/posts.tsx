import {useEffect, useState} from "react";
import MdComp from "../components/md-comp.tsx";

// const fetchDirectory = async (path: string) => {
//     const res = await fetch(path)
//     return await res.text()
// }

const Posts = () => {
    const [content, setContent] = useState("");

    const mdFile = "demo";

    useEffect(() => {
        // fetchDirectory(`/content/posts`).then((req) => {
        //     console.log(req)
        //     }
        // );
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