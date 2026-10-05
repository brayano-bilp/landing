import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, ExternalLink, FileText, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/conditions-utilisation")({
  head: () => ({
    meta: [
      { title: "Conditions d’utilisation | Brayano IA" },
      { name: "description", content: "Conditions d’utilisation des services Brayano IA et informations importantes sur leur intégration WhatsApp." },
    ],
  }),
  component: ConditionsPage,
});

const sections = [
  {
    id: "objet",
    number: "01",
    title: "Objet et acceptation",
    paragraphs: [
      "Les présentes conditions encadrent l’accès aux services proposés sous le nom Brayano IA, notamment la configuration et l’exploitation d’un agent conversationnel commercial relié à WhatsApp.",
      "La souscription d’une offre, la signature d’un devis ou l’activation du service vaut prise de connaissance et acceptation de ces conditions. Les éléments spécifiques à chaque client — périmètre, prix, calendrier et éventuelles limites — sont précisés dans le devis ou le contrat correspondant.",
    ],
  },
  {
    id: "service",
    number: "02",
    title: "Description du service",
    paragraphs: [
      "Brayano IA aide l’entreprise à traiter des conversations, fournir des réponses à partir des informations communiquées, qualifier des demandes et les orienter vers son équipe. Le niveau de personnalisation dépend de l’offre souscrite et des informations fournies.",
      "Brayano IA ne garantit ni un volume de prospects, ni un chiffre d’affaires, ni un taux de conversion. L’entreprise reste responsable des décisions commerciales et des réponses nécessitant une validation humaine.",
    ],
  },
  {
    id: "whatsapp",
    number: "03",
    title: "Connexion WhatsApp : risque important de restriction ou de blocage",
    paragraphs: [
      "Le système d’intégration WhatsApp actuellement utilisé par Brayano IA ne repose pas sur l’API officielle WhatsApp Business. Cette méthode n’est pas une intégration officiellement approuvée ou garantie par WhatsApp.",
      "L’utilisation d’un moyen d’automatisation ou d’accès non autorisé peut être contraire aux conditions et politiques de WhatsApp. WhatsApp peut limiter, suspendre ou désactiver un compte en cas d’infraction présumée ou détectée. Le compte associé au numéro utilisé avec Brayano IA peut donc être restreint ou bloqué, temporairement ou définitivement, et l’accès aux conversations peut être interrompu.",
      "Ce risque existe même si le client utilise le service de bonne foi. Brayano IA ne peut garantir qu’un compte restera actif, ni décider de sa réactivation. Toute décision de restriction relève de WhatsApp/Meta; Brayano IA ne peut garantir la récupération du compte, du numéro ou des conversations.",
      "Avant l’activation, le client doit évaluer ce risque pour son activité et éviter d’utiliser un numéro dont la perte d’accès aurait des conséquences inacceptables. Les conditions et politiques de WhatsApp peuvent évoluer; le client doit les consulter régulièrement.",
    ],
  },
  {
    id: "obligations-client",
    number: "04",
    title: "Obligations de l’entreprise cliente",
    paragraphs: [
      "Le client doit être autorisé à utiliser le numéro et le compte WhatsApp connectés, protéger ses identifiants et appareils, et fournir des informations exactes pour configurer son agent.",
      "Le client est responsable de ses messages, offres, produits et instructions données à Brayano IA. Il s’engage à respecter les lois applicables, les droits des personnes et les règles de WhatsApp, notamment en matière de consentement, de communications non sollicitées, de demandes de désinscription et de contenus interdits.",
      "Le client doit examiner les réponses de son agent, prévoir une intervention humaine lorsque nécessaire et signaler rapidement tout usage non autorisé, incident ou comportement incorrect.",
    ],
  },
  {
    id: "donnees",
    number: "05",
    title: "Données et confidentialité",
    paragraphs: [
      "Les conversations peuvent contenir des données personnelles communiquées par les prospects. Le client doit informer les personnes concernées et obtenir les autorisations nécessaires avant toute collecte ou utilisation de leurs données.",
      "Avant la mise en service, le client et Brayano IA doivent préciser dans leur devis ou accord les données traitées, les accès nécessaires, les durées de conservation et les mesures de sécurité applicables. Le client ne doit pas transmettre de données sensibles ou de secrets d’authentification dans les conversations.",
      "Le client reste responsable de l’usage qu’il fait des informations recueillies et doit répondre aux demandes des personnes concernées conformément à la réglementation applicable.",
    ],
  },
  {
    id: "tarifs",
    number: "06",
    title: "Offres, tarifs et paiement",
    paragraphs: [
      "Les tarifs, modalités de paiement, période d’engagement et éventuels frais sont ceux indiqués dans le devis accepté par le client. Aucune offre présentée à titre indicatif sur le site ne remplace un devis ou un accord écrit.",
      "Toute évolution du périmètre demandé par le client peut nécessiter une nouvelle estimation et un accord avant sa réalisation.",
    ],
  },
  {
    id: "disponibilite",
    number: "07",
    title: "Disponibilité et services tiers",
    paragraphs: [
      "Le fonctionnement de Brayano IA dépend notamment de WhatsApp, des réseaux de télécommunication, des appareils et des services techniques tiers. Des interruptions, changements de compatibilité ou indisponibilités peuvent survenir.",
      "Brayano IA ne contrôle pas les décisions, mises à jour ou interruptions de WhatsApp/Meta. Aucun niveau de disponibilité n’est garanti sauf engagement écrit distinct dans le contrat du client.",
    ],
  },
  {
    id: "suspension",
    number: "08",
    title: "Suspension et fin du service",
    paragraphs: [
      "Le client peut demander la fin du service selon les modalités prévues dans son devis ou contrat. Les sommes dues jusqu’à la date de fin restent exigibles conformément à cet accord.",
      "Brayano IA peut suspendre l’accès au service en cas de risque de sécurité, d’usage illicite, de violation de ces conditions ou de demande d’une autorité compétente. Dans la mesure permise, le client sera informé et pourra remédier au problème avant la reprise.",
    ],
  },
  {
    id: "responsabilite",
    number: "09",
    title: "Responsabilité",
    paragraphs: [
      "Le client demeure responsable de son compte WhatsApp, de ses choix d’utilisation, du contenu transmis à l’agent et de la conformité de ses communications. Il est invité à conserver ses propres sauvegardes des informations importantes.",
      "Brayano IA ne peut être tenu responsable d’une restriction décidée par WhatsApp/Meta, d’une panne d’un service tiers ou d’un résultat commercial non obtenu. Cette disposition ne limite pas les responsabilités qui ne peuvent être écartées en vertu de la loi applicable.",
    ],
  },
  {
    id: "modifications",
    number: "10",
    title: "Modifications et contact",
    paragraphs: [
      "Ces conditions peuvent être mises à jour pour refléter l’évolution du service ou des règles applicables. La version publiée sur cette page indique la date de sa dernière mise à jour. Les modifications importantes seront communiquées aux clients concernés lorsque cela est nécessaire.",
      "Pour toute question concernant ces conditions, écrivez à brayanodev@gmail.com ou appelez le +237 683 260 520.",
    ],
  },
] as const;

