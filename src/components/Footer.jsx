import { Github, Linkedin, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-10">
      <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ash-100">Jatin Narula</p>
          <p className="font-mono text-xs text-ash-700 mt-1">
            B.Tech CSE Student | Aspiring Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jatinnarula207-bot"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ash-500 hover:text-easy transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-narula-a97497382/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ash-500 hover:text-easy transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/jatinnarula28/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-ash-500 hover:text-easy transition-colors"
          >
            <Code2 size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ash-700">
          © 2026 Jatin Narula. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
