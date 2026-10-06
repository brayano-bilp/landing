# Brayano IA — landing page

Landing page marketing (en français) de **Brayano IA**, un agent commercial IA sur WhatsApp pour les entreprises. L’objectif est de conduire les visiteurs vers une demande de démonstration via WhatsApp.

Projet synchronisé avec [Lovable](https://lovable.dev/projects/e7bdc568-be55-4baf-bd9f-106506616c56) : ne réécrivez pas l’historique git déjà publié.

## Stack

TanStack Start / Router, React 19, Vite, Tailwind CSS 4, composants shadcn/ui (Radix), Vitest.

## Développement

```sh
npm i
npm run dev      # serveur de développement
npm run lint     # ESLint + Prettier
npm test         # tests Vitest
npm run build    # build de production
```

## Structure

- `src/routes/index.tsx` — la page : contenu, liens de conversion WhatsApp (`contactDetails`, `messages`, `getWhatsAppUrl`) et sections.
- `src/components/landing/` — éléments visuels réutilisables (maquettes de chat, titres de section).
- `src/lib/analytics.ts` — événements de conversion (`brayano:conversion`) et pont vers l’analytics.
- `src/routes/conditions-utilisation.tsx` — conditions d’utilisation.

## Contenu à renseigner

- **Numéro WhatsApp / e-mail** : `contactDetails` dans `src/routes/index.tsx`.
- **Tarifs** : les offres sont « Sur devis » ; modifiez `pricingOffers` quand les prix sont arrêtés.
- **URL du site** : définissez `VITE_SITE_URL` (ex. `https://brayano.example`) pour activer les balises `canonical`, `og:image` et `twitter:image` absolues.

## Analytics

Chaque clic WhatsApp émet l’événement `brayano:conversion` (`name`, `source`). `bridgeConversionEvents()` le relaie automatiquement vers Google Tag Manager / GA4 (`dataLayer`, `gtag`), Plausible ou Meta Pixel dès que le script correspondant est présent sur la page — il suffit d’ajouter le script de l’outil choisi.
