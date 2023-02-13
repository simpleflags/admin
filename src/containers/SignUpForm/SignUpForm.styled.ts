import styled from "styled-components";

export const Wrapper = styled.div`
  width: 450px;
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
  margin-bottom: 10px;
`;

export const LinkText = styled.h1`
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  justify-content: space-between;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.lightBlue};
`;
export const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 450px;
  font-weight: 500;
  margin-left: 7px;
`;
