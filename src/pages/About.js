import React, { useState } from "react";
import Modern from "../layouts/Modern";
import { Image, Flex, Link } from "theme-ui";
import AccordionList from "../features/ui/components/AccordionList";
// import SmilecareMention from "../features/sections/SmilecareMention";
import openingImage from "../assets/opening-photo.png";
import emilyPhoto from "../assets/emily-photo.JPG";
import cpdPhoto from "../assets/cpd-pic.png";
import ucl from "../assets/ucl.png";
import styled from "styled-components";
import Text from "../features/ui/components/Text";
import HoursText from "../features/ui/components/HoursText";
import insta from "../assets/instagram.svg";
import email from "../assets/email.png";
// import Filler from "./Filler";

const headerFont = "24px";
const bodyFont = "18px";

const EmilyPhoto = styled(Image)`
  width: 210px;
  height: auto;
  border-radius: 150px;
  object-fit: contain;
`;

const OpeningPhoto = styled(Image)`
  height: auto;
  object-fit: contain;
`;

const CPDPhoto = styled(Image)`
  width: 130px;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
`;

const UCLImage = styled(Image)`
  width: 230px;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
`;

const About = () => {
  const [loading, setLoading] = useState(true);
  const currentURL = window.location.href;
  if (currentURL.includes("netlify")) {
    window.location.replace("https://www.emilyvioletaesthetics.co.uk");
  }
  return (
    <Modern loading={loading} setLoading={setLoading}>
      <Flex
        sx={{
          flexDirection: ["column-reverse", "row"],
          alignItems: "flex-start",
          mx: ["0", "0", "0", "10px"],
          display: loading === true ? "none" : "block",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            width: "100%",
            display: loading === true ? "none" : "block",
          }}
        >
          <Text
            fontSize={headerFont}
            sx={{
              fontSize: headerFont,
              width: "90%",
              mt: ["10px", "0px"],
              // mb: ["0px", "0px", "0px", "20px"],
              mb: "10px", // change back
              display: loading === true ? "none" : "block",
            }}
          >
            Emily Violet Aesthetics at AVALON, 87 Weston Park, Crouch End, N8
            9PR
          </Text>
          <Flex
            sx={{
              flexDirection: "column",
              backgroundImage:
                loading === true
                  ? "rgba(222,222,222,0)"
                  : "linear-gradient(to right, #FFF7F8, #FFE6EA)",
              mb: ["15px", "10px", "10px", "15px"],
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
              Tuesday 9am - 5pm
              {/* <br></br>Friday 10am - 5.45pm */}
              {/* <br></br>Saturday (one per month) 9am - 2pm */}
            </HoursText>
          </Flex>
          <AccordionList loading={loading} />
          <Link
            href="https://emilyvioletaesthetics.simplybook.it/v2/#book"
            target="_blank"
            rel="noreferrer"
            sx={{
              textDecoration: "none",
              display: loading === true ? "none" : "block",
              maxWidth: "max-content",
            }}
          >
            <Flex
              sx={{
                flexDirection: "row",
                borderRadius: "4px",
                py: "5px",
                px: "10px",
                maxWidth: "max-content",
                bg: "#bb3385",
                mb: "20px",
                cursor: "pointer",
                display: loading === true ? "none" : "block",
                boxShadow: "0 0 5px black",
              }}
            >
              <Text
                sx={{
                  color: "#fcbc5c",
                  fontWeight: 700,
                  display: loading === true ? "none" : "block",
                }}
              >
                BOOK YOUR TREATMENT VIA SIMPLYBOOK.IT
              </Text>
            </Flex>
          </Link>
          {/* <SmilecareMention loading={loading} /> */}
        </Flex>
        <OpeningPhoto
          sx={{
            width: ["100%", "600px", "75%"],
            display: loading === true ? "none" : "block",
          }}
          src={openingImage}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          my: "10px",
          bg: loading === true ? "none" : "#e79fc4",
          pb: "25px",
          pt: "10px",
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
            Who is Emily?
          </Text>
          <EmilyPhoto
            src={emilyPhoto}
            sx={{ display: loading === true ? "none" : "block" }}
          />
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            display: loading === true ? "none" : "block",
          }}
        >
          <Text
            sx={{
              fontSize: bodyFont,
              mt: "20px",
              width: "95%",
              display: loading === true ? "none" : "block",
            }}
          >
            Emily graduated from UCLH in Dental Hygiene (dipDent, GDC:244931)
            and went on to complete CPD accredited courses in Basic & Advanced
            Dermal Fillers, Non-surgical Rhinoplasty, Lip Augmentation
            Masterclass, Basic & Advanced Botox, Aqualyx Fat Dissolving
            Injections, Skin Boosters, Lash Lift & Tinting, Microneedling,
            Dermaplaning, Chemical Peels and Facials. Emily works alongside an
            accredited medical prescriber for the use of any prescription-only
            medicines.
          </Text>
          <Flex
            sx={{
              flexDirection: ["column", "row"],
              width: "100%",
              justifyContent: "space-around",
              alignItems: ["center", "flex-start"],
              display: loading === true ? "none" : "block",
            }}
          >
            <CPDPhoto
              src={cpdPhoto}
              sx={{ display: loading === true ? "none" : "block" }}
            />
            <UCLImage
              src={ucl}
              sx={{ display: loading === true ? "none" : "block" }}
            />
          </Flex>
        </Flex>
      </Flex>
      {/* <Filler loading={loading} headerFont={headerFont} bodyFont={bodyFont} /> */}
      <Flex
        sx={{
          maxWidth: "100%",
          flexDirection: ["column", "row"],
          justifyContent: "space-evenly",
          mt: "10px",
          // bg: loading === true ? "none" : "#e79fc4",
          // p: "12px",
          display: loading === true ? "none" : "block",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            width: "100%",
            bg: loading === true ? "rgba(222,222,222,0)" : "#FFF7F8",
            p: "10px",
            mb: ["12px", "0px", "0px"],
          }}
        >
          <Text
            sx={{
              width: ["100%", "98%", "98%"],
              maxWidth: "100%",
              mb: "10px",
              fontWeight: 600,
              fontSize: headerFont,
              display: loading === true ? "none" : "block",
            }}
          >
            Pre-visit (for injectable treatments)
          </Text>
          <Text
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "16px",
              display: loading === true ? "none" : "block",
            }}
          >
            • Avoid over-the-counter blood-thinning medications and supplements
            for one week prior to your appointment, such as aspirin, Motrin,
            ibuprofen, and Aleve. Also avoid herbal supplements such as garlic,
            vitamin E, ginko biloba, St. John's Wort and omega-3 capsules. If
            you have a cardiovascular history, please check with your doctor
            prior to stopping use of aspirin. <br></br>• Avoid treatment if you
            have an active coldsore (herpes simplex virus type 1). If you are
            prone to coldsore's, you may need to consult a pharmacy for
            anti-coldsore medication that will help prevent an outbreak during/
            post-treatment.
            <br></br>• Do not drink alcoholic beverages 24 hours before or after
            your treatment to avoid extra bruising. <br></br>• Do not book a
            treatment if you are pregnant or breastfeeding or are allergic to
            any of it's ingredients.<br></br>• You must be 18+ years of age and
            have photographic proof of age.<br></br>• If you are interested in
            booking anti-wrinkle injections or to have your existing filler
            dissolved, please book 3 days or more in advance so that we have
            time to review your information and order the product in.<br></br>•
            Avoid wearing makeup in the area to be treated on the day.<br></br>•
            Just be aware that it is usually advised to avoid exercise, steam
            rooms, saunas, sunbathing for 1-11 days after any injectable
            treatments. The duration advised will be dependent on which specific
            treatment you attend for.<br></br>• Emily will always review your
            medical form details, discuss the treatment and options with you,
            answer any questions, ensure you are happily informed and consenting
            as well as a fitting candidate before any treatment takes place.
          </Text>
        </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          my: "10px",
          bg: loading === true ? "none" : "#e79fc4",
          pb: "10px",
          pt: "10px",
          display: loading === true ? "none" : "block",
        }}
      >
        <Text
          sx={{
            mx: "10px",
            width: "98%",
            display: loading === true ? "none" : "block",
          }}
        >
          <b>Parking</b>: The local controlled parking zone runs from noon-2pm
          on weekdays. Emilys appointments can only be booked either side of the
          controlled parking zone hours, for your benefit. <br></br>
          <b>Bus route</b>: The W5 bus is a hop-on, hop-off bus route that runs
          through the area.
        </Text>
      </Flex>
      <Flex
        sx={{
          mt: "10px",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          display: loading === true ? "none" : "block",
        }}
      >
        <Link
          href="mailto:emilyvioletaesthetics@gmail.com"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: loading === true ? "none" : ["block", "none", "none"],
          }}
        >
          <Image
            width="55px"
            height="55px"
            src={email}
            sx={{ display: loading === true ? "none" : "block" }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/emilyvioletaesthetics/"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: loading === true ? "none" : ["block", "none", "none"],
          }}
        >
          <Image
            width="30px"
            height="30px"
            src={insta}
            sx={{ display: loading === true ? "none" : "block" }}
          />
        </Link>
      </Flex>
      <Text
        sx={{
          mt: "20px",
          textAlign: "center",
          width: "98%",
          display: loading === true ? "none" : "block",
        }}
      >
        Contact Emily - WhatsApp: +442035760248 - email:
        emilyvioletaesthetics@gmail.com
      </Text>
    </Modern>
  );
};

export default About;
