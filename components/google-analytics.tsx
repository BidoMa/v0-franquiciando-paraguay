"use client"

import Script from "next/script"

export default function GoogleAnalytics() {
  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-K6RB7WYK4H"
      strategy="afterInteractive"
      onLoad={() => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
          window.dataLayer.push(arguments)
        }
        gtag("js", new Date())
        gtag("config", "G-K6RB7WYK4H", {
          page_title: document.title,
          page_location: window.location.href,
        })
      }}
    />
  )
}
