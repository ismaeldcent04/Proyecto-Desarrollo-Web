import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import BookmarksFeed from "../Feed/BookmarksFeed";
import "../CSS/Page.css";

function BookmarksPage() {
  return (
    <div className="app">
      <Sidebar />
      <BookmarksFeed username="ismaeldcent04" />
      <Widgets />
    </div>
  );
}
export default BookmarksPage;
