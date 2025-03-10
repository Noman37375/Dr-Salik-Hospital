'use client'

import { usePathname } from 'next/navigation'
import Header from "./header"
import Footer from "./footer"

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudioRoute = pathname?.startsWith('/studio')

  return (
    <>
      {!isStudioRoute && <Header />}
      <main className={isStudioRoute ? 'h-screen' : 'min-h-screen'}>{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  )
} 