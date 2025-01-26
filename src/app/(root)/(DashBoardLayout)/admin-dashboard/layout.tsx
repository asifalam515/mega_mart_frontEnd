import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin DashBoard|MegaMart",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Admin DashBoard sideBar
      {children}
    </div>
  );
}
