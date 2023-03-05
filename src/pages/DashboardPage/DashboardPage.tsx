import { PageWrapper, Navbar, DashboardHome } from "./DashboardPage.styled";
import { Dashboard } from "../../containers/Dashboard/Dashboard";
import { Nav } from "./Navbar/Nav.styled";
import { NavBarSection } from "./Navbar/Nav";
import { Route, Routes } from "react-router-dom";
import { OrganizationPage } from "../Organization/OrganizationPage";
import { ManageOrganizationPage } from "../ManageOrganizationPage/ManageOrganizationPage";
import { BillingInvoicePage } from "../BillingInvoicePage/BillingInvoicePage";
import { UpgradePlansPage } from "../UpgradePlansPage/UpgradePlansPage";
import { AccountPage } from "../AccountPage/AccountPage";
import { ApiCredentialsPage } from "../MyApiPage/ApiCredentialsPage";
import { MembershipsPage } from "../MembershipsPage/MembershipsPage";
import { FlagsReportPage } from "../FlagsReportPage/FlagsReprotPage";
export function DashboardPage() {
  return (
    <PageWrapper>
      <Navbar>
        <NavBarSection />
      </Navbar>
      <DashboardHome>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/manage" element={<ManageOrganizationPage />} />
          <Route path="/billing" element={<BillingInvoicePage />} />
          <Route path="/plans" element={<UpgradePlansPage />} />
          <Route path="/my-account" element={<AccountPage />} />
          <Route path="/api-credentials" element={<ApiCredentialsPage />} />
          <Route path="/my-memberships" element={<MembershipsPage />} />
          <Route path="/flags-report" element={<FlagsReportPage />} />
        </Routes>
        {/* <Dashboard /> */}
      </DashboardHome>
    </PageWrapper>
  );
}
