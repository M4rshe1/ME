import {useRef} from "react";
import Title from "./title";
import emailJS from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const serviceID = "service_wogrnim";
    const templateID = "template_9nu2bjt";
    const publicKey = "To0mvycqcZAMWX5t9";

    function handleFormSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        emailJS.sendForm(serviceID, templateID, form.current, publicKey)
            .then(function () {
                console.log('SUCCESS!');
                alert("Your message has been sent!")
                window.location.reload();
            }, function (err) {
                console.log('FAILED...', err);
                alert("Your message was not sent. Please try again.")
            }
        );
    }

 
    return (
        <div
            className="flex flex-col mb-10 my-4 rounded bg-white dark:bg-gray-800 shadow-lg p-4 lg:w-[400px] w-full justify-start"
        >
            <div className="flex items-center w-full">
                <form
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    ref={form}
                    action="/"
                    method="POST"
                    className="fex flex-col w-full"
                    onSubmit={handleFormSubmit}
                >
                    <Title>
                        Contact Me
                    </Title>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md focus:outline-none w-full"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className="my-4 p-2 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md focus:outline-none w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-md focus:outline-none w-full"
                    />
                    <button
                        type="submit"
                        className="font-bold text-center inline-block px-8 py-3 w-max text-base text-white rounded-md 
                        dark:bg-orange-300 bg-violet-300 drop-shadow-md dark:hover:bg-violet-400 hover:bg-orange-300 transition duration-300 ease-in-out"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact