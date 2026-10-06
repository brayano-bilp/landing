import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  GraduationCap,
  Headphones,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import teamImage from "@/assets/brayano-team.jpg.asset.json";
import videoPoster from "@/assets/brayano-video-poster.jpg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Comparison, SectionHeading } from "@/components/landing/blocks";
import { ConversationVisual, DemoConversation } from "@/components/landing/chat";
import { trackEvent } from "@/lib/analytics";

const SITE_URL = (import.meta.env["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "");
const PAGE_TITLE = "Brayano IA | Agent commercial IA sur WhatsApp pour entreprises";
const PAGE_DESCRIPTION =
  "Brayano IA répond à vos prospects sur WhatsApp 24h/24, qualifie leurs besoins et les oriente vers la bonne équipe. Demandez une démonstration de 10 minutes.";
const DEMO_VIDEO_URL = "/videos/brayano%20(1).mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content:
          "Transformez vos conversations WhatsApp en prospects qualifiés avec un agent IA conçu pour votre activité.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Brayano IA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      ...(SITE_URL
        ? [
            { property: "og:url", content: SITE_URL },
            { property: "og:image", content: `${SITE_URL}${videoPoster.url}` },
            { name: "twitter:image", content: `${SITE_URL}${videoPoster.url}` },
          ]
        : []),
    ],
    links: SITE_URL ? [{ rel: "canonical", href: SITE_URL }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Brayano IA",
          description: PAGE_DESCRIPTION,
          email: "brayanodev@gmail.com",
          telephone: "+237683260520",
          address: { "@type": "PostalAddress", addressLocality: "Douala", addressCountry: "CM" },
          ...(SITE_URL ? { url: SITE_URL } : {}),
        }),
      },
    ],
  }),
  component: LandingPage,
});

/* ------------------------------------------------------------------ */
/* Conversion links — single source of truth for every CTA on the page */
/* ------------------------------------------------------------------ */

export const contactDetails = {
  email: "brayanodev@gmail.com",
  phoneDisplay: "+237 683 260 520",
  phoneLink: "+237683260520",
  whatsappNumber: "237683260520",
  location: "Douala, Cameroun",
} as const;

export const messages = {
  hero: "Bonjour, je souhaite découvrir Brayano IA.",
  demo: "Bonjour, je souhaite demander une démonstration de Brayano IA.",
  sector: "Bonjour, je souhaite savoir comment Brayano IA pourrait être adapté à mon entreprise.",
  pricing: "Bonjour, je souhaite recevoir un devis pour Brayano IA.",
} as const;

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------ Content ----------------------------- */

