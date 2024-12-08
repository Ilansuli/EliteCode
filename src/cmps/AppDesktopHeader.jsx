import React from "react";
import { AppNav, SvgIcon } from ".";
export default function AppHeader() {
  return (
    <section className="app-header">
      <div className="app-header-container container">
        <SvgIcon iconName="logo" />
        <AppNav />
      </div>
    </section>
  );
}
