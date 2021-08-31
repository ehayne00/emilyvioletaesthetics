import React from "react";
import { Flex, Text } from "theme-ui";
import styled from "styled-components";
import { NavLink, useRouteMatch } from "react-router-dom";
import {
  ViewGridIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CollectionIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  CogIcon,
  LoginIcon,
  XIcon,
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
  background-color: white;
`;

// const LogOut = styled(Flex)`
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   :hover {
//     cursor: pointer;
//   }
// `;

// const mapDispatch = (dispatch) => ({
//   onSignOut: () => dispatch(signOut()),
// });

const SideNav = ({ setSideNavOpen }) => {
  const { path } = useRouteMatch();
  const chosenTabColor = "#CC6A70";
  const tabColor = "#909090";
  const iconSize = 20;
  const pages = [
    // {
    //   label: "Dashboard",
    //   icon: (
    //     <ViewGridIcon
    //       style={{
    //         color: path.includes("/admin/dashboard")
    //           ? chosenTabColor
    //           : tabColor,
    //         width: iconSize,
    //       }}
    //     />
    //   ),
    //   link: "/admin/dashboard",
    // },
    {
      label: "About",
      icon: (
        <BriefcaseIcon
          style={{
            color: path === "/" ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/",
    },
    {
      label: "Treatments",
      icon: (
        <UserGroupIcon
          style={{
            color: path.includes("/treatments") ? chosenTabColor : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/treatments",
    },
    {
      label: "Booking",
      icon: (
        <CollectionIcon
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
        <ShieldExclamationIcon
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
        <ShieldCheckIcon
          style={{
            color:
              path.includes("/pricing")
                ? chosenTabColor
                : tabColor,
            width: iconSize,
          }}
        />
      ),
      link: "/pricing",
    },
    // {
    //   label: "Settings",
    //   icon: (
    //     <CogIcon
    //       style={{
    //         color: path.includes("/admin/settings") ? chosenTabColor : tabColor,
    //         width: iconSize,
    //       }}
    //     />
    //   ),
    //   link: "/admin/settings",
    // },
  ];
  return (
    <StyledFlex>
      <Flex sx={{ justifyContent: "flex-end", mr: 10 }}>
        <Close width={25} onClick={() => setSideNavOpen(false)} />
      </Flex>
      <Text sx={{ fontSize: "16px", my: 4, fontFamily: "heading" }}>
        Emily Violet Aesthetics
      </Text>
      {pages.map((page) => (
        <NavLink
          to={page.link}
          style={{ textDecoration: "none", marginBottom: 20 }}
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
                  path === page.link || path.includes(page.link)
                    ? chosenTabColor
                    : tabColor,
                fontSize: 2,
              }}
            >
              {page.label}
            </Text>
          </Flex>
        </NavLink>
      ))}
    </StyledFlex>
  );
};

export default SideNav;
