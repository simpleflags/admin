import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LogoTitle = styled.h1`
  margin-left: 10px;
  font-weight: 700;
  font-size: ${(props) => props.theme.font.sizeLarge};
`;

export const ImageSection = styled.section`
  width: 50%;
  background: #bddcf7;
  padding: ${(props) => props.theme.spacing.xxlarge};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
