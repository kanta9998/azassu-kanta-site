'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LanguageSwitch = () => {
  const pathname = usePathname()
  const isJapanese = pathname.startsWith('/ja')

  const togglePath = () => {
    if (isJapanese) {
      // Remove /ja prefix
      return pathname.replace('/ja', '') || '/'
    } else {
      // Add /ja prefix
      return `/ja${pathname}`
    }
  }

  return (
    <Link
      href={togglePath()}
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 flex items-center justify-center text-sm font-medium text-foreground hover:text-primary"
      aria-label="Toggle Language"
    >
      {isJapanese ? 'EN' : 'JA'}
    </Link>
  )
}

export default LanguageSwitch 