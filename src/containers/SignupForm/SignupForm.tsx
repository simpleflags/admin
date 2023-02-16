import { PasswordInput, TextInput, Button, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Anchor } from "@mantine/core";
import {
  FormWrapper,
  InputsWrapper,
  LinkText,
  Title,
  Wrapper,
  Text,
} from "./SignupForm.styled";

export function SignupForm() {
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
          By signing up, you agree to our
          <Anchor href="#" size="xs">
            Privacy Policy
          </Anchor>
          and our
          <Anchor href="#" size="xs">
            Terms of Use
          </Anchor>
        </Text>
      </FormWrapper>
      <Container>
        Already have an account?
        <LinkText onClick={() => navigate("/login")}> Sign In </LinkText>
      </Container>
    </Wrapper>
  );
}
