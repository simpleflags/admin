import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import { Wrapper, Text, PageOuter } from "./UsagePage.styled";

export function UsagePage() {
  return (
    <Wrapper>
      <PageOuter>
        <Text>
          Track the number of config.json downloads all the applications in the
          Hamzabisevac42 Organization are making to the ConfigCat CDN. Your Free
          plan includes 5 million guaranteed config.json downloads per month.
          Seems like your feature flags in this organization were never
          downloaded. Here is a guide on how to connect your applications to
          ConfigCat.
        </Text>
      </PageOuter>
    </Wrapper>
  );
}
