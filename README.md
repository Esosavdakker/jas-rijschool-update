# JAS-Rijschool Website

Een moderne, snelle website voor JAS-Rijschool gebouwd met React, TypeScript en Tailwind CSS.

## 🚀 Performance Optimalisaties

- **Font Loading**: Async font loading met `display=swap` voor snellere First Contentful Paint
- **Image Preloading**: Hero afbeeldingen worden voorgeladen voor vloeiende slideshows
- **Lazy Loading**: Afbeeldingen buiten viewport worden pas geladen wanneer nodig
- **DNS Prefetch**: Externe resources worden vooraf opgelost

## 📁 Projectstructuur

```
src/
├── assets/           # Afbeeldingen en media
├── components/       # React componenten
│   ├── ui/          # Herbruikbare UI componenten (shadcn/ui)
│   └── *.tsx        # Feature componenten (Hero, Contact, etc.)
├── config/          # Configuratie bestanden
│   ├── site.ts      # Website configuratie (contact, social)
│   ├── content.ts   # Tekst content
│   └── packages.ts  # Rijles pakketten
├── hooks/           # Custom React hooks
├── integrations/    # Externe integraties (Supabase)
├── lib/             # Utility functies
│   ├── utils.ts     # Algemene utilities
│   └── performance.ts # Performance helpers
├── pages/           # Route pagina's
├── App.tsx          # Root component met routing
├── main.tsx         # Entry point
└── index.css        # Design system tokens
```

## 🎨 Design System

Het design system is gedefinieerd in:
- `src/index.css` - CSS variabelen en Tailwind utilities
- `tailwind.config.ts` - Tailwind configuratie

### Kleuren (HSL formaat)
- **Primary**: Donkerblauw (merk kleur)
- **Accent**: Oranje (CTA's en highlights)
- **Secondary**: Lichtblauw (ondersteunend)

## 🔒 Beveiliging & Privacy

- GDPR-compliant contactformulier met toestemmingsregistratie
- Row Level Security (RLS) op database niveau
- Admin role-based access control

## 📱 SEO

- Gestructureerde data (JSON-LD) voor DrivingSchool en FAQ
- Open Graph en Twitter meta tags
- Semantic HTML met juiste heading hiërarchie
- Responsive design met mobile-first approach

## 🛠️ Development

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
