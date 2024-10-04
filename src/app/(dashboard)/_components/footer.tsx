"use client";

import { Layout } from "antd";

const { Footer } = Layout;
export const AdminFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      CharleSs ©{new Date().getFullYear()} Created by @charleSs
    </Footer>
  );
};
