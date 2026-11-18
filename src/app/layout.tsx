import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevHub | Birlikte üret",
  description: "Geliştiriciler için proje keşif ve iş birliği platformu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
