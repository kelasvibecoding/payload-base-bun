import { cn } from '@/lib/utils'
import { NavbarLinks, NavbarLogo } from './navbar-links'

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 py-4">
      <nav
        className={cn(
          'flex items-center justify-between rounded-full px-6 py-3',
          'border border-white/20 bg-white/70 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/50',
          'w-full max-w-4xl transition-all duration-300',
        )}
      >
        <NavbarLogo />
        <NavbarLinks />
      </nav>
    </header>
  )
}
