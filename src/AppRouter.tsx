import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { DashboardPage, LoginPage } from "./pages";
import { ForgotPage } from "./pages/ForgotPassword/ForgotPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { OrganizationPage } from "./pages/Organization/OrganizationPage";
import { ManageOrganizationPage } from "./pages/ManageOrganizationPage/ManageOrganizationPage";
import { BillingInvoicePage } from "./pages/BillingInvoicePage/BillingInvoicePage";
import { UpgradePlansPage } from "./pages/UpgradePlansPage/UpgradePlansPage";
import { AccountPage } from "./pages/AccountPage/AccountPage";
import { ApiCredentialsPage } from "./pages/MyApiPage/ApiCredentialsPage";
import { MembershipsPage } from "./pages/MembershipsPage/MembershipsPage";
import { FlagsReportPage } from "./pages/FlagsReportPage/FlagsReprotPage";
import { MembersRolesPage } from "./pages/MembersRoles/MembersRolesPage";
import { AuthenticationPage } from "./pages/AuthenticationPage/AuthenticationPage";
import { DataGovernancePage } from "./pages/Data-GovernancePage/Data-GovernancePage";
import { UsagePage } from "./pages/UsagePage/UsagePage";
import { Dashboard } from "./containers";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forgot-password" element={<ForgotPage />} />

      <Route
        path="dashboard"
        element={
          <DashboardPage>
            <Route path="*" element={<Dashboard />} />
          </DashboardPage>
        }
      ></Route>

      <Route
        path="organization/*"
        element={
          <DashboardPage>
            <Route
              path="*"
              element={
                <OrganizationPage>
                  <Route path="/" element={<h1>organization</h1>} />
                  <Route path="manage" element={<ManageOrganizationPage />} />
                  <Route path="billing" element={<BillingInvoicePage />} />
                  <Route path="plans" element={<UpgradePlansPage />} />
                  <Route path="my-account" element={<AccountPage />} />
                  <Route
                    path="api-credentials"
                    element={<ApiCredentialsPage />}
                  />
                  <Route path="my-memberships" element={<MembershipsPage />} />
                  <Route path="flags-report" element={<FlagsReportPage />} />
                  <Route path="members" element={<MembersRolesPage />} />
                  <Route
                    path="authentication"
                    element={<AuthenticationPage />}
                  />
                  <Route
                    path="data-governance"
                    element={<DataGovernancePage />}
                  />
                  <Route path="usage" element={<UsagePage />} />
                </OrganizationPage>
              }
            />
          </DashboardPage>
        }
      ></Route>

      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
}
