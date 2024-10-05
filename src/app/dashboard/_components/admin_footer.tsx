"use client";

import { Layout } from "antd";

const { Footer } = Layout;
const AdminFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      CharleSs ©{new Date().getFullYear()} Created by @charleSs
    </Footer>
  );
};

export default AdminFooter;
