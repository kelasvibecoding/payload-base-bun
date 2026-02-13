import { cn } from '@/components/lib/utils'
import { NavbarLinks, NavbarLogo } from './navbar-links'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <nav className={cn(
        "flex items-center justify-between px-6 py-3 rounded-full",
        "bg-white/70 dark:bg-black/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
        "w-full max-w-4xl transition-all duration-300"
      )}>
        <NavbarLogo />
        <NavbarLinks />
      </nav>
    </header>
  )
}
