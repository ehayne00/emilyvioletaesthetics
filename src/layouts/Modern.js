import React from "react";
import { Flex, Image, Link } from "theme-ui";
import styled from "styled-components";
import insta from "../assets/instagram.svg";
import logo from "../assets/e-v-logo.png";
import flowers from "../assets/flowerbacking.png";
import email from "../assets/email.png";

const DynamicFlex = styled(Flex)`
  width: 100%auto;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
const TopNav = styled(Flex)`
  flex-direction: row;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 2px;
  align-items: center;
  box-shadow: 0 0 5px black;
  width: 100vw;
  top: 0;
  background-image: linear-gradient(to right, #bb3385, #e79fc4);
`;

function Modern({ sx, children }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        alignItems: ["center"],
        bg: "#FFE6EA",
        ...sx,
      }}
    >
      <TopNav
        sx={{
          height: ["25vh", "25vh", "25vh", "40vh"],
          justifyContent: ["center", "space-between", "space-between"],
        }}
      >
        <Link
          href="mailto:emilyvioletaesthetics@gmail.com"
          sx={{ display: ["none", "block", "block"] }}
        >
          <Image width="50px" height="50px" src={email} />
        </Link>
        <Flex
          sx={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width="200px"
            height="200px"
            sx={{ position: "absolute" }}
            src={logo}
          />
          <Image sx={{ width: ["280px", "500px"] }} src={flowers} />
        </Flex>
        <Link
          href="https://www.instagram.com/emilyvioletaesthetics/"
          sx={{ display: ["none", "block", "block"] }}
        >
          <Image width="30px" height="30px" src={insta} />
        </Link>
      </TopNav>
      <DynamicFlex sx={{ mt: "20px", px: "10px" }}>{children}</DynamicFlex>
    </Flex>
  );
}
export default Modern;
