import { PageWrapper } from "./SignUp.styled";
import { ImageSection, FormSection } from "./SignUp.styled";
import { Image } from "@mantine/core";
import ff_login from "../../assets/images/ff-login.png";
import { SignUpForm } from "../../containers/SignUpForm/SignUpForm";

export function SignUp() {
  return (
    <PageWrapper>
      <ImageSection>
        <Image src={ff_login} width={450} height={450} alt="flag" />
      </ImageSection>

      <FormSection>
        <SignUpForm />
      </FormSection>
    </PageWrapper>
  );
}
