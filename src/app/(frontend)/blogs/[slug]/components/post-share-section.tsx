'use client'

import { Facebook, Link2, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useBlogTranslations } from '@/blocks/translations/useBlogTranslations'

type PostShareSectionProps = {
  title: string
  shareUrl: string
  variant?: 'default' | 'fill'
  showSeparator?: boolean
  shareLabel?: string
}

export function PostShareSection({
  title,
  shareUrl,
  variant = 'default',
  showSeparator = true,
  shareLabel,
}: PostShareSectionProps) {
  const isFill = variant === 'fill'
  const t = useBlogTranslations()

  // Create share links
  const shareLinks = [
    {
      label: t.shareOnTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      icon: Twitter,
      strokeWidth: 2,
    },
    {
      label: t.shareOnFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: Facebook,
      strokeWidth: 2,
    },
    {
      label: t.shareOnLinkedIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: Linkedin,
      strokeWidth: 2,
    },
    {
      label: t.shareOnWhatsApp,
      href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`,
      icon: MessageCircle,
      strokeWidth: 2,
    },
    {
      label: t.copyLink,
      href: '#',
      icon: Link2,
      strokeWidth: 2,
      onClick: async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
          await navigator.clipboard.writeText(shareUrl)
          toast.success(t.linkCopied)
        } catch {
          toast.error(t.failedToCopy)
        }
      },
    },
  ]

  return (
    <>
      {showSeparator && <Separator className="my-6" />}
      <div className={isFill ? 'flex flex-col gap-2' : 'flex flex-col gap-4'}>
        <p
          className={isFill ? 'text-muted-foreground mb-2 font-medium' : 'mb-2 text-sm font-medium'}
        >
          {shareLabel || (isFill ? `${t.share}:` : t.share)}
        </p>
        <ul className="flex gap-2">
          {shareLinks.map((link) => {
            const Icon = link.icon
            const strokeWidth = link.strokeWidth ?? 2
            if (isFill) {
              return (
                <li key={link.label}>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="group rounded-full"
                    asChild={!link.onClick}
                  >
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        aria-label={link.label}
                        className="flex h-full w-full items-center justify-center"
                      >
                        <Icon
                          strokeWidth={strokeWidth}
                          className="text-muted-foreground fill-muted-foreground group-hover:fill-primary group-hover:text-primary h-4 w-4 transition-colors"
                        />
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon
                          strokeWidth={strokeWidth}
                          className="text-muted-foreground fill-muted-foreground group-hover:fill-primary group-hover:text-primary h-4 w-4 transition-colors"
                        />
                      </a>
                    )}
                  </Button>
                </li>
              )
            }
            return (
              <li key={link.label}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon strokeWidth={strokeWidth} className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon strokeWidth={strokeWidth} className="h-4 w-4" />
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
