"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function HubSpotForm() {
  const formCreated = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const originalError = window.onerror
    const originalUnhandledRejection = window.onunhandledrejection
    const originalConsoleError = console.error

    // Override console.error to suppress ResizeObserver errors
    console.error = (...args) => {
      const message = args.join(" ")
      if (message.includes("ResizeObserver loop") || message.includes("ResizeObserver")) {
        return // Silently ignore ResizeObserver errors
      }
      originalConsoleError.apply(console, args)
    }

    // Enhanced error handler
    window.onerror = (message, source, lineno, colno, error) => {
      if (
        typeof message === "string" &&
        (message.includes("ResizeObserver loop") || message.includes("ResizeObserver"))
      ) {
        return true // Suppress ResizeObserver errors
      }
      return originalError ? originalError(message, source, lineno, colno, error) : false
    }

    // Enhanced unhandled rejection handler
    window.onunhandledrejection = (event) => {
      if (event.reason?.message?.includes("ResizeObserver")) {
        event.preventDefault()
        return
      }
      return originalUnhandledRejection ? originalUnhandledRejection(event) : undefined
    }

    // Override ResizeObserver constructor to prevent loops
    if (typeof ResizeObserver !== "undefined") {
      const OriginalResizeObserver = ResizeObserver
      window.ResizeObserver = class extends OriginalResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          const wrappedCallback: ResizeObserverCallback = (entries, observer) => {
            try {
              requestAnimationFrame(() => {
                try {
                  callback(entries, observer)
                } catch (e) {
                  // Silently ignore callback errors
                }
              })
            } catch (e) {
              // Silently ignore ResizeObserver errors
            }
          }
          super(wrappedCallback)
        }
      }
    }

    return () => {
      window.onerror = originalError
      window.onunhandledrejection = originalUnhandledRejection
      console.error = originalConsoleError
      formCreated.current = false

      const container = containerRef.current
      if (container) {
        container.innerHTML = `
          <div class="flex items-center justify-center h-[600px] text-gray-500">
            <div class="text-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e11d48] mx-auto mb-4"></div>
              <p>Cargando formulario...</p>
            </div>
          </div>
        `
      }
    }
  }, [])

  const handleScriptLoad = () => {
    if (formCreated.current) return

    setTimeout(() => {
      try {
        // @ts-ignore
        if (window.hbspt && containerRef.current && !formCreated.current) {
          formCreated.current = true
          // @ts-ignore
          window.hbspt.forms.create({
            portalId: "22460986",
            formId: "246db844-dc3d-4323-874d-3a978525a6d4",
            region: "na1",
            target: "#hubspot-form-container",
            onFormReady: () => {
              const container = containerRef.current
              if (container) {
                const placeholder = container.querySelector(".flex.items-center.justify-center")
                if (placeholder) {
                  ;(placeholder as HTMLElement).style.display = "none"
                }
              }
            },
            onFormSubmit: () => {
              console.log("[v0] HubSpot form submitted successfully")
            },
          })
        }
      } catch (error) {
        console.error("[v0] Error creating HubSpot form:", error)
      }
    }, 150)
  }

  return (
    <>
      <div
        ref={containerRef}
        id="hubspot-form-container"
        className="min-h-[600px] w-full"
        style={{
          contain: "layout style size",
          willChange: "auto",
          height: "600px", // Increased height from 500px to 600px to show submit button
          overflow: "hidden",
        }}
      >
        {/* Loading placeholder */}
        <div className="flex items-center justify-center h-[600px] text-gray-500">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e11d48] mx-auto mb-4"></div>
            <p>Cargando formulario...</p>
          </div>
        </div>
      </div>

      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={(e) => console.error("[v0] HubSpot script failed to load:", e)}
      />
    </>
  )
}
