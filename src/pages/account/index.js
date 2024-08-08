import React, { useState } from "react";
import Layout from "../../components/layout/index";
import UserProfile from "../../components/account/UserProfile";
import PersonalDetailsForm from "../../components/account/PersonalDetailsForm";
import Breadcrumb from "../../components/commons/Breadcrumb";
import UpdatePasswordForm from "../../components/account/UpdatePasswordForm";
const breadcrumbProfile = [
  { label: "Account Management", },
];
const breadcrumbUpdateProfile = [
  { label: "Account Management", url: "/account-management" },
  { label: "Update Personal Details" },
];
const breadcrumbUpdatePassword = [
  { label: "Account Management", url: "/account-management" },
  { label: " Update Password"},
];
export default function AccountManagement() {
  const [view, setView] = useState(0);
  return (
    <Layout>
      <div className="font-semibold	tex-base">Account Management</div>
      <Breadcrumb
        items={view == "0" ? breadcrumbProfile :view == "1" ? breadcrumbUpdateProfile:breadcrumbUpdatePassword}
      />
      {view == "0" && <UserProfile setView={setView} />}
      {view == "1" && <PersonalDetailsForm />}
      {view == "2" && <UpdatePasswordForm />}
    </Layout>
  );
}
