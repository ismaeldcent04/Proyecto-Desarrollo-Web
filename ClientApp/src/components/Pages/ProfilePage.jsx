import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProfilePageFeed from "../Feed/ProfilePageFeed";
import Widgets from "../Widgets/Widgets";

function ProfilePage() {
  return (
    <div className="app">
      <Sidebar />
      <ProfilePageFeed />
      <Widgets />
    </div>
  );
}
export default ProfilePage;
