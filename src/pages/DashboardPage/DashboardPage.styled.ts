import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const DashboardHome = styled.div`
  // background-color: ${(props) => props.theme.colors.orange};
  width: 100%;
`;

export const Navbar = styled.div`
  display: flex;
  background-color: #1d2227;
  color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;
