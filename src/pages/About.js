import React from "react";
import Modern from "../layouts/Modern";
import { Image, Flex, Button } from "theme-ui";
import openingImage from "../assets/opening-photo.png";
import emilyPhoto from "../assets/emily-photo.JPG";
import styled from "styled-components";
import Text from "../ui/Text";
import HoursText from "../ui/HoursText";

const headerFont = "24px";
const bodyFont = "18px";

const EmilyPhoto = styled(Image)`
  width: 200px;
  height: auto;
  border-radius: 100px;
  @media (max-width: 500px) {
    width: 100%;
  }
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
    <Flex sx={{ flexDirection: "row" }}>
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            width: "100%",
            borderBottom: "1px solid black",
            mb: "10px",
          }}
        >
          <Text
            fontSize={headerFont}
            sx={{
              fontSize: headerFont,
            }}
          >
            Dermal Filler in North London (I come to you!)
          </Text>
          <Text
            fontSize={headerFont}
            sx={{
              fontSize: "12px",
              mb: "10px",
            }}
          >
            *The following postcodes only: N10, N8, N6, N22, N12, N11, N19. You
            must be 18+ years of age and have photographic proof of age.
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
            Friday 8.30am - 5pm<br></br>Saturday (one per month) 8.30am - 4pm
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
              <HoursText sx={{ color: "yellow", fontWeight: 700 }}>
                Book Your Dermal filler visit here
              </HoursText>
            </Flex>
          </ExternalLink>
        </Flex>
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
            <HoursText sx={{ color: "yellow" }}>
              Visit smilecare's website for booking
            </HoursText>
          </Flex>
        </ExternalLink>
      </Flex>
      <Image width="100%" height="auto" ml="20px" src={openingImage} />
    </Flex>
    <Flex sx={{ flexDirection: "row", mt: "10px" }}>
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
      <Text sx={{ fontSize: bodyFont, mt: "20px" }}>
        Emily graduated from UCLH in Dental Hygiene (dipDent, GDC:244931) and
        went on to complete CPD accredited courses in Basic & Advanced Dermal
        Fillers, Non-surgical Rhinoplasty, Lip Augmentation Masterclass and
        Basic & Advanced Botox.
      </Text>
    </Flex>
  </Modern>
);

export default About;
