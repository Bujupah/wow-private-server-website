import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Twensa | World of Warcraft v3.3.5a",
  description: "Twensa World of Warcraft Private Server on 3.3.5a Warth of The Lich King",
  abstract: "Twensa World of Warcraft Private Server on 3.3.5a Warth of The Lich King",
  keywords: ["World of Warcraft", "Private Server", "WoW", "3.3.5a", "WotLK", "Twensa"],
  applicationName: "Legends of the North",
  authors: [{
    name: "Bujupah",
    url: "https://bujupah.tech",
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
