import { Routes } from "react-router-dom";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import { NavBarSection } from "../DashboardPage/Navbar/Nav";
import { Wrapper } from "./OrganizationPage.styled";

export function OrganizationPage(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Wrapper>
      <TopNavigation />
      <Routes>{children}</Routes>
    </Wrapper>
  );
}
