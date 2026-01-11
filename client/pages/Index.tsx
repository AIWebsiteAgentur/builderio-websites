import { useState } from "react";
import { Star, MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative h-screen bg-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-accent-brown-light/40 to-white" />
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1522338198-51aaf079b127?w=1200&h=800&fit=crop")',
        opacity: 0.15,
      }}
    />
    <div className="relative h-full flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          Ihr Friseursalon für elegante Vielfalt mit Niveau!
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 font-light">
          Professionalität trifft Kreativität – Wir verwandeln Ihre Haare in ein
          Kunstwerk
        </p>
        <Button
          size="lg"
          className="bg-accent-brown hover:bg-accent-brown-dark text-white px-8 py-6 text-lg rounded-lg transition-colors"
        >
          Termin anfragen
        </Button>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Damenhaarschnitt",
      description:
        "Moderne und klassische Schnitte, perfekt auf Ihre Gesichtsform abgestimmt",
    },
    {
      title: "Herrenhaarschnitt",
      description: "Präzise Schnitte für einen gepflegten und zeitlosen Look",
    },
    {
      title: "Haarcolorationen",
      description:
        "Hochwertige Farbtechniken für strahlende und langanhaltende Ergebnisse",
    },
    {
      title: "Balayage & Strähnchen",
      description:
        "Moderne Highlightingtechniken für natürliche Dimension und Tiefe",
    },
    {
      title: "Bartpflege & Styling",
      description:
        "Professionelle Bartpflege und individuelle Styling-Beratung",
    },
    {
      title: "Föhnen & Styling",
      description:
        "Professionelle Stylings für besondere Anlässe und den Alltag",
    },
    {
      title: "Haarpflege-Behandlungen",
      description:
        "Intensive Pflege und Aufbautherapien für gesundes, glänzendes Haar",
    },
    {
      title: "Brautfrisuren",
      description:
        "Einzigartige Brautfrisuren, die Ihr schönstes Accessoire zum Strahlen bringt",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Beliebte Dienstleistungen
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Entdecken Sie unser vielfältiges Angebot an professionellen
            Haarpflege-Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-accent-brown-light/30 border border-accent-brown-light rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const pricing = [
    {
      category: "Damenhaarschnitt",
      items: [
        { name: "Haarschnitt", price: "€35 - €45" },
        { name: "Schnitt + Styling", price: "€45 - €55" },
        { name: "Haarschnitt + Föhnen", price: "€50 - €65" },
      ],
    },
    {
      category: "Herrenhaarschnitt",
      items: [
        { name: "Haarschnitt", price: "€25 - €35" },
        { name: "Schnitt + Rasur", price: "€45 - €55" },
      ],
    },
    {
      category: "Haarfarbe",
      items: [
        { name: "Komplett Coloration", price: "€45 - €70" },
        { name: "Wurzelbehandlung", price: "€35 - €50" },
        { name: "Balayage/Highlights", price: "€60 - €100" },
      ],
    },
    {
      category: "Spezialbehandlungen",
      items: [
        { name: "Intensive Pflege", price: "€30 - €45" },
        { name: "Brautfrisur", price: "€60 - €100" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-accent-brown-light/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Preisliste
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Transparente und faire Preise für professionelle Leistungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricing.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-border p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex justify-between items-center pb-2 border-b border-border/50"
                  >
                    <span className="text-foreground">{item.name}</span>
                    <span className="font-semibold text-accent-brown">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OffersSection = () => {
  const offers = [
    {
      title: "Frühjahrs-Special",
      description:
        "Neue Frisur zum Frühjahr – 15% Rabatt auf alle Haarschnitte im März",
      badge: "März",
    },
    {
      title: "Treueprogramm",
      description:
        "Jede 6. Behandlung kostenlos! Jetzt anmelden und von Vorzugspreisen profitieren",
      badge: "Ganzjährig",
    },
    {
      title: "Paar-Package",
      description:
        "Gemeinsame Wellness für Zwei – 10% Rabatt bei gemeinsamen Terminen",
      badge: "Limitiert",
    },
  ];

  return (
    <section id="offers" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Aktuelle Angebote
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Nutzen Sie unsere exklusiven Aktionen und Rabatte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-accent-brown-light/20 to-accent-brown-light/5 rounded-lg p-8 border border-accent-brown-light"
            >
              <div className="inline-block bg-accent-brown text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {offer.badge}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {offer.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    {
      title: "Neue Premium-Produktlinie verfügbar",
      excerpt:
        "Wir haben eine exklusive neue Produktlinie mit veganen Haarpflegeprodukten in unser Angebot aufgenommen.",
      date: "15. Januar 2024",
    },
    {
      title: "Spannende neue Behandlungsmethode",
      excerpt:
        "Unsere Salon-Profis haben eine innovative Haaraufbaubehandlung absolviert und heißen Sie herzlich willkommen.",
      date: "8. Januar 2024",
    },
    {
      title: "Erweiterte Öffnungszeiten",
      excerpt:
        "Ab sofort haben wir freitags und samstags bis 19 Uhr geöffnet, um Ihnen mehr Flexibilität zu bieten.",
      date: "1. Januar 2024",
    },
  ];

  return (
    <section id="news" className="py-20 sm:py-28 bg-accent-brown-light/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Neuigkeiten & Aktuelles
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Die neuesten Updates aus unserem Salon
          </p>
        </div>

        <div className="space-y-8">
          {news.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
            >
              <time className="text-sm font-semibold text-accent-brown">
                {item.date}
              </time>
              <h3 className="text-2xl font-semibold text-foreground mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryCustomersSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517191434949-7d82d2a98e72?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522069213448-443a614da9b6?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507038957-4f2c0fca41a0?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534008897995-25ea47c33d86?w=400&h=400&fit=crop",
  ];

  return (
    <section id="gallery-customers" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Galerie – Kundenfrisuren
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Lassen Sie sich von unseren realisierten Werken inspirieren
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Kundenffrisur ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySalonSection = () => {
  const salonImages = [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1633613286991-611bcb3d7a1b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
  ];

  return (
    <section
      id="gallery-salon"
      className="py-20 sm:py-28 bg-accent-brown-light/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Unser Salon
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Lernen Sie unsere moderne und entspannende Atmosphäre kennen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonImages.map((img, idx) => (
            <div key={idx} className="aspect-video rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Salon Impression ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20 sm:py-28 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Über uns
        </h2>
        <p className="text-lg text-muted-foreground font-light">
          Meister unseres Handwerks mit Leidenschaft für Schönheit
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Unsere Geschichte
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Seit über 20 Jahren sind wir Ihr verlässlicher Partner für
            hochwertige Haarpflege und professionelles Styling. Was mit einer
            kleinen Vision begann, entwickelte sich zu einem modernen Salon mit
            einem engagierten Team von Fachleuten.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wir verfolgen eine einfache Philosophie: Jeder Gast verdient
            individuelle Aufmerksamkeit, beste Qualität und einen Service, der
            das Erlebnis unvergesslich macht.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Unsere Werte
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-accent-brown mr-3 font-bold">✓</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Handwerkskunst</strong> –
                Perfektion in jedem Detail
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-brown mr-3 font-bold">✓</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Qualität</strong> – Nur
                beste Produkte und Techniken
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-brown mr-3 font-bold">✓</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Kundenservice</strong> –
                Ihre Zufriedenheit ist unser Ziel
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-brown mr-3 font-bold">✓</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Innovation</strong> –
                Aktuelle Trends und Techniken
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-accent-brown-light/20 rounded-lg p-8 border border-accent-brown-light">
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          Unser Team
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Unser hochqualifiziertes Team besteht aus erfahrenen Friseuren und
          Stylistinnen mit fachlicher Expertise und künstlerischem Verständnis.
          Regelmäßige Fortbildungen und internationale Trainings halten uns
          immer auf dem neuesten Stand der Frisierkunst.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ihre Wünsche und Bedürfnisse stehen dabei an erster Stelle – Wir
          nehmen uns Zeit für persönliche Beratungen und individuelle Lösungen.
        </p>
      </div>
    </div>
  </section>
);

const HoursSection = () => {
  const hours = [
    { day: "Montag", time: "10:00 - 18:00" },
    { day: "Dienstag", time: "10:00 - 18:00" },
    { day: "Mittwoch", time: "10:00 - 18:00" },
    { day: "Donnerstag", time: "10:00 - 19:00" },
    { day: "Freitag", time: "10:00 - 19:00" },
    { day: "Samstag", time: "09:00 - 17:00" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <section id="hours" className="py-20 sm:py-28 bg-accent-brown-light/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Öffnungszeiten
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Besuchen Sie uns zu unseren regulären Öffnungszeiten
          </p>
        </div>

        <div className="bg-white rounded-lg border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hours.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center pb-4 border-b border-border/50"
              >
                <span className="font-semibold text-foreground">
                  {item.day}
                </span>
                <span className="text-accent-brown font-semibold">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-accent-brown-light/20 rounded-lg border border-accent-brown-light">
            <p className="text-sm text-muted-foreground text-center">
              <Clock className="inline mr-2" size={16} />
              Terminvereinbarung empfohlen | Spontanbesuche je nach
              Verfügbarkeit möglich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Ich bin absolut begeistert von meiner neuen Frisur! Das Team ist unglaublich freundlich und professionell. Ich bin definitiv wieder da!",
      rating: 5,
    },
    {
      name: "Thomas K.",
      text: "Der beste Friseursalon in der Stadt! Präzision, Freundlichkeit und tolle Atmosphäre. Sehr empfehlenswert.",
      rating: 5,
    },
    {
      name: "Anna L.",
      text: "Meine Hochzeitsfrisur war einfach perfekt! Die Beratung vorher war ausführlich und die Umsetzung makellos.",
      rating: 5,
    },
    {
      name: "Michael B.",
      text: "Regelmäßig zum Schneiden hier. Immer zufrieden, schneller Service, fairer Preis. Mehr kann man nicht erwarten.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Kundenbewertungen
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Das sagen unsere zufriedenen Kunden über uns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-accent-brown-light/10 rounded-lg p-8 border border-accent-brown-light"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent-brown text-accent-brown"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => (
  <section id="location" className="py-20 sm:py-28 bg-accent-brown-light/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Standort & Anfahrt
        </h2>
        <p className="text-lg text-muted-foreground font-light">
          Besuchen Sie uns an unserem zentralen Standort
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg border border-border p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Kontaktinformationen
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin
                size={20}
                className="text-accent-brown mr-4 flex-shrink-0 mt-1"
              />
              <div>
                <p className="font-semibold text-foreground">Adresse</p>
                <p className="text-muted-foreground">
                  Beispielstraße 123, 12345 Musterstadt
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone
                size={20}
                className="text-accent-brown mr-4 flex-shrink-0 mt-1"
              />
              <div>
                <p className="font-semibold text-foreground">Telefon</p>
                <a
                  href="tel:+4932123456"
                  className="text-accent-brown hover:text-accent-brown-dark"
                >
                  +49 (0)321 12 34 56
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Mail
                size={20}
                className="text-accent-brown mr-4 flex-shrink-0 mt-1"
              />
              <div>
                <p className="font-semibold text-foreground">E-Mail</p>
                <a
                  href="mailto:info@friseursalon.de"
                  className="text-accent-brown hover:text-accent-brown-dark"
                >
                  info@friseursalon.de
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-semibold mb-3">
              ÖPNV-Anbindung
            </p>
            <p className="text-sm text-muted-foreground">
              U-Bahn Linie 5, Haltestelle "Zentrum" (2 min Fußweg)
            </p>
            <p className="text-sm text-muted-foreground mt-2">Parken</p>
            <p className="text-sm text-muted-foreground">
              Kostenlose Parkplätze direkt vor dem Salon
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4323853548765!2d13.387858!3d52.516222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3d5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sExample%20Location!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert(
      "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Hinterlassen Sie uns eine Nachricht oder fragen Sie einen Termin an
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Ihr Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-accent-brown-light/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-brown focus:border-transparent"
              placeholder="Max Mustermann"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              E-Mail-Adresse
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-accent-brown-light/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-brown focus:border-transparent"
              placeholder="max@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Nachricht
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3 bg-accent-brown-light/20 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-brown focus:border-transparent resize-none"
              placeholder="Ich möchte gerne einen Termin anfragen für..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent-brown hover:bg-accent-brown-dark text-white py-6 text-base font-semibold rounded-lg transition-colors"
          >
            Nachricht senden
          </Button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-foreground text-white py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Friseursalon</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ihr professioneller Partner für hochwertige Haarpflege und zeitloses
            Styling.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Dienstleistungen
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Preisliste
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                Über uns
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
            Kontakt
          </h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Beispielstraße 123</p>
            <p>12345 Musterstadt</p>
            <p className="mt-3">
              <a
                href="tel:+4932123456"
                className="hover:text-white transition-colors"
              >
                +49 (0)321 12 34 56
              </a>
            </p>
            <p>
              <a
                href="mailto:info@friseursalon.de"
                className="hover:text-white transition-colors"
              >
                info@friseursalon.de
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-4 sm:space-y-0">
          <p>&copy; 2024 Friseursalon. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <OffersSection />
      <NewsSection />
      <GalleryCustomersSection />
      <GallerySalonSection />
      <AboutSection />
      <HoursSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
