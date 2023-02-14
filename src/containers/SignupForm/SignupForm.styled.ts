import styled from "styled-components";

export const Wrapper = styled.div`
  width: 29em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 26px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.7em;
`;

export const LinkText = styled.h1`
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  justify-content: space-between;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.lightBlue};
`;
export const Text = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  width: 450px;
  font-weight: 500;
  padding-top: 2em;
  padding-left: 1em;
`;
