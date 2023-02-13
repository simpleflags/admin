import { PageWrapper, ImageSection, FormSection } from "./ForgotPage.styled";
import { Image } from "@mantine/core";
import ff_login from "../../assets/images/ff-login.png";
import { ForgotPassForm } from "../../containers/ForgotPasswordForm/ForgotPassForm";
export function ForgotPage() {
  return (
    <PageWrapper>
      <ImageSection>
        <Image src={ff_login} width={450} height={450} alt="flag" />
      </ImageSection>

      <FormSection>
        <ForgotPassForm />
      </FormSection>
    </PageWrapper>
  );
}
