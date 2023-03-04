import styled from "styled-components";

export const Dropdown = styled.div`
  padding-right: ${(props) => props.theme.spacing.small};
  color: ${(props) => props.theme.colors.black};
`;
export const Profile = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  text-align: center;
  border-bottom: 0.5px solid #999;
  padding: ${(props) => props.theme.spacing.small};

  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  width: 100%;
`;
export const DropdownMenu = styled.div`
  position: absolute;
  color: ${(props) => props.theme.colors.black};
  border-radius: 5.5px;
  z-index: 1000;
  & ul {
    list-style-type: none;
    padding: ${(props) => props.theme.spacing.none}
      ${(props) => props.theme.spacing.small};
    width: 280px;
  }
  & li {
    display: flex;
    cursor: pointer;
    margin-bottom: ${(props) => props.theme.spacing.small};
    text-decoration: none;
    font-size: ${(props) => props.theme.font.sizeNormal};
    padding: ${(props) => props.theme.spacing.small}
      ${(props) => props.theme.spacing.xsmall};
  }
`;
export const DropdownGroup = styled.div`
  display: block;

  & ul {
    list-style-type: none;
    border-bottom: 0.5px solid #0000001f;
    padding-right: ${(props) => props.theme.spacing.small};
  }
`;

export const SignOut = styled.div`
  display: block;
  & ul {
    list-style-type: none;
    padding-left: ${(props) => props.theme.spacing.small};
    padding-right: ${(props) => props.theme.spacing.small};
  }
`;
export const DropdownItem = styled.div`
  padding: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.small};
  &:hover {
    background-color: ${(props) => props.theme.colors.gainsBoro};
    border-radius: 1px solid ${(props) => props.theme.colors.gainsBoro};
  }
`;
