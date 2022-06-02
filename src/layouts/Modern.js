import React, { useState } from "react";
import { Flex, Image } from "theme-ui";
import SideNav from "../features/ui/components/SideNav";
import styled from "styled-components";
import logo from "../assets/e-v-logo.png";
import flowers from "../assets/flowerbacking.png";
import circle from "../assets/leavescircle.png";
import sides from "../assets/leavessides.png";
import around from "../assets/leavesaround.png";
import insta from "../assets/instagram.svg";
import { MenuIcon } from "@heroicons/react/outline";

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
  justify-content: center;
  /* border-bottom: 1px solid black; */
  align-items: center;
  box-shadow: 0 0 5px black;
  position: fixed;
  width: 100%;
  top: 0;
  background-image: linear-gradient(to right, #bb3385, #e79fc4);
`;

// const ExternalLink = ({ to = "/", children }) => (
//   <a href={to} target="_blank" rel="noopener noreferrer">
//     {children}
//   </a>
// );

function Modern({ sx, children }) {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundSize: ["contain", "contain"],
        justifyContent: "center",
        alignItems: ["center"],
        bg: "#FFE6EA",
        ...sx,
      }}
    >
      <TopNav sx={{ height: ["25vh", "40vh"] }}>
        <Image
          width="200px"
          height="200px"
          sx={{ position: "absolute" }}
          src={logo}
        />
        <Image sx={{ width: ["280px", "500px"] }} src={flowers} />
        {/* <ExternalLink to="https://www.instagram.com/emilyvioletaesthetics/">
          <Image width="40px" height="40px" src={insta} />
        </ExternalLink> */}
      </TopNav>
      <DynamicFlex sx={{ mt: ["25vh", "41vh"], px: "10px" }}>{children}</DynamicFlex>
    </Flex>
  );
}
export default Modern;
