import { Avatar } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { ArrowNarrowDown, ArrowNarrowRight } from "tabler-icons-react";
import { Profile } from "./DropDown.styled";
import {
  Dropdown,
  DropdownMenu,
  DropdownGroup,
  DropdownItem,
  SignOut,
} from "./DropDown.styled";
import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function DropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const Icon = () => {
    return (
      <ArrowNarrowRight
        size={15}
        strokeWidth={2}
        color={"black"}
        style={{
          paddingRight: "5%",
        }}
      />
    );
  };
  const isBackground = true;
  return (
    <Dropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <Profile>
        <Avatar src="avatar.png" alt="it's me" radius="xl" />
        <Text
          style={{
            fontSize: "15px",
            paddingTop: "10px",
          }}
        >
          Profile
        </Text>
        <ArrowNarrowDown
          size={20}
          style={{
            paddingTop: "10px",
            paddingLeft: "30%",
          }}
        />
      </Profile>

      {isDropdownOpen && (
        <DropdownMenu
          style={{
            backgroundColor: isBackground ? "white" : "#1d2227",
          }}
          ref={dropdownRef}
        >
          <DropdownGroup>
            <ul>
              <DropdownItem
                onClick={() => {
                  console.log("click");
                  navigate("/organization");
                }}
              >
                <Icon />
                Organization Overview
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/members")}>
                <Icon />
                Manage Organization
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/billing")}>
                <Icon />
                Billing & Invoices
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/plans")}>
                <Icon />
                Upgrade Plan
              </DropdownItem>
            </ul>
          </DropdownGroup>
          <DropdownGroup>
            <ul>
              <DropdownItem onClick={() => navigate("/my-account/")}>
                <Icon />
                MyAccount
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/api-credentials")}>
                <Icon />
                My API Credentials
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/my-memberships")}>
                <Icon />
                My Memberships
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/flags-report")}>
                <Icon />
                My Flags Report
              </DropdownItem>
            </ul>
          </DropdownGroup>
          <SignOut>
            {isDropdownOpen && (
              <ul>
                <DropdownItem>
                  <Icon />
                  Sign out
                </DropdownItem>
              </ul>
            )}
          </SignOut>
        </DropdownMenu>
      )}
    </Dropdown>
  );
}
