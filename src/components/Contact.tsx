import React, { useState, useRef } from "react";
import Button from "./Button";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_hl95h5x",
          "template_cv0vnaq",
          e.currentTarget,
          "wQHtJBvc36kFAudMa"
        )
        .then(
          (res) => console.log(res, "res"),
          (error) => console.log(error.text)
        );
      toast.success(toastMessages.successEmailSent, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(toastMessages.failedEmailSent, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "from_name") {
      setName(value);
    } else if (name === "from_email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message" && value.length <= 250) {
      setMessage(value);
    }
  };

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-12"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {contactData.title}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {contactData.description}
            </h2>
            <h4 className="text-[--black] text-center mt-4">
              {contactData.note}
            </h4>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-4 mb-4 max-lg:flex-col max-lg:p-10">
          <form
            className="flex flex-col gap-6 justify-center items-center  px-4 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={
                  input.name === "from_name"
                    ? name
                    : input.name === "from_email"
                    ? email
                    : input.name === "subject"
                    ? subject
                    : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                }}
                onChange={handleInputChange}
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={contactData.textarea.placeholder}
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              }`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>{contactData.privacyOptIn.checkbox}</p>
            </div>
            <p>{contactData.privacyOptIn.description}</p>
            <Button
              value={contactData.button.value}
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
