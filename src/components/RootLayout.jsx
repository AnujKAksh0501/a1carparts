'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

import Image from 'next/image'
import BMW from '@/images/clients/logos/13.png'
import porche from '@/images/clients/logos/1.png'
import Mercedes from '@/images/clients/logos/5.png'
import Honda from '@/images/clients/logos/16.png'
import Chevy from '@/images/clients/logos/chevy.png'
import Ford from '@/images/clients/logos/ford.png'
import Audi from '@/images/clients/logos/12.png'
import banner from '@/images/landing-banner.webp'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon'
import { handleCallClick } from '@/lib/callButton'

export const RootLayoutContext = createContext({})

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function BreadCrumbs() {
  const path = usePathname()
  const allPaths = path.split('/').filter((x) => x !== '')
  function capitalizeAfterSpace(input) {
    return input.replace(
      /(?:^|\s)([a-z])/g,
      (_, match) => ` ${match.toUpperCase()}`
    )
  }

  return (
    <div className="hidden w-full bg-slate-400 text-sm font-semibold text-white sm:block">
      <Container>
        <Link href={`/`}>Home</Link>
        {allPaths.map((item, index) => (
          <Link
            key={item}
            href={
              `/${allPaths.slice(0, index + 1).join('/')}` === '/search'
                ? '/'
                : `/${allPaths.slice(0, index + 1).join('/')}`
            }
          >
            {' '}
            &gt;{' '}
            {capitalizeAfterSpace(item.replace(/-/g, ' ').replace(/_/g, ' '))}
          </Link>
        ))}
      </Container>
    </div>
  )
}

