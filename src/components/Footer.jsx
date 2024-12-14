import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import logo from '@/images/clients/logos/logos.svg'
import Image from 'next/image'

const Links = {
  title: 'Links',
  links: [
    { title: 'Used Engines', href: '/used-engines-for-sale' },
    { title: 'About Us', href: '/about' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Warranty', href: '/warranty' },
    { title: 'Policy', href: '/policy' },
    { title: 'Shipping Policy', href: '/shipping-policy' },
    { title: 'Return Policy', href: '/return-policy' },
    { title: 'Term Service', href: '/term-service' },
  ],
}
const Brands = {
  title: 'Brands',
  links: [
    { title: 'BMW', href: '/used-engines/BMW' },
    { title: 'Porche', href: '/used-engines/Porche' },
    { title: 'Mercedes', href: '/used-engines/Mercedes' },
    { title: 'Honda', href: '/used-engines/Honda' },
    { title: 'Ford', href: '/used-engines/Ford' },
    { title: 'Chevy', href: '/used-engines/Chevy' },
    { title: 'Audi', href: '/used-engines/Audi' },
  ],
}
const connect = {
  title: 'Connect',
  links: socialMediaProfiles,
}

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-orange-950">
            Links
          </div>
          <ul role="list" className="mt-4 text-sm text-orange-700">
            {Links.links.map((link) => (
              <li key={link.title} className="mt-4">
                <Link
                  href={link.href}
                  className="transition hover:text-orange-950"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-orange-950">
            Brands
          </div>
          <ul role="list" className="mt-4 text-sm text-orange-700">
            {Brands.links.map((link) => (
              <li key={link.title} className="mt-4">
                <Link
                  href={link.href}
                  className="transition hover:text-orange-950"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-orange-950">
            Connect
          </div>
          <ul role="list" className="mt-4 text-sm text-orange-700">
            {connect.links.map((link) => (
              <li key={link.title} className="mt-4">
                <a
                  target="_blank"
                  href={link.href}
                  className="transition hover:text-orange-950"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-orange-400">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          required
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-orange-400 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-orange-400 focus:outline-none focus:ring-orange-400/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-orange-400 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container
      as="footer"
      className="mt-24 w-full lg:mt-40"
    >
      <FadeIn className="hidden sm:block">
        <div className="hidden grid-cols-1 gap-x-8 gap-y-16 sm:grid lg:grid-cols-1">
          <Navigation />
          <div className="flex lg:justify-end">{/* <NewsletterForm /> */}</div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-orange-400/10 pt-12">
          <Link href="/" aria-label="Home">
            <p className="font-display text-xl font-semibold tracking-wider text-orange-950">
              <span className="text-orange-400">A</span>1&nbsp;
              <span className="text-orange-400">C</span>ar&nbsp;
              <span className="text-orange-400">p</span>arts
            </p>
            {/* <Image className="h-12 w-auto" src={logo} alt="Logo" unoptimized /> */}
            {/* <Logo className="h-8" fillOnHover /> */}
          </Link>
          <p className="text-sm text-neutral-700">
            © A1 Car Parts. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