const navigation = [
  ["Solution", "solution"],
  ["Fonctionnalités", "fonctionnalites"],
  ["Secteurs", "secteurs"],
  ["Tarifs", "tarifs"],
  ["Mise en place", "fonctionnement"],
  ["FAQ", "faq"],
] as const;
const trustPoints = [
  [Clock3, "Réponse 24h/24", "Vos prospects n’attendent plus."],
  [ShieldCheck, "Équipe aux commandes", "Vous reprenez la main à tout moment."],
  [Users, "Mise en place accompagnée", "Nous configurons l’agent avec vous."],
  [BarChart3, "Données exploitables", "Des fiches prospects déjà structurées."],
] as const;
const conversationStages = [
  ["01", "Répond", "Aux questions fréquentes et aux demandes de vos prospects"],
  ["02", "Comprend", "Le besoin, l’intention et le contexte de la conversation"],
  [
    "03",
    "Qualifie",
    "Il collecte les informations nécessaires pour comprendre la valeur du prospect",
  ],
  ["04", "Oriente", "Vers le bon service ou l’équipe concernée"],
  [
    "05",
    "Prépare l’action",
    "Votre équipe récupère des prospects avec des informations déjà structurées",
  ],
] as const;
const heroConversation = [
  {
    side: "left",
    text: "Bonjour, je voudrais des informations sur vos formations.",
    time: "10:42",
  },
  { side: "right", text: "Bonjour 👋 Avec plaisir. Quel domaine vous intéresse ?", time: "10:42" },
  { side: "left", text: "La programmation.", time: "10:43" },
  { side: "right", text: "Êtes-vous débutant ou avez-vous déjà des bases ?", time: "10:43" },
  { side: "left", text: "Je suis débutant.", time: "10:44" },
  { side: "right", text: "Très bien ! Dans quelle ville êtes-vous situé ?", time: "10:44" },
  { side: "left", text: "À Douala.", time: "10:45" },
] as const;
const heroQualifiers = [
  "Besoin identifié",
  "Prospect qualifié",
  "Localisation",
  "Service identifié",
] as const;
const demoConversation = [
  { side: "left", text: "Bonsoir, je veux apprendre la programmation web.", time: "10:51" },
  {
    side: "right",
    text: "Très bien. Êtes-vous débutant ou avez-vous déjà des connaissances ?",
    time: "10:51",
  },
  { side: "left", text: "Je suis débutant.", time: "10:52" },
  { side: "right", text: "Parfait. Dans quelle ville êtes-vous situé ?", time: "10:52" },
] as const;
const demoFiche = [
  ["Domaine", "Programmation web"],
  ["Niveau", "Débutant"],
  ["Localisation", "Douala"],
  ["Statut", "Besoin identifié"],
] as const;
const features = [
  [
    Clock3,
    "Disponible 24/7",
    "Vos prospects obtiennent une réponse même en dehors des horaires de travail.",
  ],
  [Zap, "Réponse immédiate", "Réduisez le temps d’attente dès le premier message."],
  [Target, "Qualification intelligente", "Posez les bonnes questions, au bon moment."],
  [Users, "Collecte d’informations", "Centralisez les informations utiles sur vos prospects."],
  [MessageCircle, "Orientation intelligente", "Dirigez chaque demande vers le bon service."],
  [Sparkles, "Connaissance métier", "Appuyez-vous sur vos services, tarifs et conditions."],
  [
    Headphones,
    "Contrôle humain",
    "Votre équipe garde la main quand son intervention est nécessaire.",
  ],
  [BarChart3, "Suivi commercial", "Retrouvez des demandes qualifiées et mieux structurées."],
] as const;
const industries = [
  [
    GraduationCap,
    "Formation & éducation",
    "Présentez vos formations et identifiez le niveau du candidat.",
  ],
  [Building2, "Immobilier", "Qualifiez le type de bien, la zone et le budget recherché."],
  [ShieldCheck, "Assurance", "Comprenez le besoin et orientez vers le service approprié."],
  [
    Landmark,
    "Banque & fintech",
    "Répondez aux demandes courantes et guidez vers le bon interlocuteur.",
  ],
  [ShoppingBag, "E-commerce", "Accompagnez les prospects avant leur achat."],
  [Hotel, "Hôtellerie", "Répondez aux questions sur les chambres et les réservations."],
  [MessageCircle, "Télécoms", "Identifiez rapidement la demande et orientez le client."],
  [Headphones, "Services professionnels", "Transformez une demande générale en besoin précis."],
] as const;
const leadFields = [
  "Nom",
  "Besoin",
  "Service recherché",
  "Localisation",
  "Budget",
  "Projet",
  "Niveau d’intérêt",
  "Informations complémentaires",
] as const;
const setupSteps = [
  [
    "01",
    "Nous découvrons votre activité",
    "Nous comprenons vos produits, services, clients et processus.",
  ],
  [
    "02",
    "Nous configurons Brayano IA",
    "Nous adaptons l’agent à votre entreprise et à vos objectifs.",
  ],
  [
    "03",
    "Brayano IA se connecte à votre processus",
    "Vos prospects peuvent commencer à échanger avec votre agent sur WhatsApp.",
  ],
  ["04", "Brayano IA traite les conversations", "Il répond, comprend, qualifie et oriente."],
  [
    "05",
    "Votre équipe récupère les opportunités",
    "Vos collaborateurs prennent en charge les prospects au bon moment.",
  ],
  ["06", "Nous optimisons", "Nous améliorons progressivement le fonctionnement selon vos besoins."],
] as const;
const pricingOffers = [
  {
    name: "Essentiel",
    description: "Pour commencer à automatiser vos conversations WhatsApp.",
    price: "Sur devis",
    cadence: "Pour démarrer",
    icon: MessageCircle,
    featured: false,
    features: [
      "Agent WhatsApp personnalisé",
      "Réponses aux questions fréquentes",
      "Qualification initiale",
      "Accompagnement à la mise en place",
    ],
  },
  {
    name: "Croissance",
    description: "Pour structurer la qualification et le suivi de vos prospects.",
    price: "Sur devis",
    cadence: "Recommandée pour les équipes commerciales",
    icon: Zap,
    featured: true,
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Parcours adapté à votre activité",
      "Orientation vers la bonne équipe",
      "Suivi et optimisation de l’agent",
    ],
  },
  {
    name: "Sur mesure",
    description: "Pour les besoins spécifiques et les processus plus avancés.",
    price: "Sur devis",
    cadence: "Selon votre projet",
    icon: Building2,
    featured: false,
    features: [
      "Configuration selon vos processus",
      "Critères et règles personnalisés",
      "Accompagnement dédié",
      "Périmètre défini avec votre équipe",
    ],
  },
] as const;
const businessBenefits = [
  "Réponses plus rapides",
  "Moins de tâches répétitives",
  "Meilleure qualification",
  "Meilleure orientation",
  "Plus de disponibilité",
  "Plus de temps pour vos commerciaux",
  "Meilleure exploitation des prospects",
] as const;
const faqs = [
  [
    "Brayano IA fonctionne-t-il avec WhatsApp ?",
    "Oui. Brayano IA est conçu pour échanger directement avec vos prospects sur WhatsApp. L’intégration utilisée n’est toutefois pas l’API officielle WhatsApp Business et comporte un risque de restriction du compte. Consultez nos conditions d’utilisation avant de connecter un numéro.",
  ],
  [
    "Brayano IA peut-il être adapté à mon entreprise ?",
    "Oui. Nous configurons l’agent selon votre activité, vos offres, vos règles et votre processus commercial.",
  ],
  [
    "Peut-il qualifier les prospects ?",
    "Oui. Il pose des questions pertinentes, collecte les informations utiles et identifie le besoin avant l’orientation.",
  ],
  [
    "Peut-il orienter les prospects ?",
    "Oui. Selon vos règles, Brayano IA peut identifier le service ou le commercial approprié.",
  ],
  [
    "Est-ce un chatbot classique ?",
    "Non. Brayano IA est conçu comme un agent commercial qui comprend la conversation, qualifie le besoin et prépare la prochaine étape.",
  ],
  [
    "Dois-je configurer Brayano IA moi-même ?",
    "Non. Nous vous accompagnons pour configurer et mettre en place l’agent selon votre activité.",
  ],
  [
    "Combien coûte Brayano IA ?",
    "Chaque offre est établie sur devis : le tarif dépend de votre activité, du volume de conversations et du niveau de personnalisation. Demandez une démonstration de 10 minutes pour recevoir une proposition adaptée, sans engagement.",
  ],
  [
    "Mon équipe peut-elle reprendre une conversation ?",
    "Oui. Votre équipe garde le contrôle et peut intervenir lorsqu’une situation le nécessite.",
  ],
] as const;

