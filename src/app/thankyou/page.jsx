import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ExclamationTriangleIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Thankyou() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center pt-20 text-center sm:mb-20 sm:pb-0 sm:pt-0">
        <p className="font-display text-2xl font-semibold text-orange-400 sm:mt-36 sm:text-5xl">
          Thank you for your interest.
        </p>
        <h1 className="mt-4 font-display text-lg font-semibold text-orange-400 sm:text-2xl">
          We will get back to you soon.
        </h1>
        <p className="mt-28 hidden text-sm text-neutral-100 sm:block">
          Can&apos;t wait to hear from us?
        </p>
        <div className="mt-8 flex h-20 flex-col items-center sm:hidden">
          <ExclamationTriangleIcon className="h-12 animate-bounce text-orange-400" />
          <h1 className="font-display text-lg font-semibold text-orange-400 sm:text-2xl">
            Want an instant quote.
          </h1>
        </div>
        <a
          id="call-inst-quote"
          href="tel:+18882338259"
          className="flex w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition duration-300 hover:bg-orange-600 sm:mr-4"
        >
          <PhoneIcon className="animate-phone-ring h-6" />
          <span className="ml-2">Give us a call.</span>
        </a>
      </FadeIn>
    </Container>
  )
}