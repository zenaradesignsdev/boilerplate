import { generateMetadata as buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Homepage meta description — update per client.',
  path: '/',
})

export default function HomePage() {
  return (
    <main>
      {/* Page sections are built per-client. */}
    </main>
  )
}