function Header({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)
  const pathName = usePathname()
  return (
    <>
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="flex items-center justify-center overflow-hidden py-1">
              <p className="font-display text-xl font-semibold tracking-wider text-orange-950">
                <span className={invert ? 'text-white' : 'text-orange-400'}>A</span>1&nbsp;
                <span className={invert ? 'text-white' : 'text-orange-400'}>C</span>ar&nbsp;
                <span className={invert ? 'text-white' : 'text-orange-400'}>P</span>arts
              </p>
              {/* <Image className="w-full" src={logo} alt="logo" unoptimized /> */}
            </div>
          </Link>
          {pathName !== '/used-engines-for-sale' && (
            <div className="hidden items-center sm:flex">
              <ClockIcon className="h-8 text-orange-400" />
              <div className="ml-2 text-sm font-semibold text-orange-400">
                <p className="text-black">
                  Monday - Friday 9:00am-8:00pm EST
                  <br />
                  Saturday 11:00am-4:00pm EST
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-x-4">
            {/* <CallToActionLink href="mailto:info@Engines & Drivetrain.com" className="hidden md:block" invert={invert}>
            info@Engines & Drivetrain.com
          </CallToActionLink> */}
            <button
              id="call-btn"
              onClick={handleCallClick}
              className="call-btn hidden items-center sm:flex"
            >
              <div
                id="call-btn"
                className="rounded-full border border-orange-400 p-2"
              >
                <PhoneIcon
                  id="call-btn"
                  className="animate-phone-ring h-6 text-orange-400"
                />
              </div>
              <div id="call-btn" className="ml-2">
                <p id="call-btn" className="text-sm">
                  Speak with our specialist now
                </p>
                <p
                  id="call-btn"
                  className="text-lg font-semibold text-orange-400"
                >
                  +1-888-855-1808
                </p>
              </div>
            </button>
            <button
              ref={toggleRef}
              type="button"
              onClick={onToggle}
              aria-expanded={expanded.toString()}
              aria-controls={panelId}
              className={clsx(
                'group -m-2.5 block rounded-full p-2.5 transition sm:hidden',
                invert ? 'hover:bg-white/10' : 'hover:bg-orange-400/10'
              )}
              aria-label="Toggle navigation"
            >
              <Icon
                className={clsx(
                  'h-6 w-6',
                  invert
                    ? 'fill-white group-hover:fill-neutral-200'
                    : 'fill-orange-400 group-hover:fill-neutral-700'
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={
            invert
              ? 'hidden'
              : 'item-center flex justify-between border-t border-t-orange-400 py-1 sm:hidden'
          }
        >
          <button
            id="call-btn"
            onClick={handleCallClick}
            className="call-btn flex items-center"
          >
            <div
              id="call-btn"
              className="rounded-full border border-orange-400 p-1 sm:p-4"
            >
              <PhoneIcon
                id="call-btn"
                className="animate-phone-ring h-3 text-orange-400 sm:h-5"
              />
            </div>
            <div id="call-btn" className="ml-2">
              <p
                id="call-btn"
                className="text-sm font-semibold text-orange-400"
              >
                +1-888-855-1808
              </p>
            </div>
          </button>
          <div className="my-auto hidden text-xs sm:block">
            M-F 9AM - 8PM EST
            <br />
            SAT 11AM - 4PM EST
          </div>
          <div className="my-auto block text-xs font-semibold text-orange-400 sm:hidden">
            Call for FREE QUOTE
          </div>
        </div>
        <nav className="hidden items-center justify-between border-t border-t-orange-400 text-orange-400 sm:flex ">
          <Link
            href="/used-engines-for-sale"
            className={
              'relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white'
            }
          >
            Used Engines
            {pathName === '/used-engines-for-sale' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
          <Link
            href="/used-transmissions-for-sale"
            className={
              'relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white'
            }
          >
            Used Transmission
            {pathName === '/used-transmissions-for-sale' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
          <Link
            href="/about"
            className="relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white"
          >
            About Us
            {pathName === '/about' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
          <Link
            href="/faqs"
            className="relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white"
          >
            FAQs
            {pathName === '/faqs' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
          <Link
            href="/warranty"
            className="relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white"
          >
            Warranty
            {pathName === '/warranty' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
          <Link
            href="/policy"
            className="relative w-full cursor-pointer py-4 text-center font-semibold transition hover:bg-orange-400 hover:text-white"
          >
            Policy
            {pathName === '/policy' && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 transform rounded-t-full bg-orange-400 transition-transform"></span>
            )}
          </Link>
        </nav>
      </Container>
      {!invert && pathName !== '/used-engines-for-sale' && <BreadCrumbs />}
    </>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="border-t border-t-neutral-100 sm:bg-orange-400">
      {/* <Container> */}
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2">{children}</div>
      {/* </Container> */}
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 border-y-[0.5px] border-neutral-100 bg-orange-400 px-6 py-2 sm:mx-0 sm:border-neutral-100 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:border-l sm:even:pl-16 md:border-y-0"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-orange-500 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function BrandRow({ children }) {
  return (
    <div className="sm:bg-orange-400 ">
      <div className="hidden grid-cols-1 sm:grid-cols-7 md:grid">
        {children}
      </div>
    </div>
  )
}

function BrandItem({ href, children }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center border-t border-t-neutral-100 bg-orange-400 py-4 hover:bg-orange-500"
    >
      {children}
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="sticky top-0 rounded-t-md border-t border-t-neutral-100 font-display text-2xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/used-engines-for-sale">
          Used Engines
        </NavigationItem>
        <NavigationItem href="/used-transmissions-for-sale">
          Used Transmission
        </NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/faqs">FAQs</NavigationItem>
        <NavigationItem href="/warranty">Warranty</NavigationItem>
        <NavigationItem href="/policy">Policy</NavigationItem>
      </NavigationRow>
      <BrandRow>
        <BrandItem href="/used-engines/BMW">
          <Image className="h-12 w-auto" src={BMW} alt="BMW" unoptimized />
        </BrandItem>
        <BrandItem href="/used-engines/Porche">
          <Image
            className="h-12 w-auto"
            src={porche}
            alt="Porche"
            unoptimized
          />
        </BrandItem>
        <BrandItem href="/used-engines/Mercedes">
          <Image
            className="h-12 w-auto"
            src={Mercedes}
            alt="Mercedes"
            unoptimized
          />
        </BrandItem>
        <BrandItem href="/used-engines/Honda">
          <Image className="h-12 w-auto" src={Honda} alt="Honda" unoptimized />
        </BrandItem>
        <BrandItem href="/used-engines/Ford">
          <Image className="h-12 w-auto" src={Ford} alt="Ford" unoptimized />
        </BrandItem>
        <BrandItem href="/used-engines/Chevy">
          <Image className="h-12 w-auto" src={Chevy} alt="Chevy" unoptimized />
        </BrandItem>
        <BrandItem href="/used-engines/Audi">
          <Image className="h-12 w-auto" src={Audi} alt="Audi" unoptimized />
        </BrandItem>
      </BrandRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef()
  let closeRef = useRef()
  let navRef = useRef()
  let shouldReduceMotion = useReducedMotion()
  const pathName = usePathname()

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header className="sticky top-0 z-50 rounded-t-md">
        <div
          className="absolute left-0 right-0 z-40 bg-white pt-4 shadow-md"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className={
            expanded
              ? 'relative z-50 overflow-hidden bg-orange-400 pt-2'
              : 'relative z-50 overflow-hidden pt-2'
          }
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-orange-400 pb-4 pt-4">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-orange-400 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-100">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our office
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          {/* <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-orange-400/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          /> */}
          {pathName !== '/used-engines-for-sale' && (
            <Image
              src={banner}
              unoptimized
              alt="bg"
              className="absolute inset-x-0 -top-14 -z-10 hidden h-[800px] w-full fill-neutral-50 stroke-orange-400/5 sm:block"
            />
          )}
          <div className="absolute inset-x-0 -top-14 -z-10 hidden h-[800px] w-full bg-white fill-neutral-50 stroke-orange-400/5 opacity-70 sm:block" />

          <main className="w-full flex-auto">{children}</main>
          {pathName !== '/used-engines-for-sale' && <Footer />}
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)
  const [formSelections, setFormSelections] = useState({
    part: '',
    make: '',
    model: '',
    year: '',
    size: '',
  })
  const [options, setOptions] = useState({
    part: ['Engine', 'Transmission'],
    make: [],
    model: [],
    year: [],
    option: [],
  })
  const [formDataLoc, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  })

  return (
    <RootLayoutContext.Provider
      value={{
        logoHovered,
        setLogoHovered,
        formSelections,
        setFormSelections,
        options,
        setOptions,
        formDataLoc,
        setFormData,
      }}
    >
      {pathname !== '/admin' ? (
        <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
      ) : (
        <>{children}</>
      )}
    </RootLayoutContext.Provider>
  )
}
