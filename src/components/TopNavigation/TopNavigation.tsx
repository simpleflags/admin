import { useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import {
  TopmenuContainer,
  TopMenu,
  Navigation,
  NavbarContent,
  Items,
} from "./TopNavigation.styled";

export function TopNavigation() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <TopmenuContainer>
      <TopMenu>Ime: Hamza</TopMenu>
      <Navigation>
        <NavbarContent>
          <Items onClick={() => navigate("/organization")}>
            Organization Overview
          </Items>
          <Items onClick={() => navigate("/organization/members")}>
            Members & Roles
          </Items>
          <Items onClick={() => navigate("/organization/authentication")}>
            Authentication
          </Items>
          <Items onClick={() => navigate("/organization/data-governance")}>
            Data Governance - GDPR
          </Items>
          <Items onClick={() => navigate("/organization/usage")}>
            Usage & Quota
          </Items>
        </NavbarContent>
      </Navigation>
    </TopmenuContainer>
  );
}
