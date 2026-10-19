import type { Game } from '../data/games'

/** Tailwind classes per accent, written out whole so the scanner sees them. */
export const ACCENT: Record<Game['accent'], { text: string; border: string; bg: string; glow: string; button: string }> = {
  cyan: {
    text: 'text-cyan', border: 'border-cyan/40', bg: 'bg-cyan/10',
    glow: 'shadow-[0_0_40px_-10px_var(--color-cyan)]',
    button: 'bg-cyan text-ink shadow-[0_0_28px_-6px_var(--color-cyan)]',
  },
  amber: {
    text: 'text-amber', border: 'border-amber/40', bg: 'bg-amber/10',
    glow: 'shadow-[0_0_40px_-10px_var(--color-amber)]',
    button: 'bg-amber text-ink shadow-[0_0_28px_-6px_var(--color-amber)]',
  },
  violet: {
    text: 'text-violet', border: 'border-violet/40', bg: 'bg-violet/10',
    glow: 'shadow-[0_0_40px_-10px_var(--color-violet)]',
    button: 'bg-violet text-ink shadow-[0_0_28px_-6px_var(--color-violet)]',
  },
}
