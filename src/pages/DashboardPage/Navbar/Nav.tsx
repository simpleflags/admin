import { Nav } from "./Nav.styled";
import { Select, Text } from "@mantine/core";
import { Search, Products } from "./Nav.styled";
import { DropDown } from "../../../components/DropDown/DropDown";

export function NavBarSection() {
  return (
    <Nav>
      <DropDown />

      <Search>
        <Select
          placeholder="Filter products or configs"
          searchable
          nothingFound="No options"
          data={[]}
        />
      </Search>
      <Products>Main Config</Products>
    </Nav>
  );
}
