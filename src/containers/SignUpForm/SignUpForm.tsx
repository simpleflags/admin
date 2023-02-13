import { PasswordInput, TextInput, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import {
  FormWrapper,
  InputsWrapper,
  LinkText,
  Title,
  Wrapper,
  Text,
} from "../SignUpForm/SignUpForm.styled";

export function SignUpForm() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <FormWrapper>
        <InputsWrapper>
          <TextInput
            placeholder="john@doe.com"
            label="Email"
            radius="md"
            my="sm"
          />
          <PasswordInput placeholder="********" label="Password" radius="md" />
        </InputsWrapper>
        <Button
          fullWidth
          radius="md"
          styles={(theme) => ({
            root: {
              marginTop: 20,
            },
          })}
        >
          Sign Up
        </Button>
        <Text>
          <p>
            By signing up, you agree to our
            <a href="#"> Privacy Policy</a> and our{" "}
            <a href="#"> Terms of Use</a>
          </p>
        </Text>
      </FormWrapper>
      <span
        style={{
          marginLeft: "6px",
          paddingTop: "20px",
        }}
      >
        Already have an account?
        <LinkText onClick={() => navigate("/login")}> Sign In </LinkText>
      </span>
    </Wrapper>
  );
}
