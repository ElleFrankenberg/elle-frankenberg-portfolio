import Footer from "./components/global/footer/Footer";
import Header from "./components/global/header/Header";
import { NavProvider } from "./store/navContext";
import "./globals.css";

export const metadata = {
  title: "Elle Frankenberg - Portfolio",
  description:
    "This is the portfolio of Elle Frankenberg, she is a frontend developer focusing on React and Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1599px]">
        <NavProvider>
          <Header />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
