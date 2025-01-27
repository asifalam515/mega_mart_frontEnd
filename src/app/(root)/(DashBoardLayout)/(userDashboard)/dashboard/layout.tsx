import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User DashBoard|MegaMart",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      User sideBar
      {children}
    </div>
  );
}
