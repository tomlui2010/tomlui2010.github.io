import type { Metadata } from "next";
import "./globals.css";
import LegacyScriptLoader from "./components/legacy-script-loader";

export const metadata: Metadata = {
  title: "Thomas Louis",
  description: "Senior Software Engineer portfolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/img/favicon.png" type="image/png" />


        {/* Legacy CSS (kept to preserve the existing look) */}
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/vendors/linericon/style.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/vendors/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
        <LegacyScriptLoader />
      </body>
    </html>
  );
}
