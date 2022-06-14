import React from "react";
import { Flex, Link } from "theme-ui";
import Text from "../ui/components/Text";
import HoursText from "../ui/components/HoursText";

const headerFont = "24px";
const bodyFont = "18px";

const SmilecareMention = ({ loading }) => (
  <>
    <Flex
      sx={{
        borderBottom:
          loading === true
            ? "1px solid rgba(222,222,222,0)"
            : "1px solid black",
        mb: "10px",
        width: "85%",
        display: loading === true ? "none" : "block",
      }}
    />
    <Text
      sx={{
        fontSize: headerFont,
        display: loading === true ? "none" : "block",
      }}
    >
      Anti-wrinkle injections in Chiswick (Smilcare Dental Practice, W4 2ED)
    </Text>
    <Text
      fontSize={headerFont}
      sx={{
        fontSize: "12px",
        mb: "10px",
        display: loading === true ? "none" : "block",
      }}
    >
      *You must be 18+ years of age and have photographic proof of age.
    </Text>
    <Flex
      sx={{
        flexDirection: "column",
        backgroundImage:
          loading === true
            ? "rgba(222,222,222,0)"
            : "linear-gradient(to right, #FFF7F8, #FFE6EA)",
        mb: "10px",
        p: "5px",
        width: ["100%", "100%", "100%", "85%"],
        display: loading === true ? "none" : "block",
      }}
    >
      <HoursText
        sx={{
          fontSize: bodyFont,
          mb: "10px",
          textDecoration: "underline",
          display: loading === true ? "none" : "block",
        }}
      >
        Days:
      </HoursText>
      <HoursText
        sx={{
          fontSize: bodyFont,
          display: loading === true ? "none" : "block",
        }}
      >
        Monday 8.30am - 5pm<br></br>Wednesday 8.30am - 4pm<br></br>Friday 8.30am
        - 2pm
      </HoursText>
    </Flex>
    <Link
      href="https://www.smilecarechiswickdentists.co.uk/"
      target="_blank"
      rel="noreferrer"
      sx={{
        textDecoration: "none",
        display: loading === true ? "none" : "block",
      }}
    >
      <Flex
        sx={{
          flexDirection: "row",
          borderRadius: "4px",
          p: "5px",
          maxWidth: "max-content",
          bg: "#bb3385",
          mb: "20px",
          display: loading === true ? "none" : "block",
        }}
      >
        <Text
          sx={{
            color: "#fcbc5c",
            display: loading === true ? "none" : "block",
          }}
        >
          VISIT SMILECARE'S WEBSITE FOR BOOKING
        </Text>
      </Flex>
    </Link>
  </>
);
export default SmilecareMention;
