import React from "react";
import { Flex, Image, Link, Spinner } from "theme-ui";
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
  width: 100vw;
  top: 0;
`;

function Modern({ sx, loading, setLoading, children }) {
  return (
    <Flex
      sx={{
        mt: "-10px",
        flexDirection: "column",
        width: "100%",
        height: loading === true ? "100vh" : "none",
        alignItems: ["center"],
        bg: "#FFE6EA",
        ...sx,
      }}
    >
      <TopNav
        sx={{
          height: ["25vh", "25vh", "25vh", "40vh"],
          justifyContent: ["center", "space-between", "space-between"],
          display: loading === true ? "none" : "block",
          backgroundImage:
            loading === true
              ? "none"
              : "linear-gradient(to right, #bb3385, #e79fc4)",
          boxShadow: loading === true ? "none" : "0 0 5px black",
        }}
      >
        <Link
          href="mailto:emilyvioletaesthetics@gmail.com"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: ["none", "block", "block"],
          }}
        >
          <Image
            width="50px"
            height="50px"
            src={email}
            sx={{ display: loading === true ? "none" : "block" }}
          />
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
            sx={{
              position: "absolute",
              display: loading === true ? "none" : "block",
            }}
            src={logo}
          />
          <Image
            sx={{ width: ["280px", "500px"] }}
            src={flowers}
            onLoad={() => loading === true && setLoading(false)}
          />
        </Flex>
        <Link
          href="https://www.instagram.com/emilyvioletaesthetics/"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: ["none", "block", "block"],
          }}
        >
          <Image
            width="30px"
            height="30px"
            src={insta}
            sx={{ display: loading === true ? "none" : "block" }}
          />
        </Link>
      </TopNav>
      {loading && <Spinner sx={{ mt: "20px" }} />}
      <DynamicFlex
        loading={loading}
        sx={{
          maxWidth: "1160px",
          mt: "20px",
          px: "10px",
          display: loading === true ? "none" : "block",
        }}
      >
        {children}
      </DynamicFlex>
    </Flex>
  );
}
export default Modern;
