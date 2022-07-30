import React from "react";
import { Image, Flex } from "theme-ui";
import styled from "styled-components";
import teosyal from "../assets/teosyal-fillers.png";
import Text from "../features/ui/components/Text";

const FillerPhoto = styled(Image)`
  width: 400px;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
`;

const Filler = ({ loading, headerFont, bodyFont }) => (
  <Flex
    sx={{
      flexDirection: ["column", "row"],
      mt: "10px",
      pb: "20px",
      display: loading === true ? "none" : "block",
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        display: loading === true ? "none" : "block",
      }}
    >
      <Text
        sx={{
          my: "10px",
          fontWeight: 600,
          fontSize: headerFont,
          display: loading === true ? "none" : "block",
        }}
      >
        What dermal fillers does Emily use?
      </Text>
      <Text
        sx={{
          fontSize: bodyFont,
          mt: "20px",
          width: "98%",
          display: loading === true ? "none" : "block",
        }}
      >
        Emily uses TEOSYAL® by TEOXANE and JUVÉDERM®, who offer 'the most
        complete range of 100% non-animal origin resorbable hyaluronic
        acid-based dermal filler products for a global and personalized
        treatment of the face.'
        <br></br>
        <br></br> TEOXANE say 'The results are seen immediately after the
        treatment, although this gradually improves over the course of the
        following 2–4 weeks. Hyaluronic acid dermal filler treatments are not
        permanent and usually last up to 22 months. Nevertheless, the average
        duration of treatment depends on several factors including your skin
        type, the severity of the wrinkle/fold to be corrected, the type of
        injection and the volume of product injected.'<br></br>
        <br></br>
        Comparing JUVÉDERM® and TEOSYAL®: 'Both JUVÉDERM® and TEOSYAL® have a
        similar mechanism of action, list of ingredients, and duration of
        action, making them very similar in terms of efficacy and safety. Either
        brand can help achieve a desired look, with the deciding factor lying
        mostly in practitioner and patient preference.' Both are premium
        products.
      </Text>
    </Flex>
    <FillerPhoto
      src={teosyal}
      sx={{
        display: loading === true ? "none" : "block",
        mt: ["15px", "0", "0"],
        mr: ["0", "0", "0", "10px"],
      }}
    />
  </Flex>
);

export default Filler;