function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="/" className="font-semibold tracking-wide">BRAYANO <span className="text-primary">IA</span></a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4" /> Retour à l’accueil</a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"><FileText className="size-4" /> Informations contractuelles</div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Conditions d’utilisation</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">Les règles applicables à l’utilisation de Brayano IA et les responsabilités de chaque partie.</p>
          <p className="mt-4 text-sm text-muted-foreground">Dernière mise à jour : 5 octobre 2026</p>
        </div>

        <aside className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950 shadow-sm sm:p-6" aria-labelledby="whatsapp-risk-title">
          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-amber-100"><ShieldAlert className="size-5" /></span>
            <div>
              <h2 id="whatsapp-risk-title" className="text-lg font-semibold">À lire avant de connecter un compte WhatsApp</h2>
              <p className="mt-2 text-sm leading-6">Brayano IA n’utilise pas l’API officielle WhatsApp Business. Cette intégration comporte un risque réel de restriction ou de blocage du compte et du numéro associés. WhatsApp peut suspendre ou désactiver un compte; Brayano IA ne peut ni empêcher cette décision ni garantir sa réactivation.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <a className="inline-flex items-center gap-1 underline underline-offset-4" href="https://www.whatsapp.com/legal/terms-of-service/?lang=fr" target="_blank" rel="noreferrer">Conditions WhatsApp <ExternalLink className="size-3.5" /></a>
                <a className="inline-flex items-center gap-1 underline underline-offset-4" href="https://business.whatsapp.com/policy/preview?lang=fr_FR" target="_blank" rel="noreferrer">Politique WhatsApp Business <ExternalLink className="size-3.5" /></a>
              </div>
            </div>
          </div>
        </aside>

        <div className="mt-12 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <nav className="h-fit rounded-xl border border-border bg-muted/35 p-5 lg:sticky lg:top-8" aria-label="Sommaire des conditions">
            <p className="text-sm font-semibold">Dans cette page</p>
            <ol className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="transition-colors hover:text-foreground">{section.number}. {section.title}</a></li>)}
            </ol>
          </nav>

          <div className="space-y-5">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={`scroll-mt-8 rounded-xl border p-6 sm:p-8 ${section.id === "whatsapp" ? "border-amber-300 bg-amber-50/60" : "border-border bg-card"}`}>
                <div className="flex items-start gap-4">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-lg text-sm font-semibold ${section.id === "whatsapp" ? "bg-amber-100 text-amber-900" : "bg-primary/5 text-primary"}`}>{section.number}</span>
                  <div>
                    <h2 className="text-xl font-semibold leading-snug">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    {section.id === "whatsapp" && <div className="mt-5 flex gap-3 rounded-lg border border-amber-300/70 bg-white/70 p-4 text-sm leading-6 text-amber-950"><AlertTriangle className="mt-0.5 size-4 shrink-0" /><p>Si un blocage aurait un impact important sur votre activité, n’activez pas Brayano IA sur votre numéro principal avant d’avoir évalué ce risque.</p></div>}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs leading-5 text-muted-foreground">Ces conditions décrivent le fonctionnement général du service. Les accords signés avec chaque client peuvent préciser le périmètre, les modalités commerciales et le traitement des données.</p>
      </main>

      <footer className="border-t border-border bg-muted/35">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Brayano IA</span>
          <a href="mailto:brayanodev@gmail.com" className="transition-colors hover:text-foreground">brayanodev@gmail.com</a>
          <a href="/" className="transition-colors hover:text-foreground">Retour à l’accueil</a>
        </div>
      </footer>
    </div>
  );
}
