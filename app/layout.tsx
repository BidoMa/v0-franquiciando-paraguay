import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import GoogleAnalytics from "../components/google-analytics"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "Franquiciando Paraguay 2025 | Programa Internacional de Franquicias FCI Red",
    template: "%s | Franquiciando Paraguay 2025",
  },
  description:
    "Programa internacional para convertir negocios paraguayos en franquicias exitosas. Fondos de apoyo FCI Red, consultoría integral, estandarización y comercialización. Inscripciones abiertas hasta octubre 2025.",
  keywords: [
    "Franquicias Paraguay 2025",
    "Franquiciando Paraguay",
    "FCI Red Paraguay",
    "Canudas Profesionales Paraguay",
    "franquiciar negocio Paraguay",
    "programa franquicias internacional",
    "expandir negocio Paraguay",
    "consultoría franquicias Asunción",
    "subsidio franquicias Paraguay",
    "Gabriel Boero franquicias",
    "Carlos Canudas Paraguay",
    "Alfonso Riera FCI",
  ],
  authors: [{ name: "FCI Red" }, { name: "Canudas Profesionales" }],
  creator: "FCI Red",
  publisher: "Canudas Profesionales",
  category: "Business",
  classification: "Franchise Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://franquiciandoparaguay.com",
    siteName: "Franquiciando Paraguay",
    title: "Franquiciando Paraguay 2025 | Programa Internacional de Franquicias",
    description:
      "Transforma tu marca paraguaya en una franquicia exitosa. Programa internacional FCI Red con fondos de apoyo y consultoría especializada.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Franquiciando Paraguay 2025 - Programa Internacional de Franquicias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franquiciando Paraguay 2025 | Programa Internacional de Franquicias",
    description: "Transforma tu marca paraguaya en una franquicia exitosa. Programa internacional FCI Red.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://franquiciandoparaguay.com",
    languages: {
      "es-PY": "https://franquiciandoparaguay.com",
      es: "https://franquiciandoparaguay.com",
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  other: {
    "geo.region": "PY",
    "geo.country": "Paraguay",
    "geo.placename": "Asunción",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TL72MQFX');
            `,
          }}
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://js.hsforms.net" />
        <link rel="dns-prefetch" href="//js.hsforms.net" />

        <link
          rel="preload"
          href="/_next/static/media/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#e11d48" />
        <meta name="msapplication-TileColor" content="#e11d48" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL72MQFX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Suspense fallback={null}>
          <GoogleAnalytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
