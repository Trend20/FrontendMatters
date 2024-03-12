import type { Metadata } from "next";
import "../../styles/globals.css";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "CMS Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-col w-full min-h-screen">{children}</main>
      </div>
    </div>
  );
}
