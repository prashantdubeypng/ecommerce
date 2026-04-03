import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dharma Vesh | High-End Luxury',
  description: 'Wear your Dharma. A premium editorial fashion brand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
