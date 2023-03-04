import styled from "styled-components";

export const Nav = styled.div`
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
`;

export const Profile = styled.div`
  border-bottom: 0.5px solid #999;
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.small};
`;
export const Search = styled.div`
  border-bottom: 0.5px solid #999;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  ${(props) => props.theme.spacing.small};
`;

export const Products = styled.div`
  border-bottom: 0.5px solid #999;
  padding: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.font.sizeNormal};

  color: ${(props) => props.theme.colors.orange};
`;
