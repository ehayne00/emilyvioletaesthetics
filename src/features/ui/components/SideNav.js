import React from "react";
import { Flex, Text } from "theme-ui";
import styled from "styled-components";
import { NavLink, useRouteMatch } from "react-router-dom";
import {
  ViewGridIcon,
  XIcon,
  QuestionMarkCircleIcon,
  BadgeCheckIcon,
  CalendarIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";
// import { connect } from "react-redux";
// import { signOut } from "../../account/store/account.actions";

const Close = styled(XIcon)`
  cursor: pointer;
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  width: 210px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-right: 3px solid #e5e5e5;
  background-color: #f8f2f3;
`;

const SideNav = ({ setSideNavOpen }) => {
  const { path } = useRouteMatch();
  const chosenTabColor = "#bb3385";
  const tabColor = "#595959";
  const subListColor = "#909090";
  const iconSize = 20;
  const pages = [
    {
      label: "About",
      icon: (
        <QuestionMarkCircleIcon
          style={{
            color: path === "/" ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/",
      subLinks: [
        { label: "About" },
        { label: "Emily's Goal" },
        { label: "What If's" },
        { label: "Who Is Emily?" },
      ],
    },
    {
      label: "Treatments",
      icon: (
        <ViewGridIcon
          style={{
            color: path.includes("/treatments") ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/treatments",
      subLinks: [
        { label: "Liquid Rhinoplasty" },
        { label: "Lip Augmentation" },
        { label: "Nasolabial Folds" },
        { label: "Marionette Lines" },
        { label: "Cheek Re-shaping" },
        { label: "Chin Re-shaping" },
        { label: "Jawline Re-shaping" },
      ],
    },
    {
      label: "Booking",
      icon: (
        <CalendarIcon
          style={{
            color: path.includes("/booking") ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/booking",
    },
    {
      label: "Contact",
      icon: (
        <AtSymbolIcon
          style={{
            color: path.includes("/contact") ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/contact",
    },
    {
      label: "Pricing",
      icon: (
        <BadgeCheckIcon
          style={{
            color: path.includes("/pricing") ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/pricing",
    },
  ];
  return (
    <StyledFlex>
      <Flex sx={{ justifyContent: "flex-end", mr: 10 }}>
        <Close width={25} onClick={() => setSideNavOpen(false)} />
      </Flex>
      <Text
        sx={{
          fontSize: "17px",
          my: 3,
          px: 1,
          fontFamily: "heading",
          maxWidth: "max-content",
          backgroundColor: "rgba(255,189,89,0.9)",
          color: "#570220",
          borderRadius: 4,
        }}
      >
        Emily Violet Aesthetics
      </Text>
      {pages.map((page) => (
        <>
          <NavLink
            to={page.link}
            style={{
              textDecoration: "none",
              marginBottom: page?.subLinks ? 2 : 5,
              marginTop: 10,
            }}
            onClick={() => setSideNavOpen(false)}
          >
            <Flex
              sx={{
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {page.icon}
              <Text
                sx={{
                  ml: 2,
                  color:
                    (page.label === "About" && path === page.link) ||
                    (page.label !== "About" && path.includes(page.link))
                      ? chosenTabColor
                      : tabColor,
                  fontSize: 2,
                  fontWeight: 600,
                }}
              >
                {page.label}
              </Text>
            </Flex>
          </NavLink>
          {page?.subLinks &&
            page.subLinks.map((sub) => (
              <Flex
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  sx={{
                    ml: 4,
                    color: subListColor,
                    fontSize: "13px",
                  }}
                >
                  • {sub.label}
                </Text>
              </Flex>
            ))}
        </>
      ))}
    </StyledFlex>
  );
};

export default SideNav;
