import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayyad Bilal Jawad | Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, experience, and get in touch.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Sayyad Bilal Jawad" }],
  openGraph: {
    title: "Sayyad Bilal Jawad | Full Stack Developer",
    description: "Full Stack Developer Portfolio - Building exceptional digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

