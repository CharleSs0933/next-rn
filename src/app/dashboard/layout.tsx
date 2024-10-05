import { AdminContextProvider } from "@/library/admin.context";
import AdminSidebar from "./_components/admin_sidebar";
import AdminHeader from "./_components/admin_header";
import AdminContent from "./_components/admin_content";
import AdminFooter from "./_components/admin_footer";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AdminContextProvider>
      <div style={{ display: "flex" }}>
        <div className="left-side" style={{ minWidth: 80 }}>
          <AdminSidebar />
        </div>
        <div className="right-side" style={{ flex: 1 }}>
          <AdminHeader />
          <AdminContent>{children}</AdminContent>
          <AdminFooter />
        </div>
      </div>
    </AdminContextProvider>
  );
};

export default AdminLayout;
