import { NavLink} from "react-router-dom";

const Header = () => {
    
    const navLinks = [
        {
            title: "Home",
            path: "/",
        }, 
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Posts",
            path: "/posts",
        },
    ];
    
    return (
        <div
        className="my-4 rounded bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-row items-center justify-center w-full"
        >
            {/*<NavLink*/}
            {/*to="/"*/}
            {/*className="dark:text-gray-200 mt-4 mb-8 font-bold"*/}
            {/*>*/}
            {/*</NavLink>*/}
            {
                navLinks.map((link) => (
                    <NavLink
                    key={link.title}
                    to={link.path}
                    className="text-2xl font-bold text-gray-900 dark:text-gray-200 hover:text-violet-300 dark:hover:text-orange-300 p-2 px-6 hover:underline"
                    >
                        {link.title}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Header;