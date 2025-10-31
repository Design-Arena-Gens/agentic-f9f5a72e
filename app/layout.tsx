import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Somu Cars - Quality Second Hand Cars',
  description: 'Find your perfect pre-owned vehicle at Somu Cars. Quality inspected second hand cars with warranty.',
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
