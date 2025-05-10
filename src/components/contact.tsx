import React, { useRef } from "react";
import Title from "./title";


const Contact = () => {
  const form: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  function handleFormSubmit(event: { preventDefault: () => void; }) {
    // make a link mailto colin@heggli.dev with the content

    if (!form.current) {
      return;
    }

    event.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const link = "mailto:colin@heggli.dev?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);


    window.open(link, "_blank");
    // Reset the form
    form.current.reset();
    // Show a success message
    alert("Your message has been sent!");
    // Optionally, you can redirect the user or show a success message
  }


  return (
    <div
      className="flex flex-col mb-10 my-4 rounded bg-white dark:bg-gray-800 shadow-lg p-4 lg:w-[400px] w-full justify-start"
    >
      <div className="flex items-center w-full">
        <form
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
  );
};

export default Contact;