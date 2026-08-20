export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | ".NET & Angular" | "Mobile" | "IA & Web" | "UI/UX Design";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  badgeColor?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  mention?: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; icon?: string; highlighted?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Hadhemi Rahmi",
    title: "Développeuse Full-Stack .NET / Angular & Créatrice d'Expériences Digitales",
    shortTitle: "Développeuse Full-Stack & UI Designer",
    status: "Disponible pour nouvelles opportunités",
    location: "Sfax, Tunisie",
    address: "Route de l'aéroport, km 8, cité El Khadhra, Sfax",
    phone: "+216 44 338 426",
    email: "hadhemi93742594@gmail.com",
    linkedin: "https://www.linkedin.com/in/hadhemi-rahmi-9077962b8/?locale=fr",
    github: "https://github.com/hadhemi-rahmi",
    bio: "Étudiante en licence de technologie de l'informatique à l'ISET Sfax et développeuse Full-Stack passionnée par l'ingénierie logicielle robuste et le design moderne. Forte d'une expérience concrète en développement web (React, Node.js, ASP.NET, Angular, API REST) et mobile (React Native, Flutter), je conçois des solutions performantes, évolutives et centrées sur l'utilisateur.",
    summary: "Spécialisée en écosystèmes .NET, Angular, React & Mobile avec une sensibilité aiguë pour l'UX/UI et l'intégration de solutions IA avancées.",
    stats: [
      { label: "Années d'expérience & projets", value: "2+" },
      { label: "Technologies maîtrisées", value: "15+" },
      { label: "Projets et applications livrés", value: "12+" },
      { label: "Engagement qualité & rigueur", value: "100%" },
    ],
  },

  marqueeItems: [
    { text: "C# / ASP.NET Core", color: "from-blue-400 to-cyan-400" },
    { text: "Angular 17+", color: "from-red-400 to-pink-500" },
    { text: "React.js & Next.js", color: "from-cyan-400 to-blue-500" },
    { text: "React Native & Flutter", color: "from-emerald-400 to-teal-500" },
    { text: "Node.js & Express.js", color: "from-green-400 to-emerald-500" },
    { text: "PostgreSQL & MongoDB", color: "from-purple-400 to-indigo-500" },
    { text: "Intégration d'API IA", color: "from-pink-400 to-rose-500" },
    { text: "UI/UX Figma & Adobe", color: "from-amber-400 to-orange-500" },
    { text: "TypeScript & Clean Code", color: "from-blue-400 to-indigo-400" },
    { text: "Architecture REST & Microservices", color: "from-teal-400 to-cyan-400" },
  ],

  philosophyMarquee: [
    "🚀 Conception d'architectures logicielles fiables et sécurisées",
    "✨ Interfaces utilisateur immersives et soignées au pixel près",
    "⚡ Optimisation des performances front-end & back-end",
    "🌿 Solutions numériques écoresponsables et durables",
    "🤖 Connexion d'applications intelligentes propulsées par l'IA",
    "💡 Démarche agile, prototypage itératif et amélioration continue",
  ],

  skillsCategories: [
    {
      name: "Backend & Architectures",
      iconName: "Server",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C# / ASP.NET Core", level: 90, highlighted: true },
        { name: "Node.js & Express.js", level: 88, highlighted: true },
        { name: "API REST & WebSockets", level: 92, highlighted: true },
        { name: "Python (FastAPI, Flask, Django)", level: 82 },
        { name: "PHP / Architecture MVC", level: 85 },
        { name: "Java & C++", level: 78 },
      ],
    },
    {
      name: "Frontend & Web Moderne",
      iconName: "Layout",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Angular & RxJS", level: 88, highlighted: true },
        { name: "React.js & Next.js", level: 92, highlighted: true },
        { name: "TypeScript & JavaScript (ES6+)", level: 94, highlighted: true },
        { name: "Redux & State Management", level: 86 },
        { name: "Tailwind CSS & SCSS", level: 95 },
        { name: "HTML5 / CSS3 / Animations", level: 96 },
      ],
    },
    {
      name: "Mobile & Cross-Platform",
      iconName: "Smartphone",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "React Native", level: 90, highlighted: true },
        { name: "Flutter & Dart", level: 80, highlighted: true },
        { name: "Intégration Mobile REST", level: 92 },
        { name: "Optimisation UI/UX Mobile", level: 88 },
      ],
    },
    {
      name: "Bases de Données & Data",
      iconName: "Database",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "PostgreSQL & SQL", level: 90, highlighted: true },
        { name: "MongoDB & NoSQL", level: 88, highlighted: true },
        { name: "MySQL", level: 88 },
        { name: "Oracle Database", level: 80 },
      ],
    },
    {
      name: "Design UI/UX & Outils",
      iconName: "Palette",
      color: "from-rose-500 to-red-500",
      skills: [
        { name: "Figma (Prototypage & UI Kit)", level: 92, highlighted: true },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Adobe Photoshop", level: 84 },
        { name: "Git / GitHub / CI", level: 90 },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "exp-1",
      role: "Développeuse Full-Stack",
      company: "Web Graphique",
      location: "Sfax, Tunisie",
      period: "2025 – 2026",
      type: "Stage & Développement d'application",
      description:
        "Conception de bout en bout et développement d'une application mobile innovante de sensibilisation environnementale offrant des conseils écoresponsables et un suivi d'impact carbone.",
      achievements: [
        "Application d'une démarche de conception complète : analyse des besoins, cahier des charges, prototypage interactif sur Figma et tests itératifs.",
        "Architecture et développement front-end mobile avec React Native et React avec gestion d'état centralisée via Redux Toolkit.",
        "Création d'une API backend robuste sous Express.js connectée à une base de données MongoDB sécurisée.",
        "Optimisation des performances de rendu et intégration de notifications d'habitudes écologiques.",
      ],
      technologies: ["React Native", "React", "Express.js", "Redux", "MongoDB", "Node.js", "Figma", "REST API"],
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "exp-2",
      role: "Développeuse Web / IA",
      company: "Visse Tunisie",
      location: "Tunisie",
      period: "2024 – 2025",
      type: "Entreprise de développement technologique",
      description:
        "Conception de prompts IA structurés et développement d'une application web connectée à des API REST d'intelligence artificielle avec banc d'essai et monitoring des réponses générées.",
      achievements: [
        "Conception et affinage de prompts d'ingénierie avancés pour des modèles de langage de pointe.",
        "Développement d'une interface web réactive connectée à une API REST d'intelligence artificielle avec streaming de réponses en direct.",
        "Mise en place de jeux de tests automatisés et optimisation de la pertinence et des temps de latence des requêtes IA.",
        "Conception de bases de données relationnelles SQL et intégration avec backend PHP moderne et Bootstrap.",
      ],
      technologies: ["PHP", "SQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "REST API", "AI Prompting"],
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
  ] as Experience[],

  education: [
    {
      id: "edu-1",
      degree: "Licence en Technologie de l'Informatique",
      institution: "ISET Sfax (Institut Supérieur des Études Technologiques)",
      period: "2024 – 2026",
      location: "Sfax, Tunisie",
      description:
        "Formation approfondie en génie logiciel, architectures orientées services (.NET / Java / Node), modélisation SGBD avancée (SQL, PostgreSQL, Oracle), développement web & mobile et sécurité informatique.",
    },
    {
      id: "edu-2",
      degree: "Baccalauréat Informatique",
      institution: "Lycée Hedi Chaker, Sfax",
      period: "2022 – 2023",
      location: "Sfax, Tunisie",
      mention: "Mention Assez Bien",
      description:
        "Spécialisation en algorithmique fondamentale, programmation procédurale & orientée objet, bases de données relationnelles et mathématiques appliquées.",
    },
  ] as Education[],

  clubs: [
    {
      name: "Club Robotique — ISET Sfax",
      role: "Membre active & Développeuse",
      description: "Participation à la programmation de modules embarqués, capteurs IoT et algorithmes de navigation pour robots autonomes lors de compétitions nationales.",
      iconName: "Bot",
    },
    {
      name: "Club CPC (Compétitions de Programmation) — ISET Sfax",
      role: "Membre compétitrice",
      description: "Résolution intensive de problèmes algorithmiques complexes, optimisation de structures de données, sessions de speed coding et entraînements aux concours de programmation compétitive.",
      iconName: "Code2",
    },
  ],

  projects: [
    {
      id: "ecotrack",
      title: "EcoTrack Mobile & Cloud",
      subtitle: "Application mobile de sensibilisation écoresponsable & calculateur d'impact",
      category: "Mobile",
      description: "Application mobile complète développée avec React Native, Express.js et MongoDB pour encourager les gestes durables, suivre l'empreinte carbone et relever des défis environnementaux.",
      longDescription: "EcoTrack est une solution numérique conçue pour mesurer et réduire l'empreinte écologique quotidienne des utilisateurs. L'application intègre un tableau de bord analytique en temps réel, un moteur de calcul d'émissions de CO2 personnalisé selon les transports et la consommation énergétique, ainsi qu'un fil de conseils durables validés par la communauté.",
      image: "/projects/ecotrack.jpg",
      tags: ["React Native", "Redux Toolkit", "Express.js", "MongoDB", "Node.js", "UI/UX Design"],
      features: [
        "Calculateur interactif d'émissions carbone quotidiennes et hebdomadaires",
        "Système de défis écoresponsables avec badges de gamification",
        "Architecture backend REST sécurisée avec authentification JWT",
        "Mode hors ligne avec synchronisation automatique des données",
      ],
      metrics: [
        { label: "Satisfaction utilisateur", value: "98%" },
        { label: "Temps de réponse API", value: "< 120ms" },
        { label: "Tests unitaires & UI", value: "95% coverage" },
      ],
      liveUrl: "https://github.com/hadhemi-rahmi",
      githubUrl: "https://github.com/hadhemi-rahmi",
      featured: true,
    },
    {
      id: "ai-prompt-studio",
      title: "Aetheria AI Studio",
      subtitle: "Plateforme web d'ingénierie de prompts & playground d'API IA",
      category: "IA & Web",
      description: "Application web connectée à des API d'intelligence artificielle avec banc de test de requêtes, éditeur de prompts structurés et analyse de métriques de précision des réponses.",
      longDescription: "Aetheria AI Studio permet aux développeurs et créateurs de contenu de prototyper, comparer et optimiser des prompts d'intelligence artificielle générative. L'application propose des curseurs de réglage (créativité, précision, concision), un export de requêtes en code prêt à l'emploi (Python, PHP, cURL, JS) et un historique complet des inférences.",
      image: "/projects/ai_studio.jpg",
      tags: ["PHP", "JavaScript ES6+", "REST API", "SQL", "Bootstrap 5", "Prompt Engineering"],
      features: [
        "Éditeur de prompts avec interpolation dynamique de variables",
        "Console de test d'API REST avec visualisation JSON en temps réel",
        "Historique des requêtes et comparateur de réponses côte à côte",
        "Système d'export de code multilangage instantané",
      ],
      metrics: [
        { label: "Précision des réponses", value: "+40%" },
        { label: "Optimisation de latence", value: "2.1x plus rapide" },
      ],
      liveUrl: "https://github.com/hadhemi-rahmi",
      githubUrl: "https://github.com/hadhemi-rahmi",
      featured: true,
    },
    {
      id: "dotnet-quantum-erp",
      title: "Quantum Enterprise ERP & Monitoring",
      subtitle: "Plateforme de gestion d'entreprise & monitoring microservices .NET / Angular",
      category: ".NET & Angular",
      description: "Système de supervision et de gestion des flux d'entreprise bâti avec ASP.NET Core 8 Web API, Angular 17, PostgreSQL et graphiques de télémétrie en temps réel.",
      longDescription: "Quantum Enterprise est une plateforme d'architecture d'entreprise démontrant la puissance de l'écosystème .NET associé à Angular. Elle comprend un tableau de bord de supervision de microservices, la gestion des rôles et permissions RBAC, une passerelle API centralisée et une modélisation relationnelle haute performance sur PostgreSQL.",
      image: "/projects/dotnet_erp.jpg",
      tags: ["C# / .NET 8", "Angular 17", "PostgreSQL", "Entity Framework", "RxJS", "Docker"],
      features: [
        "Architecture modulaire Clean Architecture & Repository Pattern",
        "Tableau de bord Angular réactif avec graphiques de télémétrie en direct",
        "Gestion fine des accès utilisateurs (JWT, Refresh Tokens & Claims)",
        "Audit trail et journalisation complète des transactions",
      ],
      metrics: [
        { label: "Disponibilité cible", value: "99.98%" },
        { label: "Débit de requêtes", value: "14.5k req/s" },
      ],
      liveUrl: "https://github.com/hadhemi-rahmi",
      githubUrl: "https://github.com/hadhemi-rahmi",
      featured: true,
    },
    {
      id: "educode-platform",
      title: "EduCode Competitive Arena",
      subtitle: "Plateforme d'entraînement aux compétitions de programmation",
      category: "Full-Stack",
      description: "Environnement d'évaluation d'algorithmes inspiré des concours CPC, avec compilation de code en bac à sable, classement en temps réel et tests automatisés.",
      longDescription: "Projet né de la passion pour les compétitions de programmation à l'ISET Sfax, EduCode permet aux étudiants de soumettre du code en C++, Python ou Java, de l'exécuter contre des cas de test cachés et de suivre leur classement sur un leaderboard dynamique.",
      image: "/projects/ai_studio.jpg",
      tags: ["React.js", "Node.js", "Docker Sandbox", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Exécuteur de code sécurisé multi-langages (C++, Java, Python)",
        "Leaderboard en direct avec temps de résolution et pénalités",
        "Générateur de cas de tests aléatoires",
      ],
      metrics: [
        { label: "Temps d'exécution test", value: "< 0.4s" },
      ],
      liveUrl: "https://github.com/hadhemi-rahmi",
      githubUrl: "https://github.com/hadhemi-rahmi",
      featured: false,
    },
    {
      id: "figma-design-system",
      title: "NeoPulse UI Kit & Design System",
      subtitle: "Système de composants UI/UX complet pour applications web & mobiles",
      category: "UI/UX Design",
      description: "Bibliothèque de composants Figma haute fidélité comprenant tokens de design, typographies, dark & light modes, et composants interactifs pour applications React & Angular.",
      longDescription: "Conception complète d'un design system moderne pour harmoniser l'expérience utilisateur à travers les plateformes web et mobiles. Comprend plus de 100 composants modulaires, grilles responsives, palettes de couleurs accessibles WCAG AAA et micro-interactions documentées.",
      image: "/projects/dotnet_erp.jpg",
      tags: ["Figma", "Adobe Illustrator", "Design System", "UI/UX", "Prototypage"],
      features: [
        "Plus de 100 composants atomiques et molécules interactifs",
        "Thème sombre et lumineux avec tokens CSS exportables",
        "Prototypes haute fidélité avec micro-animations de transition",
      ],
      metrics: [
        { label: "Gain de temps dev", value: "3x plus rapide" },
      ],
      liveUrl: "https://github.com/hadhemi-rahmi",
      githubUrl: "https://github.com/hadhemi-rahmi",
      featured: false,
    },
  ] as Project[],

  codeSnippets: [
    {
      language: "C# / ASP.NET",
      filename: "UserController.cs",
      code: `[ApiController]
[Route("api/v1/[controller]")]
public class TalentController : ControllerBase
{
    private readonly ITalentService _talentService;

    public TalentController(ITalentService talentService) 
        => _talentService = talentService;

    [HttpGet("hadhemi-rahmi")]
    public async Task<IActionResult> GetProfile()
    {
        var developer = await _talentService.GetDeveloperAsync("Hadhemi");
        return Ok(new {
            Role = "Full-Stack .NET & Angular Developer",
            Location = "Sfax, Tunisia",
            Skills = new[] { "C#", ".NET", "Angular", "React", "Mobile" },
            Status = "Available For High-Impact Projects",
            ReadyToCollaborate = true
        });
    }
}`,
    },
    {
      language: "Angular / TypeScript",
      filename: "developer.component.ts",
      code: `@Component({
  selector: 'app-developer-showcase',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: \`
    <div class="glass-card p-6 glow-cyan">
      <h2>{{ dev.name }} • {{ dev.specialty }}</h2>
      <p class="text-slate-300">Robust .NET Backend & Modern Angular Frontend</p>
      <button (click)="hireDeveloper()" class="btn-gradient">
        Collaborer ensemble 🚀
      </button>
    </div>
  \`
})
export class DeveloperShowcaseComponent {
  dev = {
    name: 'Hadhemi Rahmi',
    specialty: 'Full-Stack .NET / Angular & React Native'
  };
}`,
    },
    {
      language: "React Native / Redux",
      filename: "useEcoImpact.ts",
      code: `export const useEcoImpact = (userId: string) => {
  const dispatch = useAppDispatch();
  const { footprint, goals, badges } = useAppSelector(state => state.eco);

  const logEcoAction = useCallback(async (action: EcoAction) => {
    const impact = calculateCO2Reduction(action);
    await dispatch(recordImpactAsync({ userId, impact }));
    dispatch(triggerHapticFeedback());
  }, [dispatch, userId]);

  return { footprint, logEcoAction, badges };
};`,
    },
  ],

  faqItems: [
    {
      question: "Quelles sont les technologies principales que vous utilisez ?",
      answer:
        "Mon cœur d'expertise s'articule autour de l'écosystème .NET (C#, ASP.NET Core) et d'Angular, complété par une solide maîtrise de React.js, Next.js, Node.js/Express, et du développement mobile avec React Native et Flutter. Côté bases de données, j'interviens aussi bien sur PostgreSQL/SQL que sur MongoDB.",
    },
    {
      question: "Êtes-vous disponible pour des opportunités de stage ou d'emploi ?",
      answer:
        "Oui, absolument ! Actuellement étudiante en Licence de Technologie de l'Informatique à l'ISET Sfax, je suis ouverte aux opportunités de stage, contrats professionnels et collaborations innovantes en Tunisie ou à l'international.",
    },
    {
      question: "Pouvez-vous intervenir sur la conception UI/UX en plus du code ?",
      answer:
        "Tout à fait. Grâce à mes compétences sur Figma, Adobe Illustrator et Photoshop, j'assure la conception complète du produit : depuis les wireframes et maquettes haute-fidélité jusqu'à l'implémentation frontend fidèle au pixel près.",
    },
    {
      question: "Comment vous contacter rapidement ?",
      answer:
        "Vous pouvez m'envoyer un message directement via le formulaire de contact de ce site, me joindre par email à hadhemi93742594@gmail.com ou par téléphone au +216 44 338 426.",
    },
  ],
};
