import styled from "styled-components";

export const TopmenuContainer = styled.div`
  position: sticky;
  top: 0;
`;

export const TopMenu = styled.div`
  background: linear-gradient(to right, #f8912c, #f14321);
  color: white;
  border-bottom: 1px solid #e84c28;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  min-height: 64px;
`;
export const Navigation = styled.div`
  background: #fdd99f;
  border-bottom: 1px solid #d4d4d4;
  max-width: 100%;
  padding: 0.81rem 1.2rem 0;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden !important;
  padding-right: 1.8rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  padding-right: 1.8rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #555;
  text-decoration: none;
  padding: 0.5rem 1.8rem;
  display: inline-block;
  text-decoration: none;
  //   color: ${({ active }) => (active ? "red" : "black")};
  //   border-bottom: ${({ active }) => (active ? "2px solid black" : "")};

  //   &:hover {
  //     color: black;
  //     border-bottom: ${({ active }) => (active ? "2px solid black" : "")};
  //   }
`;
