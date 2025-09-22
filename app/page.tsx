import type React from "react"
import Image from "next/image"
import Script from "next/script"
import ScrollLink from "@/components/scroll-link"
import HubSpotForm from "@/components/hubspot-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Award, Globe, Building, CalendarDays, BadgeCheck, ArrowRight } from "lucide-react"

const FlagPY = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/paraguay-flag.png"
    alt="Bandera de Paraguay"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagDO = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/dominican-republic-flag.png"
    alt="Bandera de República Dominicana"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagSV = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/el-salvador-flag.png"
    alt="Bandera de El Salvador"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagHN = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/honduras-flag.png"
    alt="Bandera de Honduras"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagPA = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/panama-flag.png"
    alt="Bandera de Panamá"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagCR = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/costa-rica-flag.png"
    alt="Bandera de Costa Rica"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagGT = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/guatemala-flag.png"
    alt="Bandera de Guatemala"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagCO = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/colombia-flag.png"
    alt="Bandera de Colombia"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

const FlagBO = ({ className, title, ...props }: { className?: string; title?: string; [key: string]: any }) => (
  <Image
    src="/images/bolivia-flag.png"
    alt="Bandera de Bolivia"
    width={32}
    height={24}
    className={`object-cover ${className}`}
    title={title}
    {...props}
  />
)

export const metadata = {
  title: "Franquiciando Paraguay 2025 | Programa Internacional de Franquicias FCI Red",
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
  alternates: { canonical: "https://franquiciandoparaguay.com" },
  openGraph: {
    title: "Franquiciando Paraguay 2025 | Programa Internacional de Franquicias",
    description:
      "Transforma tu marca paraguaya en una franquicia exitosa. Programa internacional FCI Red con fondos de apoyo y consultoría especializada.",
    type: "website",
    locale: "es_PY",
    siteName: "Franquiciando Paraguay",
    url: "https://franquiciandoparaguay.com",
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
    description: "Transforma tu marca paraguaya en una franquicia exitosa con FCI Red.",
    images: ["/images/og-image.jpg"],
  },
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
  authors: [{ name: "FCI Red" }, { name: "Canudas Profesionales" }],
  category: "Business",
}

