import { PageWrapper } from "./SignupPage.styled";
import { ImageSection, FormSection } from "./SignupPage.styled";
import { Image } from "@mantine/core";
import ff_login from "../../assets/images/ff-login.png";
import { SignupForm } from "../../containers/SignupForm/SignupForm";

export function SignupPage() {
  return (
    <PageWrapper>
      <ImageSection>
        <Image src={ff_login} width={450} height={450} alt="flag" />
      </ImageSection>

      <FormSection>
        <SignupForm />
      </FormSection>
    </PageWrapper>
  );
}
