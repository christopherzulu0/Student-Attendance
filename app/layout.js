
import { Inter } from "next/font/google";
import "./globals.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Attendance Tracking",
  description: "Student Attendance Tracking",
};

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </KindeProvider>
  );
}
