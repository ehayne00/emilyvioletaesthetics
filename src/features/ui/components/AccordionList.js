import React from "react";
import { Flex } from "theme-ui";

const aging = [
  {
    title: "Anti-aging Treatments",
    header: "true",
    image: "",
    text: "Profhilo is blah",
  },
  { title: "PROFHILO® skin booster", image: "", text: "Profhilo is blah" },
  { title: "SEVENTY HYAL® skin booster", image: "", text: "Profhilo is blah" },
  {
    title: "Anti-wrinkle injections with BOTOX®",
    image: "",
    text: "Anti-wrinkle blah",
  },
  { title: "Micro-needling", image: "", text: "microneedling blah" },
  {
    title: "Derma-planing",
    image: "",
    text: "Fat dissolving blah",
  },
  {
    title: "Chemical Peels",
    image: "",
    text: "Fat dissolving blah",
  },
];
const beauty = [
  {
    title: "Other Beauty Treatments",
    header: "true",
    image: "",
    text: "Profhilo is blah",
  },
  {
    title: "AQUALYX® fat dissolving injections",
    header: "true",
    image: "",
    text: "Profhilo is blah",
  },
  {
    title: "Dermal filler",
    header: "true",
    image: "",
    text: "Profhilo is blah",
  },
  {
    title: "Lash lift and tint",
    header: "true",
    image: "",
    text: "Profhilo is blah",
  },
  {
    title: "Facials",
    image: "",
    text: "Fat dissolving blah",
  },
];

const Box = ({ treatments }) => (
  <Flex
    sx={{
      border: "1px solid black",
      flexDirection: "column",
      width: ["100%", "50%"],
      maxWidth: ["100%", "max-content"],
      mr: ["0px", "10px"],
    }}
  >
    {treatments.map((treatment, index) => (
      <Flex
        sx={{
          py: "5px",
          px: "10px",
          // cursor: "pointer",
          bg: index === 0 ? "#e79fc4" : "rgba(222,222,222,0)",
          textDecoration: index === 0 ? "underline" : "none",
        }}
      >
        {treatment.title}
      </Flex>
    ))}
  </Flex>
);

const AccordionList = () => {
  return (
    <Flex sx={{ flexDirection: ["column", "row"], mb: "15px" }}>
      <Box treatments={aging} />
      <Box treatments={beauty} />
    </Flex>
  );
};

export default AccordionList;
