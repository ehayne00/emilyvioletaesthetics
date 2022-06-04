import React from "react";
import Modern from "../layouts/Modern";
import { Image, Flex, Link } from "theme-ui";
import openingImage from "../assets/opening-photo.png";
import emilyPhoto from "../assets/emily-photo.JPG";
import cpdPhoto from "../assets/cpd-pic.png";
import ucl from "../assets/ucl.png";
import styled from "styled-components";
import Text from "../ui/Text";
import HoursText from "../ui/HoursText";
import insta from "../assets/instagram.svg";
import email from "../assets/email.png";

const headerFont = "24px";
const bodyFont = "18px";

const EmilyPhoto = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100px;
  object-fit: contain;
`;

const OpeningPhoto = styled(Image)`
  height: auto;
  object-fit: contain;
`;

const CPDPhoto = styled.img`
  width: 150px;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
`;

const UCLImage = styled.img`
  width: 250px;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
`;

const ExternalLink = ({ to = "/", children }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    {children}
  </a>
);

const About = () => (
  <Modern>
    <Flex
      sx={{
        flexDirection: ["column-reverse", "row"],
        alignItems: "flex-start",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text
          fontSize={headerFont}
          sx={{
            fontSize: headerFont,
            mt: ["10px", "0px"],
          }}
        >
          Dermal Filler in North London (I come to you!)
        </Text>
        <Text
          fontSize={headerFont}
          sx={{
            fontSize: "12px",
            mb: "10px",
            width: "90%",
          }}
        >
          *The following postcodes only: N10, N8, N6, N22, N12, N11, N19. You
          must be 18+ years of age and have photographic proof of age. A deposit
          is required upon booking, which is refundable up to 24 hours before
          your appointment slot and will be deducted from the overall treatment
          price if treatment is completed.
        </Text>
        <HoursText
          sx={{
            fontSize: bodyFont,
            mb: "10px",
            textDecoration: "underline",
          }}
        >
          Days:
        </HoursText>
        <HoursText
          sx={{
            fontSize: bodyFont,
            mb: "10px",
          }}
        >
          Friday 2pm - 6pm<br></br>Saturday (one per month) 9am - 1pm
        </HoursText>
        <ExternalLink to="https://emilyvioletaesthetics.simplybook.it">
          <Flex
            sx={{
              flexDirection: "row",
              borderRadius: "4px",
              p: "5px",
              maxWidth: "max-content",
              bg: "#bb3385",
              mb: "20px",
              cursor: "pointer",
            }}
          >
            <Text sx={{ color: "#fcbc5c", fontWeight: 700 }}>
              BOOK YOUR DERMAL FILLER VISIT HERE
            </Text>
          </Flex>
        </ExternalLink>
        <Flex
          sx={{ borderBottom: "1px solid black", mb: "10px", width: "85%" }}
        />
        <Text
          sx={{
            fontSize: headerFont,
          }}
        >
          Anti-wrinkle injections in Chiswick (Smilcare Dental Practice, W4 2ED)
        </Text>
        <Text
          fontSize={headerFont}
          sx={{
            fontSize: "12px",
            mb: "10px",
          }}
        >
          *You must be 18+ years of age and have photographic proof of age.
        </Text>
        <HoursText
          sx={{
            fontSize: bodyFont,
            mb: "10px",
            textDecoration: "underline",
          }}
        >
          Days:
        </HoursText>
        <HoursText
          sx={{
            fontSize: bodyFont,
            mb: "10px",
          }}
        >
          Monday 8.30am - 5pm<br></br>Wednesday 8.30am - 4pm<br></br>Friday
          8.30am - 2pm
        </HoursText>
        <ExternalLink to="https://www.smilecarechiswickdentists.co.uk/">
          <Flex
            sx={{
              flexDirection: "row",
              borderRadius: "4px",
              p: "5px",
              maxWidth: "max-content",
              bg: "#bb3385",
              mb: "20px",
            }}
          >
            <Text sx={{ color: "#fcbc5c" }}>
              VISIT SMILECARE'S WEBSITE FOR BOOKING
            </Text>
          </Flex>
        </ExternalLink>
      </Flex>
      <OpeningPhoto
        sx={{ width: ["100%", "600px", "100%"] }}
        src={openingImage}
      />
    </Flex>
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        mt: "10px",
        bg: "#e79fc4",
        pb: "20px",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          sx={{
            my: "10px",
            fontWeight: 600,
            fontSize: headerFont,
          }}
        >
          Who is Emily?
        </Text>
        <EmilyPhoto src={emilyPhoto} />
      </Flex>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        <Text sx={{ fontSize: bodyFont, mt: "20px", width: "96%" }}>
          Emily graduated from UCLH in Dental Hygiene (dipDent, GDC:244931) and
          went on to complete CPD accredited courses in Basic & Advanced Dermal
          Fillers, Non-surgical Rhinoplasty, Lip Augmentation Masterclass and
          Basic & Advanced Botox.
        </Text>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            width: "100%",
            justifyContent: "space-around",
            alignItems: ["center", "flex-start"],
          }}
        >
          <CPDPhoto src={cpdPhoto} />
          <UCLImage src={ucl} />
        </Flex>
      </Flex>
    </Flex>
    <Flex
      sx={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link
        href="mailto:emilyvioletaesthetics@gmail.com"
        sx={{ display: ["block", "none", "none"] }}
      >
        <Image width="55px" height="55px" src={email} />
      </Link>
      <Link
        href="https://www.instagram.com/emilyvioletaesthetics/"
        sx={{ display: ["block", "none", "none"] }}
      >
        <Image width="30px" height="30px" src={insta} />
      </Link>
    </Flex>
  </Modern>
);

export default About;
