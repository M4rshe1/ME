import {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// Pages
import Home from './pages/home';
import Projects from './pages/projects';
import Posts from "./pages/posts.tsx";
import Post from "./pages/post.tsx";

// Components
import Header from './components/header';
import Footer from './components/footer';
import Side from "./components/side.tsx";
import NotFound from "./pages/404.tsx";
import Project from "./pages/project.tsx";


function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const sun = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
        </svg>
    );

    const moon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    );

    return (
        <BrowserRouter>
            <div className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen font-inter">
                <div className="w-full px-4 min-h-screen flex flex-col items-center">
                    <button
                        type="button"
                        onClick={handleThemeSwitch}
                        className="absolute p-2 z-10 right-8 top-36 sm:top-9 bg-violet-300 text-white dark:bg-orange-300 text-lg rounded-md"
                    >
                        {theme === 'dark' ? sun : moon}
                    </button>
                    <Header/>
                    <div className="flex lg:flex-row flex-col w-full justify-start relative gap-4 min-h-screen">
                        <div className="flex flex-col justify-start lg:w-[400px]">
                        <Side/>
                        </div>
                        <div className="flex flex-col justify-start relative md-content w-full">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/projects" element={<Projects head={0}/>}/>
                                <Route path="/projects/:repositoryID" element={<Project/>}/>
                                <Route path="/posts" element={<Posts head={0}/>}/>
                                <Route path="/posts/:postID" element={<Post/>}/>
                                <Route path="/*" element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App