export default function FranquiciandoParaguay() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "@id": "https://franquiciandoparaguay.com/#event",
        name: "Franquiciando Paraguay 2025",
        description:
          "Programa internacional para transformar marcas paraguayas en franquicias exitosas con metodología probada en más de 1,950 marcas",
        startDate: "2025-09-01",
        endDate: "2026-03-31",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        location: {
          "@type": "Country",
          name: "Paraguay",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PY",
            addressRegion: "Asunción",
          },
        },
        organizer: [
          {
            "@type": "Organization",
            "@id": "https://franquiciandoparaguay.com/#fci-red",
            name: "FCI Red",
            url: "https://frontconsulting.com",
            description: "Front Consulting International - Líder mundial en desarrollo de franquicias",
          },
          {
            "@type": "Organization",
            "@id": "https://franquiciandoparaguay.com/#canudas",
            name: "Canudas Profesionales",
            url: "https://canudas.com.ar",
            description: "Consultora especializada en franquicias en Argentina y Paraguay",
          },
        ],
        offers: {
          "@type": "Offer",
          price: "10000",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-09-01",
          validThrough: "2025-10-15",
          description: "Programa completo con subsidio FCI del 33%",
        },
        image: "https://franquiciandoparaguay.com/images/og-image.jpg",
        url: "https://franquiciandoparaguay.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://franquiciandoparaguay.com/#website",
        url: "https://franquiciandoparaguay.com",
        name: "Franquiciando Paraguay 2025",
        description: "Programa internacional para convertir negocios paraguayos en franquicias exitosas",
        publisher: {
          "@id": "https://franquiciandoparaguay.com/#fci-red",
        },
        inLanguage: "es-PY",
      },
      {
        "@type": "Organization",
        "@id": "https://franquiciandoparaguay.com/#fci-red",
        name: "FCI Red",
        alternateName: "Front Consulting International",
        url: "https://frontconsulting.com",
        description: "Líder mundial en desarrollo de franquicias con más de 1,950 marcas transformadas en 8 países",
        foundingDate: "2010",
        areaServed: [
          "Paraguay",
          "Argentina",
          "Colombia",
          "Bolivia",
          "República Dominicana",
          "El Salvador",
          "Honduras",
          "Panamá",
          "Costa Rica",
          "Guatemala",
        ],
        serviceType: "Consultoría en Franquicias",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* JSON-LD for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Script
        id="resize-observer-fix"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Comprehensive ResizeObserver error suppression
            const resizeObserverErrorHandler = (e) => {
              if (e.message && e.message.includes('ResizeObserver loop')) {
                e.stopImmediatePropagation();
                return false;
              }
            };
            
            // Handle different error types
            window.addEventListener('error', resizeObserverErrorHandler);
            window.addEventListener('unhandledrejection', (e) => {
              if (e.reason && e.reason.message && e.reason.message.includes('ResizeObserver loop')) {
                e.preventDefault();
                return false;
              }
            });
            
            // Override ResizeObserver to prevent loops
            if (typeof ResizeObserver !== 'undefined') {
              const OriginalResizeObserver = ResizeObserver;
              window.ResizeObserver = class extends OriginalResizeObserver {
                constructor(callback) {
                  const wrappedCallback = (entries, observer) => {
                    try {
                      requestAnimationFrame(() => {
                        callback(entries, observer);
                      });
                    } catch (e) {
                      // Silently ignore ResizeObserver errors
                    }
                  };
                  super(wrappedCallback);
                }
              };
            }
          `,
        }}
      />

      {/* Top Decorative Background (global) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffefe9] via-[#eef4ff] to-transparent"></div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <ScrollLink
            target="hero"
            className="flex items-center gap-3"
            aria-label="Ir al inicio de Franquiciando Paraguay"
          >
            <FlagPY
              className="h-6 w-8 rounded-sm shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
              title="Bandera de Paraguay"
              aria-label="Paraguay"
            />
          </ScrollLink>
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium"
            role="navigation"
            aria-label="Navegación principal"
          >
            <ScrollLink target="programa" className="hover:text-[#e11d48] transition-colors">
              Programa
            </ScrollLink>
            <ScrollLink target="cronograma" className="hover:text-[#e11d48] transition-colors">
              Cronograma
            </ScrollLink>
            <ScrollLink target="jurado" className="hover:text-[#e11d48] transition-colors">
              Jurado
            </ScrollLink>
            <ScrollLink target="inversion" className="hover:text-[#e11d48] transition-colors">
              Inversión
            </ScrollLink>
            <ScrollLink target="inscripcion" className="hover:text-[#e11d48] transition-colors">
              Inscripción
            </ScrollLink>
          </nav>
          <Button asChild size="sm" className="rounded-full bg-[#e11d48] hover:bg-[#be123c]">
            <ScrollLink target="inscripcion">Inscribirme</ScrollLink>
          </Button>
        </div>
      </header>

      {/* HERO - Reducido padding vertical */}
      <section className="relative overflow-hidden scroll-mt-28" id="hero">
        {/* Shapes */}
        <div aria-hidden="true" className="absolute -z-10 inset-0">
          <div className="absolute -right-16 -top-20 h-72 w-72 rotate-12 rounded-3xl bg-gradient-to-br from-[#e11d48] to-[#fb7185] blur-2xl opacity-20" />
          <div className="absolute -left-10 top-32 h-80 w-80 -rotate-6 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#60a5fa] blur-2xl opacity-20" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-sm font-medium shadow-sm">
              <BadgeCheck className="h-4 w-4 text-[#1d4ed8]" aria-hidden="true" />
              Programa Internacional promovido por FCI Red
            </div>

            <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl lg:text-6xl text-balance">
              El programa que transforma marcas paraguayas en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-[#ef4444] to-[#1d4ed8]">
                franquicias exitosas
              </span>
            </h1>

            <div className="mt-3 flex items-center justify-center gap-2">
              <FlagPY className="h-5 w-7 rounded-sm shadow-sm" title="Bandera de Paraguay" aria-label="Paraguay" />
              <p className="text-xl font-semibold text-[#1d4ed8]">Franquiciando Paraguay 2025</p>
            </div>

            <p className="mt-4 text-lg text-gray-700 text-pretty">
              Tu marca puede ser una franquicia. Llegó Franquiciando Paraguay, un programa Internacional promovido por
              FCI que ha transformado +1.950 marcas en todo el mundo en potenciales franquicias. Tu marca puede ser una
              de ellas.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base bg-[#e11d48] hover:bg-[#be123c]">
                <ScrollLink target="cronograma" className="flex items-center gap-2">
                  Ver cronograma
                  <ArrowRight className="h-5 w-5" />
                </ScrollLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white bg-transparent"
              >
                <ScrollLink target="inscripcion">Quiero inscribirme</ScrollLink>
              </Button>
            </div>

            {/* Mini stats - Reducido margin top */}
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <HeroStat number="+1.950" label="Marcas transformadas" />
              <HeroStat number="33%" label="Subsidio FCI" />
              <HeroStat number="5" label="Meses de programa" />
              <HeroStat number="8" label="Países con experiencia" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMA - Reducido padding */}
      <section id="programa" className="py-12 lg:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="¿En qué consiste el programa?"
            titlePrimary="Crece con un modelo"
            titleAccent="probado y escalable"
            accentGradient="from-[#e11d48] to-[#1d4ed8]"
            subtitle="Tiene como objetivo seleccionar empresas exitosas para ayudarlas a crecer con el sistema de franquicias."
          />

          <div className="mx-auto mt-6 max-w-4xl">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#fff1f2] via-white to-[#eff6ff]">
              <CardContent className="p-6 lg:p-8">
                <p className="text-lg leading-relaxed text-gray-800">
                  El programa Franquiciando Paraguay ayudará a las empresas seleccionadas a acceder a fondos de apoyo
                  (bonificación en honorarios), consultoría integral, estandarización de sus procesos y comercialización
                  de su franquicia.
                </p>
                <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-base leading-relaxed text-[#1d4ed8] font-semibold">
                    Es la oportunidad para expandir tu negocio y crecer mediante el sistema de franquicias acompañado
                    por una de las más prestigiosas instituciones de franquicias a nivel mundial, FCI, y de la mano de
                    una de las más importantes consultoras de Argentina y Paraguay, Canudas Profesionales en
                    Franquicias.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={Users}
              title="Selección exclusiva"
              desc="Elegiremos empresas para transformarlas en franquicia"
            />
            <Feature icon={Award} title="Fondos de apoyo" desc="Acceso a fondos y honorarios preferenciales" />
            <Feature icon={TrendingUp} title="Profesionalización" desc="Estandarizamos y hacemos crecer tu negocio" />
            <Feature icon={Building} title="Fortalecimiento" desc="Impulsamos marcas nacionales con franquicias" />
            <Feature icon={Users} title="Más empleo" desc="Generamos más y mejores puestos de trabajo" />
            <Feature icon={Globe} title="Modelo probado" desc="Sistema escalable con resultados" />
          </div>
        </div>
      </section>

      {/* CRONOGRAMA - Reducido padding */}
      <section
        id="cronograma"
        className="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#171a2b] to-[#0b1220] py-12 lg:py-16 text-white scroll-mt-28"
      >
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-[#e11d48] blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-[#1d4ed8] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm">
              <CalendarDays className="h-4 w-4" /> Cronograma del programa
            </div>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Fechas clave</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TimelineCard step="1" title="INSCRIPCIONES" date="Del 01/09/2025 al 15/10/2025" color="red" />
            <TimelineCard step="2" title="SELECCIÓN" date="15/10/2025 al 31/10/2025" color="white" />
            <TimelineCard step="3" title="PROGRAMA" date="Del 31/10/2025 al 31/03/2026" color="blue" />
          </div>
        </div>
      </section>

      {/* JURADO - Reducido padding */}
      <section id="jurado" className="py-12 lg:py-16 bg-gradient-to-br from-[#f8fafc] to-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Jurado especialista"
            titlePrimary="Equipo evaluador"
            titleAccent="de alto nivel"
            accentGradient="from-[#1d4ed8] to-[#e11d48]"
            subtitle="Referentes en franquicias para evaluar el potencial de tu marca."
          />

          <div className="mx-auto mt-8 grid max-w-6xl gap-8 md:grid-cols-3">
            <PersonCard
              name="Carlos Canudas"
              role="Consultor especializado en franquicias"
              description="Fundador de Canudas Franquicias con más de 30 años en el desarrollo de franquicias en Argentina y Paraguay."
              imageSrc="/images/carlos-canudas.png"
            />
            <PersonCard
              name="Gabriel Boero"
              role="Consultor en desarrollo de negocios y franquicias"
              description="Más de 60 startups exitosos. Representante de CAME en Paraguay y experto en escalamiento de negocios."
              imageSrc="/images/gabriel-boero.jpg"
            />
            <PersonCard
              name="Alfonso Riera"
              role="Director de Front Consulting Venezuela y Presidente de FCI"
              description="Líder en el desarrollo de franquicias a nivel internacional con más de 1,950 marcas transformadas en 8 países."
              imageSrc="/images/alfonso-riera.jpg"
            />
          </div>
        </div>
      </section>

      {/* INVERSIÓN - Reducido padding */}
      <section id="inversion" className="py-12 lg:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Inversión del programa"
            titlePrimary="Acceso preferencial con"
            titleAccent="subsidio FCI"
            accentGradient="from-[#e11d48] to-[#1d4ed8]"
            subtitle="Condiciones diseñadas para impulsar tu expansión."
          />

          <div className="mx-auto mt-8 max-w-4xl">
            <Card className="border-0 overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#e11d48] to-[#1d4ed8] p-6 text-center text-white">
                  <p className="text-xl font-bold">OFERTA ESPECIAL - SUBSIDIO FCI</p>
                </div>
                <div className="p-6 lg:p-8 text-center">
                  <div className="text-gray-500 line-through text-xl">Valor regular: USD 15.000</div>
                  <div className="mt-4 inline-block rounded-full bg-green-100 px-5 py-2 font-semibold text-green-800">
                    Fondo de apoyo FCI: USD 5.000 (33% subsidio)
                  </div>
                  <div className="mt-6 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-[#1d4ed8]">
                    USD 10.000
                  </div>
                  <div className="mt-6 rounded-xl bg-gray-50 p-6">
                    <p className="text-lg font-semibold">Plan de pagos</p>
                    <p className="text-gray-700">
                      5 cuotas mensuales y consecutivas de USD 2.000, que se pagarán en dólares o guaraníes al tipo de
                      cambio del día.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA - Reducido padding */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#f8fafc] to-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Experiencia internacional"
            titlePrimary="El programa ya se implementó en"
            titleAccent="múltiples países"
            accentGradient="from-[#1d4ed8] to-[#e11d48]"
            subtitle="Casos reales que avalan la metodología probada en más de 1,950 marcas."
          />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "República Dominicana",
              "El Salvador",
              "Honduras",
              "Panamá",
              "Costa Rica",
              "Guatemala",
              "Colombia",
              "Bolivia",
            ].map((c) => {
              const Flag = flagMap[c as keyof typeof flagMap]
              return (
                <Card key={c} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-5 text-center">
                    {Flag ? (
                      <div className="mb-3 flex items-center justify-center">
                        <Flag title={`Bandera de ${c}`} className="h-6 w-auto rounded-sm shadow-sm" />
                      </div>
                    ) : (
                      <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#e11d48] to-[#1d4ed8]" />
                    )}
                    <p className="font-semibold">{c}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Barra de confianza: FCI Red */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Programa internacional promovido por</p>
            <Image
              src="/images/fci-red.png"
              alt="FCI Red - Front Consulting International, líder mundial en desarrollo de franquicias"
              width={280}
              height={70}
              className="h-10 w-auto"
              priority={false}
              sizes="280px"
            />
          </div>
        </div>
      </section>

      {/* ORGANIZADORES - Reducido padding */}
      <section className="py-12 lg:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Organizadores"
            titlePrimary="Respaldado por"
            titleAccent="líderes de franquicias"
            accentGradient="from-[#e11d48] to-[#1d4ed8]"
            subtitle="Canudas Profesionales y FCI Red, líderes en consultoría de franquicias."
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-14 sm:flex-row">
            <div className="text-center">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
                <Image
                  src="/images/canudas-logo.png"
                  alt="Canudas Profesionales en Franquicias - Consultora especializada en desarrollo de franquicias"
                  width={260}
                  height={120}
                  className="h-auto w-full max-w-[260px]"
                  priority={false}
                  sizes="260px"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">Canudas Profesionales en Franquicias</p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
                <Image
                  src="/images/fci-red.png"
                  alt="FCI Red - Front Consulting International, líder mundial en franquicias"
                  width={260}
                  height={120}
                  className="h-auto w-full max-w-[260px]"
                  priority={false}
                  sizes="260px"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">Front Consulting International (FCI Red)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO - Reducido padding */}
      <section
        id="inscripcion"
        className="relative overflow-hidden bg-gradient-to-br from-[#e11d48] via-[#ef4444] to-[#1d4ed8] py-12 lg:py-16 scroll-mt-28"
      >
        <div aria-hidden className="absolute inset-0 opacity-40">
          <div className="absolute left-1/4 top-6 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute right-1/4 bottom-6 h-64 w-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-black sm:text-5xl">Inscripción</h2>
            <p className="mt-4 text-lg text-white/90">
              Complete el formulario con sus datos y los de su empresa. Un ejecutivo se contactará y recibirá una
              evaluación previa sobre el potencial de su marca, para después pasar a concursar y posiblemente ser
              elegida en esta primera edición.
            </p>
          </div>

          <Card className="mx-auto mt-8 border-0 bg-white/95 backdrop-blur shadow-2xl">
            <CardContent className="p-6 lg:p-8">
              <HubSpotForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <FlagPY className="h-4 w-6 rounded-sm shadow-sm" title="Bandera de Paraguay" aria-label="Paraguay" />
              <p className="text-sm text-gray-600">© 2025 Franquiciando Paraguay. Todos los derechos reservados.</p>
            </div>
            <ScrollLink target="inscripcion" className="font-semibold text-[#e11d48] hover:text-[#be123c]">
              Inscribirme
            </ScrollLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ---------- Helpers ---------- */

const flagMap: Record<string, React.ComponentType<{ className?: string; title?: string }>> = {
  "República Dominicana": FlagDO,
  "El Salvador": FlagSV,
  Honduras: FlagHN,
  Panamá: FlagPA,
  "Costa Rica": FlagCR,
  Guatemala: FlagGT,
  Colombia: FlagCO,
  Bolivia: FlagBO,
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-black text-[#0b1220]">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function SectionHeader({
  badge,
  titlePrimary,
  titleAccent,
  accentGradient,
  subtitle,
}: {
  badge: string
  titlePrimary: string
  titleAccent: string
  accentGradient: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium shadow-sm">
        {badge}
      </div>
      <h2 className="mt-4 text-3xl font-black sm:text-4xl">
        {titlePrimary}{" "}
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>{titleAccent}</span>
      </h2>
      {subtitle ? <p className="mt-3 text-gray-700">{subtitle}</p> : null}
    </div>
  )
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}) {
  return (
    <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1d4ed8] text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-1 text-sm text-gray-700">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TimelineCard({
  step,
  title,
  date,
  color,
}: {
  step: string
  title: string
  date: string
  color: "red" | "white" | "blue"
}) {
  const palette =
    color === "red"
      ? "from-[#e11d48] to-[#ef4444]"
      : color === "white"
        ? "from-white to-gray-50"
        : "from-[#1d4ed8] to-[#3b82f6]"

  const textColor = color === "white" ? "text-[#0b1220]" : "text-white"

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${palette} text-2xl font-black ${textColor}`}
      >
        {step}
      </div>
      <h3 className="mt-4 text-center text-xl font-bold">{title}</h3>
      <p className="mt-1 text-center text-white/80">{date}</p>
    </div>
  )
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700">{label}</label>
      {children}
    </div>
  )
}

function PersonCard({
  name,
  role,
  description,
  imageSrc,
}: {
  name: string
  role: string
  description: string
  imageSrc: string
}) {
  return (
    <Card className="border border-gray-200 overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-5">
          <div className="relative h-64 md:h-64 md:col-span-2">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`Retrato profesional de ${name}, ${role} en Franquiciando Paraguay`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="p-6 md:col-span-3">
            <h3 className="text-2xl font-black text-gray-900">{name}</h3>
            <p className="mt-1 text-sm font-semibold text-gray-900">{role}</p>
            <div className="mt-3 h-1 w-16 bg-gradient-to-r from-[#e11d48] to-[#1d4ed8]" aria-hidden="true" />
            <p className="mt-4 text-gray-700">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
