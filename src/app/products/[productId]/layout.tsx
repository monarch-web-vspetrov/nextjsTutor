import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profuct Layput",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      
      <body>
      {children}
      
      </body>
    </html>
  );
}