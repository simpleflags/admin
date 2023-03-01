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
  font-size: 1.7em;
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
