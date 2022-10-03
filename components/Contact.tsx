import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { MouseEvent, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Contact = ({}: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = `mailto:emekarexchukwu@gmail.com?subject=${subject}&body=This is ${name}: ${message}`;

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute md:top-16 uppercase tracking-widest md:tracking-[10px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 -mt-8">
        <h4 className="text-2xl md:text-3xl font-semibold text-center max-w-[90vw] mx-auto">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk</span>
        </h4>
        <div className="space-y-1 md:space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a]" />
            <p className="2xl">+2348081900226</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a]" />
            <p className="2xl">emekarexchukwu@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a]" />
            <p className="2xl">Jos, Plateau</p>
          </div>
        </div>

        <motion.form
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-2 w-[70vw] md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contactInput"
            placeholder="Message"
          />
          <button
            onClick={(e) => onSubmit(e)}
            type="submit"
            className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/90 p-4 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
