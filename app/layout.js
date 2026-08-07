import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./(components)/layout/header/Header";
import { ReduxProvider } from "@/RTK/Provider";
import ToUpBtn from "./(components)/features/toup-btn/ToUpBtn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});
export const metadata = {
  title: "minicom | Modern Furniture Store",
  description: "E-commerce store for modern furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.className} h-full antialiased`}>
      <ReduxProvider>
        <body className="min-h-full flex flex-col">
          <ToUpBtn />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
