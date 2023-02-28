import { Avatar } from "@mantine/core";
import React, { useState } from "react";
import { ArrowNarrowDown, ArrowNarrowRight } from "tabler-icons-react";
import { Profile } from "./DropDown.styled";
import {
  Dropdown,
  DropdownMenu,
  DropdownAcc,
  DropdownOrg,
  SignOut,
} from "./DropDown.styled";
import { Text } from "@mantine/core";

export function DropDown() {
  const [state, setState] = useState(false);

  const showDropdown = () => {
    setState(true);
  };

  const hideDropdown = () => {
    setState(false);
  };
  const isBackground = true;
  return (
    <Dropdown onClick={showDropdown}>
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
        <DropdownOrg>
          {state ? (
            <ul onMouseEnter={showDropdown}>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Organization Overview
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Manage Organization
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Billing & Invoices
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Upgrade Plan
              </li>
            </ul>
          ) : null}
        </DropdownOrg>
        <DropdownAcc>
          {state ? (
            <ul onMouseEnter={showDropdown}>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Organization Overview
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Manage Organization
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Billing & Invoices
              </li>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Upgrade Plan
              </li>
            </ul>
          ) : null}
        </DropdownAcc>
        <SignOut>
          {state ? (
            <ul onMouseEnter={showDropdown}>
              <li>
                <ArrowNarrowRight
                  size={15}
                  strokeWidth={2}
                  color={"black"}
                  style={{
                    paddingRight: "5%",
                  }}
                />
                Sign out
              </li>
            </ul>
          ) : null}
        </SignOut>
      </DropdownMenu>
    </Dropdown>
  );
}
