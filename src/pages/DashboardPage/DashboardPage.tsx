import { PageWrapper, Navbar, DashboardHome } from "./DashboardPage.styled";
import { Dashboard } from "../../containers/Dashboard/Dashboard";
import { Nav } from "./Navbar/Nav.styled";
import { NavbarSection } from "./Navbar/Nav";
export function DashboardPage() {
  return (
    <PageWrapper>
      <Navbar>
        <NavbarSection />
      </Navbar>
      <DashboardHome>
        <Dashboard />
      </DashboardHome>
    </PageWrapper>
  );
}
