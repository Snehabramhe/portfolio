import adobexdicon from "../../assets/icons/adobexdicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import muiicon from "../../assets/icons/muiicon.svg";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: "Hi, I'm Sneha Bramhe",
  subtitle: "React js Developer ",
  description: `I'm Sneha Bramhe, a React js developer with the goal of advancing my career and participating in inspiring projects. 
    Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!`,
  buttons: [
    {
      name: "Contact",
      label: "Contact me",
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: "My Projects",
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Ingram Micro",
    description: `Ingram Micro is an American distributor of information technology products and services. It is a distributor of 
      IT solutions and services and provides supply chain services, integration, technical support, training, financial and 
      credit services, marketing, mobility logistics services, and cloud services. We amplify thousands of vendor, reseller and 
      retailer partners by customizing and delivering highly targeted solutions and services for industry verticals, 
      business-to-business customers and commercial needs. `,
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Material UI", icon: muiicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://www.ingrammicro.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Dealsy",
    description: `Dealsy helps you to create deals and reach a vast network of food enthusiasts 
      and potential customers. With Dealsy, you have the ability to create, schedule and manage your 
      deals on one easy to use interface. All you have to do is snap a quick photo of the dish, enter the details and hit publish. 
      Within minutes your new deal will be ready to be claimed.
      Features: auth, create and edit profile, dashboard to view all deals, add new deal, edit deal, delete detail and duplicate deal, 
      view deal detail, reset password`,
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Material UI", icon: muiicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://dealsy.ca/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  // {
  //   title: "Camfil",
  //   description: `eprehenderit incididunt est qui quis sint. Reprehenderit nulla pariatur ipsum ut dolore irure sunt enim ipsum dolore ex 
  //     exercitation cupidatat voluptate. Ipsum nulla minim laboris magna velit elit aliqua eu. Quis aliquip magna ipsum cupidatat 
  //     minim aute pariatur voluptate nulla nostrud aliqua. Proident eu ipsum irure proident velit labore ea velit aute 
  //     Quis aliquip magna ipsum cupidatat Quis aliquip magna ipsum cupidatat minim aute pariatur voluptate nulla nostrud aliqua`,
  //   technologies: [
  //     { name: "React", icon: reacticon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "REST Api", icon: apiicon },
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "Material UI", icon: muiicon },
  //   ],
  //   image: instorMockup,
  //   deploymenturl: "",
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
  {
    title: "Feis.Link",
    description: `This competition-based web application, built on React.js, integrates the capabilities of Bootstrap and Material-UI (MUI) 
      to provide better user experience. The application caters to two distinct types of competitions, namely Fieseanna and Grade 
      Exams, each offering a diverse array of events.The application is structured around two distinct user modules: 
      1. Organizer: Orgainizer can create an event and make it like and edit it.
      2. Parent: Parent can manage participantst and view entered events.
      `,
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Material UI", icon: muiicon },
    ],
    image: instorMockup,
    deploymenturl: "",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;
export const liveTickerData = {
  content: "More Projects on Github",
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MUI",
        hash: "#MUI",
        icon: muiicon,
        color: "#007FFF",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
    ],
  },
] as const;

export const navLinks = [
  { text: "Home", hash: "#home", icon: GoHome },
  { text: "Skills", hash: "#skills", icon: GoStack },
  { text: "Projects", hash: "#projects", icon: GoProject },
  { text: "About me", hash: "#about-me", icon: GoPerson },
  { text: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { text: "Imprint", hash: "#imprint", data: <Imprint /> },
  { text: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "snehabramhe03@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/sneha-bramhe-ba44a5272/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Snehabramhe?tab=repositories",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:myemail@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const aboutMeData = {
  title: "About me",
  description: "A few code snippets about me",
  paragraphs: [
    {
      title: "On the Fast Lane of Life",
      description:
        `Besides coding, I like to be on the fast lane - in the truest sense of the word. Travelling is my passion, 
        and also I enjoy cooking and baking, my creative juices will be in full flow.`,
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        `My journey as a web developer is only a part of my life path. I live by the motto that the adventure only 
        begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.`,
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: "Contact",
  description: "Write me a message and I will get back to you.",
  note: "Note: Please mention email in message as well.",
  inputfields: [
    {
      name: "from_name",
      placeholder: "Your Name",
      type: "text",
      validation: "Please fill in your name",
      pattern: "{2}",
    },
    {
      name: "from_email",
      placeholder: "Your E-Mail",
      type: "email",
      validation: "Please fill in your email",
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: "Your Subject",
      type: "text",
      validation: "Please fill in your subject",
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: "Your Message",
    name: "message",
    rows: 10,
    validation: "Please fill in your message",
    pattern: "{10}",
  },
  button: {
    value: "Send",
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox:
      "I agree that Sneha bramhe may use my personal data (name and e-mail address) to contact me.",
    description:
      "By submitting this request, you acknowledge that you have read the Private Policy",
  },
} as const;

export const toastMessages = {
  loadingProject: "The live demo will open shortly. Starting servers...",
  successEmailSent:
    "Thank you for your email. I will get back to you as soon as possible",
  failedEmailSent:
    "Unfortunately the sending of your email did not work. Please try again later",
  failedValidationName: "Please fill in your name",
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["10rem", "10rem"],
  },
  middle: {
    heights: ["15rem", "15rem"],
  },
  large: {
    heights: ["20rem", "20rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
