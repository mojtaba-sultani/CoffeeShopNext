import "./globals.css";
import localFont from "next/font/local"
const raviFont = localFont({
  src:"../../public/fonts/RaviFaNum-Medium.woff2"
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full ${raviFont.className}`}
      dir="rtl"
      >
      <body>
        {children}
      </body>
    </html>
  );
}
