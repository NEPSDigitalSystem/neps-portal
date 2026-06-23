import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "./themeProvider"; // Adjust the path based on where you save your providers file

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}