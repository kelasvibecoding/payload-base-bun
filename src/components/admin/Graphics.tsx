import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 py-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M10 22V10H14.5L18 16.5L21.5 10H26V22H22V15.5L18.5 22H17.5L14 15.5V22H10Z"
          fill="white"
        />
      </svg>
      <span className="text-foreground text-xl font-bold tracking-tight">
        PAYLOAD<span className="text-primary">BASE</span>
      </span>
    </div>
  )
}

export const Icon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M10 22V10H14.5L18 16.5L21.5 10H26V22H22V15.5L18.5 22H17.5L14 15.5V22H10Z"
        fill="white"
      />
    </svg>
  )
}
