import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GraphLayout from "@/components/GraphLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GraphQL Untuk Frontend",
  description: "Presentasi 2 Mei 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GraphLayout>{children}</GraphLayout>
      </body>
    </html>
  );
}
