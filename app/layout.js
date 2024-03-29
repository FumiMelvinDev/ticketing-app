import Sidebar from "./(components)/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex space-x-16 sm:space-x-60">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
