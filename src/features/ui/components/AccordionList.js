import React from "react";
import { Flex, Text } from "theme-ui";

const aging = [
  {
    title: "Treatments",
    header: "true",
    image: "",
  },
  {
    title: "Dermal filler (lips, chin, cheek, jaw, nose..)",
    header: "true",
    image: "",
    text: "0.5ml £150, 1ml £280, 2ml £550, 3ml £750...+",
  },
  {
    title: "Anti-wrinkle injections with BOTOX®",
    image: "",
    text: "£100 (one area), £240 (3 areas)",
  },
  {
    title: "Microneedling with INFINI BTX® or SEVENTY HYAL®",
    image: "",
    text:
      "£110-130 per session depending on serum chosen, discounted packages available",
  },
  {
    title: "PROFHILO® skin booster",
    image: "",
    text: "£250 per session / £400 package",
  },
  {
    title: "SEVENTY HYAL® skin booster",
    image: "",
    text: "£130 per session / £350 package",
  },
  {
    title: "SUNEKOS® around the eye skin booster",
    image: "",
    text: "£130 per session / £350 package",
  },

  // {
  //   title: "Chemical Peels",
  //   image: "",
  //   text:
  //     "£70 per session, or 4 for £250. A choice of peel for different skin concerns",
  // },

  // {
  //   title: "Brow Lamination with Tint",
  //   header: "true",
  //   image: "",
  //   text: "£70",
  // },
  // {
  //   title: "Lash Lift & Tint",
  //   header: "true",
  //   image: "",
  //   text: "£70",
  // },
  // {
  //   title: "Brow Lam + Lash Lift & Tint combined",
  //   header: "true",
  //   image: "",
  //   text: "£120",
  // },
  // {
  //   title: "AQUALYX® fat dissolving injections",
  //   header: "true",
  //   image: "",
  //   text:
  //     "Per session £150 (small area), £250 (large area), packages available",
  // },
];

const Box = ({ treatments, loading }) => (
  <Flex
    sx={{
      border: loading === true ? "none" : "1px solid black",
      flexDirection: "column",
      width: "100%",
      maxWidth: ["100%", "max-content"],
      mr: ["0px", "10px"],
    }}
  >
    {treatments.map((treatment, index) => (
      <Flex
        sx={{
          flexDirection: "row",
          py: "3px",
          px: "10px",
          border: "0.1px solid #e79fc4",
          // cursor: "pointer",
          bg:
            index === 0 && loading !== true ? "#e79fc4" : "rgba(222,222,222,0)",
          textDecoration: index === 0 ? "underline" : "none",
        }}
      >
        <Text
          sx={{
            fontSize: "15px",
            mr: "10px",
            display: loading === true ? "none" : "block",
          }}
        >
          {treatment.title}
          {":"}
        </Text>
        <Text
          sx={{
            fontSize: "12px",
            textAlign: "right",
            mt: "3px",
            width: "100%",
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
    </Flex>
  );
};

export default AccordionList;