/* ----------------------------- Components --------------------------- */

function DemoLink({
  children,
  source = "demo",
  className = "",
}: {
  children: ReactNode;
  source?: keyof typeof messages;
  className?: string;
}) {
  return (
    <Button asChild size="lg" className={`h-12 px-6 shadow-lg shadow-primary/20 ${className}`}>
      <a
        href={getWhatsAppUrl(messages[source])}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click", source)}
      >
        {children}
        <ArrowRight />
      </a>
    </Button>
  );
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2.5 font-semibold tracking-wide"
      aria-label="Brayano IA, accueil"
    >
      <span
        className={`grid place-items-center rounded-lg bg-primary text-primary-foreground ${footer ? "size-10" : "size-9"}`}
      >
        <Sparkles className="size-4" />
      </span>
      <span>
        BRAYANO <span className={footer ? "text-brand-light" : "text-primary"}>IA</span>
      </span>
    </a>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#contenu"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Aller au contenu
      </a>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex"
            aria-label="Navigation principale"
          >
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <DemoLink source="hero" className="h-10 px-5 text-sm">
              Demander une démo
            </DemoLink>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            id="menu-mobile"
            className="border-t border-border bg-background px-5 py-5 lg:hidden"
            aria-label="Navigation mobile"
          >
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <DemoLink source="hero" className="mt-5 w-full">
              Demander une démo
            </DemoLink>
          </nav>
        )}
      </header>

      <main id="top">
        <span id="contenu" />
        <section className="hero-surface relative border-b border-border/60 py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                <span className="size-1.5 rounded-full bg-whatsapp" /> Votre commercial IA sur
                WhatsApp
              </div>
              <h1 className="hero-title max-w-3xl">
                Transformez chaque conversation WhatsApp en{" "}
                <span className="text-primary">opportunité commerciale.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                Brayano IA répond à vos prospects 24h/24, comprend leurs demandes, pose les bonnes
                questions, qualifie leurs besoins et les oriente vers la bonne équipe.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <DemoLink source="hero">
                  <MessageCircle /> Demander une démo
                </DemoLink>
                <Button asChild size="lg" variant="outline" className="h-12 bg-background px-6">
                  <a href="#demo">
                    <Play /> Voir Brayano IA en action
                  </a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <CircleCheck className="size-4 text-whatsapp" /> Démonstration personnalisée • 10
                minutes • Sans engagement
              </p>
            </div>
            <ConversationVisual messages={heroConversation} qualifiers={heroQualifiers} />
          </div>
        </section>

        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {trustPoints.map(([Icon, title, body]) => (
              <div key={title} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space" id="solution">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="La solution"
              title="Votre WhatsApp reçoit des demandes. Brayano IA les transforme en opportunités."
              body="Chaque jour, vos prospects écrivent pour demander vos tarifs, vos services ou comment souscrire. Brayano leur répond comme un commercial disponible 24h/24."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {conversationStages.map(([n, title, body]) => (
                <article key={n} className="bg-background p-6">
                  <span className="text-xs font-semibold text-primary">{n}</span>
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-ink text-ink-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              dark
              eyebrow="Votre processus commercial"
              title="De la première question à la prochaine action."
              body="Brayano IA suit votre processus commercial, adapte la conversation à votre activité et prépare la suite pour votre équipe."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {conversationStages.map(([n, t, b], i) => (
                <div key={t} className="relative border-t border-ink-border pt-5">
                  <span className="text-xs text-ink-muted">{n}</span>
                  <div className="mt-10 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-brand-soft text-primary-foreground">
                      <Check className="size-4" />
                    </span>
                    {i < 4 && (
                      <ChevronRight className="absolute top-14 right-1 hidden size-4 text-ink-muted md:block" />
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="eyebrow">Un agent opérationnel</p>
              <h2 className="section-title mt-4">Plus qu’un chatbot.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                Brayano IA comprend le contexte de votre activité et suit votre processus de
                qualification.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <Comparison
                  title="Chatbot classique"
                  items={[
                    "Répond aux questions",
                    "Suit des scénarios simples",
                    "Attend une intervention",
                  ]}
                />
                <Comparison
                  featured
                  title="Brayano IA"
                  items={[
                    "Comprend la demande",
                    "Qualifie le prospect",
                    "Oriente au bon service",
                    "Prépare la prochaine action",
                  ]}
                />
              </div>
            </div>
            <figure className="media-frame">
              <img
                src={teamImage.url}
                alt="Équipe professionnelle collaborant autour d’un ordinateur"
                loading="lazy"
              />
              <figcaption>
                <span>Votre équipe garde le contrôle</span>
                <small>Brayano IA prépare chaque échange pour la bonne personne.</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-space bg-muted/45" id="demo">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Démonstration</p>
                <h2 className="section-title mt-4">Voyez Brayano IA en action.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Une conversation devient une fiche claire et directement exploitable par votre
                  équipe.
                </p>
                <div className="mt-8">
                  <DemoLink source="demo">Voir une démo personnalisée</DemoLink>
                </div>
              </div>
              <DemoConversation messages={demoConversation} fiche={demoFiche} />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow">Des données utiles</p>
              <h2 className="section-title mt-4">
                Transformez les demandes en informations commerciales.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Votre équipe retrouve les éléments importants et peut se concentrer sur la vente.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {leadFields.map((field) => (
                <div
                  key={field}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <Check className="size-4 text-primary" />
                  <span className="font-medium">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="eyebrow eyebrow-dark">Votre équipe reste au centre</p>
              <h2 className="section-title mt-4">L’IA automatise. Votre équipe décide.</h2>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                Brayano IA gère les échanges répétitifs et prépare la suite. Vos collaborateurs
                interviennent au bon moment.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-ink-border bg-ink-border sm:grid-cols-2">
              {(
                [
                  [
                    "Brayano IA gère",
                    [
                      "Questions répétitives",
                      "Qualification initiale",
                      "Collecte d’informations",
                      "Orientation",
                    ],
                  ],
                  [
                    "Votre équipe se concentre sur",
                    ["Vente", "Négociation", "Conseil", "Cas complexes"],
                  ],
                ] as const
              ).map(([title, items]) => (
                <div key={title} className="bg-ink p-6">
                  <h3 className="font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="size-4 shrink-0 text-whatsapp" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space" id="fonctionnalites">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Fonctionnalités"
              title="Répondez. Comprenez. Qualifiez. Orientez."
              body="Une couche d’intelligence qui transforme chaque échange en prochaine action claire."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(([Icon, title, body]) => (
                <article className="feature-card" key={title}>
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-muted/45" id="secteurs">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Cas d’usage"
              title="Un agent adapté à votre activité."
              body="Brayano IA peut être configuré pour les équipes qui gèrent un volume important de demandes."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(([Icon, title, body]) => (
                <article className="industry-card" key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <DemoLink source="sector">Parler de mon secteur</DemoLink>
            </div>
          </div>
        </section>

        <section className="section-space" id="tarifs">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              center
              eyebrow="Offres & tarifs"
              title="Une offre adaptée à votre volume."
              body="Le tarif dépend de votre activité, du volume de conversations et du niveau de personnalisation. Nous établissons un devis gratuit après une démonstration de 10 minutes."
            />
            <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
              {pricingOffers.map(
                ({ name, description, price, cadence, icon: Icon, featured, features: items }) => (
                  <article
                    key={name}
                    className={`relative flex h-full flex-col rounded-2xl border p-7 ${featured ? "border-primary bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/20" : "border-border bg-card shadow-sm"}`}
                  >
                    {featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Recommandé
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-11 place-items-center rounded-lg ${featured ? "bg-primary text-primary-foreground" : "bg-muted text-primary"}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-xs text-muted-foreground">{cadence}</p>
                      </div>
                    </div>
                    <p className="mt-6 min-h-12 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                    <div className="mt-5 border-b border-border pb-6">
                      <p className="text-3xl font-semibold tracking-tight">{price}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Devis gratuit, sans engagement
                      </p>
                    </div>
                    <ul className="mt-6 flex-1 space-y-3">
                      {items.map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <DemoLink
                      source="pricing"
                      className={`mt-8 w-full justify-center ${featured ? "" : "bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/70"}`}
                    >
                      Demander un devis
                    </DemoLink>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section-space bg-muted/45" id="fonctionnement">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Mise en place"
              title="De vos informations à votre commercial IA."
              body="Nous adaptons Brayano IA à votre activité, puis l’améliorons selon les besoins de votre entreprise."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.9fr]">
              <ol className="space-y-3">
                {setupSteps.map(([n, t, b]) => (
                  <li className="step-row" key={n}>
                    <span>{n}</span>
                    <div>
                      <h3>{t}</h3>
                      <p>{b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="video-placeholder">
                <video
                  autoPlay
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={videoPoster.url}
                  aria-label="Présentation vidéo de Brayano IA"
                >
                  <source src={DEMO_VIDEO_URL} type="video/mp4" />
                  Votre navigateur ne peut pas lire cette vidéo.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="eyebrow">Le résultat</p>
                <h2 className="section-title mt-4">
                  Moins de conversations perdues. Plus d’opportunités exploitées.
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Votre équipe peut alors se concentrer sur ce qui compte : vendre.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {businessBenefits.map((item) => (
                  <div key={item} className="flex min-h-20 items-center gap-3 bg-background p-5">
                    <Check className="size-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8 lg:pb-28">
          <div className="conversion-band mx-auto max-w-7xl">
            <div>
              <p className="text-sm font-semibold tracking-wider text-primary-foreground/70 uppercase">
                Une démo. Dix minutes.
              </p>
              <h2 className="section-title mt-4 max-w-3xl">
                Voyez Brayano IA dans votre entreprise.
              </h2>
              <p className="mt-5 max-w-2xl text-primary-foreground/75">
                Une démonstration personnalisée, adaptée à votre activité.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <DemoLink
                source="demo"
                className="bg-background text-foreground shadow-none hover:bg-background/90"
              >
                Demander ma démo de 10 minutes
              </DemoLink>
              <span className="text-sm text-primary-foreground/70">Sans engagement.</span>
            </div>
          </div>
        </section>

        <section className="section-space border-t border-border" id="faq">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title mt-4">Vos questions, simplement.</h2>
              <p className="mt-5 text-muted-foreground">
                Une autre question ?{" "}
                <a
                  href={getWhatsAppUrl(messages.hero)}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary underline underline-offset-4"
                  onClick={() => trackEvent("whatsapp_click", "hero")}
                >
                  Échangez avec notre équipe
                </a>
                .
              </p>
            </div>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map(([q, a], i) => (
                <AccordionItem value={`faq-${i}`} key={q}>
                  <AccordionTrigger className="py-6 text-left text-base hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 leading-7 text-muted-foreground">
                    {a}
                    {i === 0 && (
                      <>
                        {" "}
                        <a
                          href="/conditions-utilisation"
                          className="font-medium text-primary underline underline-offset-4"
                        >
                          Lire les conditions d’utilisation
                        </a>
                        .
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="border-t border-border bg-muted/45 py-20 text-center">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="section-title">Ne laissez plus vos prospects attendre.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Automatisez vos conversations WhatsApp avec Brayano IA.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <DemoLink source="demo">Demander une démo</DemoLink>
              <Button asChild size="lg" variant="outline" className="h-12 bg-background px-6">
                <a
                  href={getWhatsAppUrl(messages.hero)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("whatsapp_click", "hero")}
                >
                  <MessageCircle /> Parler sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <a
        href={getWhatsAppUrl(messages.hero)}
        target="_blank"
        rel="noreferrer"
        aria-label="Discuter avec Brayano IA sur WhatsApp"
        onClick={() => trackEvent("whatsapp_click", "floating")}
        className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>

      <footer className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="pointer-events-none absolute -top-28 right-0 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-12 border-b border-ink-border pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr]">
            <div>
              <Logo footer />
              <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
                Votre commercial IA sur WhatsApp. Répondez à vos prospects et transformez chaque
                conversation en opportunité.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Navigation</h2>
              <nav
                className="mt-5 grid gap-3 text-sm text-ink-muted"
                aria-label="Navigation de pied de page"
              >
                {navigation.map(([label, id]) => (
                  <a key={id} href={`#${id}`} className="w-fit hover:text-ink-foreground">
                    {label}
                  </a>
                ))}
                <a href="/conditions-utilisation" className="w-fit hover:text-ink-foreground">
                  Conditions d’utilisation
                </a>
              </nav>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Contact</h2>
              <address className="mt-5 grid gap-4 text-sm text-ink-muted not-italic">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 hover:text-ink-foreground"
                >
                  <Mail className="size-4 text-brand-light" />
                  {contactDetails.email}
                </a>
                <a
                  href={`tel:${contactDetails.phoneLink}`}
                  className="flex items-center gap-3 hover:text-ink-foreground"
                >
                  <Phone className="size-4 text-brand-light" />
                  {contactDetails.phoneDisplay}
                </a>
                <a
                  href="https://maps.google.com/?q=Douala%2C%20Cameroun"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-ink-foreground"
                >
                  <MapPin className="size-4 text-brand-light" />
                  {contactDetails.location}
                </a>
              </address>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Brayano IA. Tous droits réservés.</p>
            <a
              href={getWhatsAppUrl(messages.hero)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", "hero")}
              className="inline-flex items-center gap-2 hover:text-ink-foreground"
            >
              <MessageCircle className="size-4 text-whatsapp" /> Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
