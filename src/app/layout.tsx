import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next Test",
  description: "Read & process your files online",
  openGraph: {
    title: "Next Test",
    description: "Read & process your files online",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed="">
        {children}
      </body>
    </html>
  );
}
