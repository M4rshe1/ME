import MdComp from "../components/md-comp.tsx";
import {Link, useParams} from "react-router-dom";
import posts from "../data/posts.json";
import NotFound from "./404.tsx";
import {useEffect, useState} from "react";
import Title from "../components/title.tsx";

interface InterfacePost {
    title: string;
    description: string;
    date: string;
    slug: string;
}

//---
// title: This is a demo post
// date: 2024-01-04
// tags: [demo]
// description: This is a demo post that shows all the markdown features
// archived: false
// ---

const removeMetadata = (md: string) => {
    return md.split("---").slice(2).join("---").trim();
}


const Post = () => {
    const {postID}: { postID?: string } = useParams(); // Make postID optional
    const [mdContent, setMdContent] = useState("");
    const [postExists, setPostExists] = useState(true);
    const postIndex = posts.findIndex((post: InterfacePost) => post.slug === postID);
    useEffect(() => {
        if (!postID) {
            return; // Exit if postID is not available
        }

        const postExists = posts.some((post: InterfacePost) => post.slug === postID);

        if (!postExists) {
            setPostExists(false);
        } else {
            fetch(`/content/posts/${postID}.md`)
                .then((res) => res.text())
                .then((md) => {
                    setMdContent(removeMetadata(md));
                })
                .catch((error) => {
                    console.error("Error fetching markdown:", error);
                });
        }
    }, [postID]);

    if (!postExists || !postID) {
        return <NotFound/>;
    }

    return (
        <>
            <div>
                <Title
                    subtitle={"Posted on: " + posts.filter((post: InterfacePost) => post.slug === postID)[0].date.toString()}
                >
                    {posts.filter((post: InterfacePost) => post.slug === postID)[0].title}
                </Title>
            </div>
            <MdComp>
                {
                    mdContent
                }
            </MdComp>
            <div
                className="flex justify-between"
            >
                <div>

                    {
                        postIndex === posts.length - 1 ?
                            <Link
                                to={"/posts/" + posts[postIndex - 1].slug}
                                className="hover:underline cursor-pointer"
                            >
                                &lt; Previous
                            </Link> : ""
                    }
                </div>
                <div>
                    {

                        postIndex === 0 ?
                            <Link
                                to={"/posts/" + posts[postIndex + 1].slug}
                                className="hover:underline cursor-pointer"
                            >
                                Next &gt;
                            </Link> : ""
                    }
                </div>
            </div>
        </>
    );
};

export default Post;
