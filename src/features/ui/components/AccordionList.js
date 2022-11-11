import React from "react";
import { Flex, Text } from "theme-ui";

const aging = [
  {
    title: "Anti-aging Treatments",
    header: "true",
    image: "",
  },
  {
    title: "Anti-wrinkle injections with BOTOX®",
    image: "",
    text: "£100 (one area), £240 (3 areas)",
  },
  {
    title: "PROFHILO® skin booster",
    image: "",
    text: "£250 per session / £400 package",
  },
  {
    title: "SEVENTY HYAL® skin booster",
    image: "",
    text: "£130 per session / £300 package",
  },
  // { title: "Micro-needling", image: "", text: "Coming soon" },
  // {
  //   title: "Derma-planing",
  //   image: "",
  //   text: "Coming soon",
  // },
  // {
  //   title: "Chemical Peels",
  //   image: "",
  //   text: "Coming soon",
  // },
];
const beauty = [
  {
    title: "Other Beauty Treatments",
    header: "true",
    image: "",
  },
  {
    title: "AQUALYX® fat dissolving injections",
    header: "true",
    image: "",
    text:
      "Per session £150 (small area), £250 (large area), packages available",
  },
  {
    title: "Dermal filler (lips, chin, cheek, jaw, nose..)",
    header: "true",
    image: "",
    text: "0.5ml £150, 1ml £280, 2ml £550, 3ml £750...+",
  },
  // {
  //   title: "Lash lift and tint",
  //   header: "true",
  //   image: "",
  //   text: "£70",
  // },
  // {
  //   title: "Facials",
  //   image: "",
  //   text: "Coming soon",
  // },
];

const Box = ({ treatments, loading }) => (
  <Flex
    sx={{
      border: loading === true ? "none" : "1px solid black",
      flexDirection: "column",
      width: ["100%", "50%"],
      maxWidth: ["100%", "max-content"],
      mr: ["0px", "10px"],
    }}
  >
    {treatments.map((treatment, index) => (
      <Flex
        sx={{
          flexDirection: "column",
          py: "3px",
          px: "10px",
          // cursor: "pointer",
          bg:
            index === 0 && loading !== true ? "#e79fc4" : "rgba(222,222,222,0)",
          textDecoration: index === 0 ? "underline" : "none",
        }}
      >
        <Text
          sx={{
            fontSize: "15px",
            display: loading === true ? "none" : "block",
          }}
        >
          {treatment.title}
        </Text>
        <Text
          sx={{
            fontSize: "12px",
            display: loading === true ? "none" : "block",
          }}
        >
          {treatment.text}
        </Text>
      </Flex>
    ))}
  </Flex>
);

const AccordionList = ({ loading }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        mb: "15px",
        display: loading === true ? "none" : "block",
      }}
    >
      <Box treatments={aging} loading={loading} />
      <Box treatments={beauty} loading={loading} />
    </Flex>
  );
};

export default AccordionList;
