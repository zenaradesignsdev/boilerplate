import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch — update this description per client.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Get in touch</h1>
      <p className="mt-4 text-muted-foreground">
        {/* Update this copy per client */}
        Fill out the form below and we&apos;ll be in touch shortly.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  )
}
