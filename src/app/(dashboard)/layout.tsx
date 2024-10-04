import AdminContent from "./_components/content";
import { AdminFooter } from "./_components/footer";
import { AdminHeader } from "./_components/header";
import { AdminSidebar } from "./_components/sidebar";
import { Layout } from "antd";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Layout>
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <AdminContent>{children}</AdminContent>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
