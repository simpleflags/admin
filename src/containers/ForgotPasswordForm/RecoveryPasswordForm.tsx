import { TextInput } from "@mantine/core";
import {
  Wrapper,
  Title,
  FormWrapper,
  InputsWrapper,
} from "./RecoveryPasswordForm.styled";
import { Button } from "@mantine/core";

export function RecoveryPasswordForm() {
  return (
    <Wrapper>
      <Title>Forgot Password</Title>
      <FormWrapper>
        <InputsWrapper>
          <TextInput
            placeholder="john@doe.com"
            label="Email"
            radius="md"
            my="sm"
          />
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
          Resset Password
        </Button>
      </FormWrapper>
    </Wrapper>
  );
}
