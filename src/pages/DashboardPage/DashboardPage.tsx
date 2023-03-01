import { PageWrapper, Navbar, DashboardHome } from "./DashboardPage.styled";
import { Dashboard } from "../../containers/Dashboard/Dashboard";
import { Nav } from "./Navbar/Nav.styled";
import { NavBarSection } from "./Navbar/Nav";
export function DashboardPage() {
  return (
    <PageWrapper>
      <Navbar>
        <NavBarSection />
      </Navbar>
      <DashboardHome>
        <Dashboard />
      </DashboardHome>
    </PageWrapper>
  );
}
