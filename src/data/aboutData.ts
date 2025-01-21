import {
  AboutPageContentProps,
  OurValuesProps,
  OurMissionVisionProps,
} from "@/types/about";

// about page content data object
export const aboutPageContent: AboutPageContentProps = {
  introMainTitle: "Our Company",
  introFirstSectionDescription:
    "Mawared HR is a trusted provider of innovative",
  introSecSectionDescription:
    "helping businesses automate processes, improve accuracy, and engage their workforce. We are committed to delivering excellence, security, and",
  introThirdSectionDescription: "to our global clients.",
  introBoldFirstSectionDescription: "HR solutions,",
  introBoldSecondSectionDescription: "unmatched support",
  introFirstSideImgUrl: "./img/our-company-img-left.png",
  introSecSideImgUrl: "./img/our-company-img-rigth.png ",
  secIntroTitle: "Our Values",
};

// our values data object
export const ourValues: OurValuesProps[] = [
  {
    title: "Innovation",
    imgUrl: "./img/innovation-icon.png",
    description: "Continuously improving to meet our clients’ needs",
  },
  {
    title: "Reliability",
    imgUrl: "./img/real-icon.png",
    description: "Ensuring security and uptime for seamless operations.",
  },
  {
    title: "Collaboration",
    imgUrl: "./img/collab-icon.png",
    description: "Partnering with businesses for mutual success.",
  },
];

// our mission and vision data object
export const ourMissionVision: OurMissionVisionProps[] = [
  {
    title: "Our Mission",
    secTitle: "(Smarter HR solutions)",
    imgUrl: "./img/our-mission-icon.png",
    description:
      "At Mawared HR, our mission is to empower businesses by simplifying and automating HR processes. We aim to create innovative solutions that enhance efficiency, accuracy, and employee satisfaction.",
  },
  {
    title: "Our Vision",
    secTitle: "(For a smarter future)",
    imgUrl: "./img/our-vision-icon.png",
    description:
      "At Mawared HR, we aim to transform HR management with intuitive, data-driven solutions that streamline processes and empower businesses to focus on growth and innovation, creating a more engaged and productive workforce.",
  },
];
