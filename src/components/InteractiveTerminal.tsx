import { Check, Minus, Plus, X } from "lucide-react";

export default function InteractiveTerminal() {
  return (
    <div className="stitch-surface w-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 border-b border-[var(--hr-paper-dark)] bg-[var(--hr-paper-light)] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-[#ff605c]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd44]" />
        <span className="h-3 w-3 rounded-full bg-[#00ca4e]" />
        <div className="ml-3 flex items-center gap-2 font-mono text-xs text-[var(--hr-muted)]"><Minus className="h-3 w-3" /><span>terminal ~ zsh</span></div>
        <div className="ml-auto flex gap-2 text-[var(--hr-muted)]"><Plus className="h-3 w-3" /><X className="h-3 w-3" /></div>
      </div>
      <div className="space-y-4 p-6 font-mono text-xs leading-relaxed sm:p-8">
        <div className="space-y-2 text-[#009c9c]"><p>&gt; Initialize system...</p><p>&gt; Loading dependencies...</p><p>&gt; Compiling profile...</p><p className="text-[var(--hr-coral)]">&gt; Ready. Hello World.</p></div>
        <pre className="overflow-x-auto text-[var(--hr-ink-soft)]">{`const developer = {
  name: "Hadhemi Rahmi",
  role: "Full-Stack",
  skills: ["React", "React Native", "Node.js"]
};`}</pre>
        <div className="flex items-center gap-2 border-t border-[var(--hr-paper-dark)] pt-4 text-[var(--hr-muted)]"><Check className="h-4 w-4 text-[var(--hr-coral)]" /> <span>System ready for new projects.</span></div>
      </div>
    </div>
  );
}
