import React from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Layout = ({ renderHeaderAndFooter, children }) => (
  <div className="app">
    {renderHeaderAndFooter && <Sidebar isSidebar={true} />}
    <main className="content">
      {renderHeaderAndFooter && <Topbar setIsSidebar={true} />}
      {children}
    </main>
  </div>
);

export default Layout;
