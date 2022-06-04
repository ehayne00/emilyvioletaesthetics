import React, { useState } from "react";
import { Flex, Image } from "theme-ui";
import SideNav from "../features/ui/components/SideNav";
import styled from "styled-components";
import logo from "../assets/e-v-logo.png";
import insta from "../assets/instagram.svg";
import { MenuIcon } from "@heroicons/react/outline";

const DynamicFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding-bottom: 30px;
  margin-top: 180px; // poss change this value later
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const TopNav = styled(Flex)`
  flex-direction: row;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 2px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px black;
  position: fixed;
  width: 100%;
  top: 0;
  background-image: linear-gradient(to right, #bb3385, #e79fc4);
`;

const ExternalLink = ({ to = "/", children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

function Base({ sx, children }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
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
      <TopNav>
        <MenuIcon
          width={45}
          style={{ cursor: "pointer" }}
          onClick={() => setSideNavOpen(true)}
        />
        <Image width="200px" height="200px" src={logo} />
        <ExternalLink to="https://www.instagram.com/emilyvioletaesthetics/">
          <Image width="40px" height="40px" src={insta} />
        </ExternalLink>
      </TopNav>
      {sideNavOpen && <SideNav setSideNavOpen={setSideNavOpen} />}
      <DynamicFlex>{children}</DynamicFlex>
    </Flex>
  );
}
export default Base;
