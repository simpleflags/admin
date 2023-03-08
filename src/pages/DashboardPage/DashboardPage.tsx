import { PageWrapper, Navbar, DashboardHome } from "./DashboardPage.styled";
import { NavBarSection } from "./Navbar/Nav";
import { Routes } from "react-router-dom";
import { Dashboard } from "../../containers/Dashboard/DashboardRightSide";
export function DashboardPage(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <PageWrapper>
      <Navbar>
        <NavBarSection />
      </Navbar>
      <DashboardHome>
        <Routes>{children}</Routes>

        {/* <Dashboard /> */}
      </DashboardHome>
    </PageWrapper>
  );
}
