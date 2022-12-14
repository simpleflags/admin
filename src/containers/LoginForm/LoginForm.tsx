import { Button, PasswordInput, TextInput } from "@mantine/core";
import { BrandGithub, BrandGitlab, BrandGoogle } from "tabler-icons-react";
import {
  FormWrapper,
  HelperText,
  InputsWrapper,
  LinkText,
  LoginDivider,
  Title,
  Wrapper,
} from "./LoginForm.styled";
const baseApiUrl = import.meta.env.VITE_BASE_URL?.toString();

export function LoginForm() {
  return (
    <Wrapper>
      <Title>Sign in</Title>

      <FormWrapper>
        <Button
          onClick={() =>
            (window.location.href = `${baseApiUrl}api/login/github`)
          }
          fullWidth
          leftIcon={<BrandGithub />}
          sx={(theme) => ({
            backgroundColor:
              theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
            color: "#fff",
            "&:hover": {
              backgroundColor:
                theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
            },
          })}
          radius="md"
          size="md"
          my="sm"
        >
          Sign in with Github
        </Button>
        <Button
          // WIP flow for gitlab
          // onClick={() =>
          //   (window.location.href = `${baseApiUrl}api/login/gitlab`)
          // }
          fullWidth
          leftIcon={<BrandGitlab />}
          sx={(theme) => ({
            backgroundColor:
              theme.colors.orange[theme.colorScheme === "dark" ? 9 : 6],
            color: "#fff",
            "&:hover": {
              backgroundColor:
                theme.colors.orange[theme.colorScheme === "dark" ? 9 : 6],
            },
          })}
          radius="md"
          size="md"
        >
          Sign in with Gitlab
        </Button>
        <Button
          fullWidth
          variant="default"
          color="gray"
          leftIcon={<BrandGoogle />}
          radius="md"
          size="md"
          my="sm"
        >
          Sign in with Google
        </Button>

        <LoginDivider label="or continue with" labelPosition="center" />

        <InputsWrapper>
          <TextInput
            placeholder="john@doe.com"
            label="Email"
            radius="md"
            my="sm"
          />
          <PasswordInput placeholder="*******" label="Password" radius="md" />
          <HelperText>
            <LinkText>Forgot password?</LinkText>
          </HelperText>
        </InputsWrapper>

        <Button fullWidth radius="md">
          Sign in
        </Button>
      </FormWrapper>
    </Wrapper>
  );
}
