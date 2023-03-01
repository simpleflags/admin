import { Avatar } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { ArrowNarrowDown, ArrowNarrowRight } from "tabler-icons-react";
import { Profile } from "./DropDown.styled";
import {
  Dropdown,
  DropdownMenu,
  DropdownAcc,
  DropdownOrg,
  DropdownItem,
  SignOut,
} from "./DropDown.styled";
import { Text } from "@mantine/core";

export function DropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

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

      <DropdownMenu
        style={{
          backgroundColor: isBackground ? "white" : "#1d2227",
        }}
      >
        <DropdownOrg onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {isDropdownOpen && (
            <ul ref={dropdownRef}>
              <DropdownItem>
                <Icon />
                Organization Overview
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Manage Organization
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Billing & Invoices
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Upgrade Plan
              </DropdownItem>
            </ul>
          )}
        </DropdownOrg>
        <DropdownAcc>
          {isDropdownOpen && (
            <ul>
              <DropdownItem>
                <Icon />
                Organization Overview
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Manage Organization
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Billing & Invoices
              </DropdownItem>
              <DropdownItem>
                <Icon />
                Upgrade Plan
              </DropdownItem>
            </ul>
          )}
        </DropdownAcc>
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
    </Dropdown>
  );
}
