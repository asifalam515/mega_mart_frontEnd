import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DashBoard|MegaMart",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      sidebar
      {children}
    </div>
  );
}
