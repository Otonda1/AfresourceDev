import type { Metadata } from "next";
import { cormorantGaramond, inter } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Afresource Network Ltd | People & Organizational Advisory in Africa",
  description:
    "Strategic advisory for organizations operating across Africa. Afresource helps build strong people structures, ensure compliance, and drive sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${cormorantGaramond.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-full bg-background">{children}</body>
    </html>
  );
}
