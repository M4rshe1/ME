import posts from "../data/posts.json";
import {Link} from "react-router-dom";
import Title from "../components/title.tsx";

interface interfacePosts {
    title: string;
    description: string;
    date: string;
    slug: string;
}

const Posts = ({head = 0}: { head: number }) => {
    const postLength = posts.length;
    
    if (head > 0) {
        posts.slice(0, head)
    }


    return (
        <>
            <div>
            
                <Title
                    subtitle={postLength > 0 && head > 0 && head < postLength? `${head} of ${postLength} posts` : ""}
                link={"/posts"}
                >
                    Posts
                </Title>
            </div>
            {
                posts.map((post: interfacePosts, index) => {
                    return (
                        <div
                            className="md-component"
                            key={index}
                        >
                            <div
                                className="flex sm:items-center justify-start sm:flex-row flex-col "
                            >
                                <Link
                                    to={"/posts/" + post.slug}
                                >
                                    <h2>
                                        {post.title}
                                    </h2>
                                </Link>
                                <span
                                    className="mt-2 sm:ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                >Posted on: {
                                    post.date
                                }</span>
                            </div>
                            <p>
                                {post.description}
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts;