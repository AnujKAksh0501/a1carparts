import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import buy from '@/images/buy.png'
import selling from '@/images/selling.png'
import Image from 'next/image'
import transmission from '@/images/selling.png'
import { PhoneIcon } from '@heroicons/react/24/outline'
import Return from '@/images/warranty/return.svg'
import Certified from '@/images/warranty/certified.svg'
import WarrantyImage from '@/images/warranty/warranty.svg'
import Headphones from '@/images/warranty/headphone.svg'
import Shipped from '@/images/warranty/shipped.svg'

import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeInStagger } from '@/components/FadeIn'
import NavButton from '@/components/shared/NavButton'

function GridList({ className, children }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-1',
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

function GridListItem({ title, children, className, invert = false }) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-orange-300 before:bg-white after:bg-white/10'
          : 'text-orange-600 before:bg-orange-950 after:bg-orange-100',
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-orange-950'
            )}
          >
            {title}.
          </strong>
          <br />
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <Image
              {...image}
              alt="Used Transmission Hero"
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-orange-300 before:content-['/_'] after:text-orange-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-orange-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Buying" image={{ src: buy }}>
      <div className="space-y-6 text-base text-orange-600">
        <p>
          <strong className="font-semibold text-orange-950">
            What to Look for While Buying Used engines?{' '}
          </strong>
        </p>
        <p>
          If you’re thinking what to look for when buying used certified
          engines, then our team is here to help. Our technicians are eager to
          help you to save your money on vehicles. When purchasing a used
          engine, there are some questions that you must ask to receive a
          quality part
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-orange-950">plan</strong> and,
          more importantly, a budget.
        </p>
      </div>
      <TagList className="mt-4">
        <TagListItem>HAS THE USED engine BEEN TESTED?</TagListItem>
        <TagListItem>
          IS THE USED engine COMPATIBLE WITH MY VEHICLE?
        </TagListItem>
        <TagListItem>
          IS THE COMPANY OFFERING ANY WARRANTY ON THE USED engine?
        </TagListItem>
      </TagList>
      <div className="space-y-6 text-base text-orange-600">
        <p>
          At our A1 Car Parts, we offer a huge inventory of used motors for
          sale in USA at affordable prices. All of our parts have been carefully
          inspected for leaks and other tests prior to sale and we also provide
          Lifetime Warranty Support and free shipping on all our parts. Our team
          will make sure that the used motor you will purchases is compatible
          with your vehicle.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Selling" image={{ src: selling, shape: 1 }}>
      <div className="space-y-6 text-base text-orange-600">
        <p>
          <strong className="font-semibold text-orange-950">
            Guaranteed Test Before Selling Used Engines
          </strong>
        </p>
        <p>
          At A1 Car Parts we have extensive inventory of engines with
          warranty that are carefully inspected & checked by our team of
          technical experts. Before shipping a used engine to your address, our
          team will perform a variety of checks, including:
        </p>
      </div>
      <TagList className="mt-4">
        <TagListItem>COMPRESSION TEST</TagListItem>
        <TagListItem>NOISE/ VISUAL. SMOKE TEST</TagListItem>
        <TagListItem>
          ASSESSING FOR ANY SIGNS OF OIL LEAKAGE AND MUCH MORE
        </TagListItem>
        <TagListItem>
          All of used engines come with Lifetime Support.
        </TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-orange-600">
        <p>
          About halfway through the Build phase, we push each project out by 6
          weeks due to a change in{' '}
          <strong className="font-semibold text-orange-950">
            requirements
          </strong>
          . This allows us to increase the budget a final time before launch.
        </p>
        <p>
          Despite largely using pre-built components, most of the{' '}
          <strong className="font-semibold text-orange-950">progress</strong> on
          each project takes place in the final 24 hours. The development time
          allocated to each client is actually spent making augmented reality
          demos that go viral on Twitter.
        </p>
        <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-orange-950">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-orange-950">maintenance</strong>{' '}
          retainer.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-orange-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-orange-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-orange-100 stroke-orange-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="FAQ"
        title="Frequently Asked Questions"
      ></SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="1. Are used transmissions good?">
            Used transmissions are good to buy as they enable you to continue
            driving your vehicle without replacing it or splurging thousands of
            dollars on repairs. They are cheap, effective, and accessible.
          </GridListItem>
          <GridListItem title="2. How can I buy used transmissions from you?">
            All you need to do is give us a call at our toll-free number
            1800-518-9776 or fill out our website form. We will get in touch
            with you soon. Make sure that you keep the following handy.
            tagVehicle Identification Number tagMileage Needed tagShipping
            address You will receive a free quotation and all the necessary
            details.
          </GridListItem>
          <GridListItem title="3. Is CVT the same as automatic transmission?">
            Since CVT doesn’t require the driver to manually change the gears,
            it can be called an automatic transmission. However, there are huge
            differences in the functioning of these two.
          </GridListItem>
          <GridListItem title="4. How long does a used transmission last?">
            A used transmission can last even 100,000 miles or more. It depends
            upon the mileage of the unit and buys and the degree of maintenance
            it gets.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Transmission() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro eyebrow="Sale" title="Used Transmission">
        <p>Is your transmission making it difficult to drive your vehicle?</p>
        <p>
          Are you tired of back-to-back transmission repairs and never-ending
          mechanic bills?
        </p>
        <p>If so, then you’re at the RIGHT place!</p>
        <p>
          You can buy a used transmission with a warranty and solve all your
          troubles in a jiffy. Whatever your vehicle needs, we definitely have
          the exact replacement part for your transmission swap.
        </p>
        <p>
          All we need is the VIN or year, make & model to identify a suitable
          used car transmission for sale for your repair project. Once we have
          found the used gearbox you need, we will deliver it directly to your
          address, fast & free of shipping charges.
        </p>
        <p>
          When you&apos;re ready to buy a used transmission from the best
          transmission source in the business, give us a call. We look forward
          to helping you improve your vehicle&apos;s powertrain, one step at a
          time.
        </p>
        <p>Fill up the form to get a FREE quote!</p>
        <p className="pt-8">
          <strong className="font-semibold text-orange-950">
            TYPES OF TRANSMISSION WE OFFER{' '}
          </strong>
        </p>
        <p>
          We have thousands of low mileage & high-quality used transmissions in
          our inventory. Here are the four types of transmission we deal in.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Automatic Transmission">
            We have automatic transmissions for sale of various makes and models
            for you to explore.
          </GridListItem>
          <GridListItem title="Manual Transmission">
            If you’re into the classics and drive stick, we’ll cater to your
            requirements through our used manual transmission for sale.
          </GridListItem>
          <GridListItem title="Semi-Automatic Transmission Services">
            Semi-automatic transmissions are clutchless and preferred by plenty
            of drivers. If you’re looking for one, we have it in our inventory.
          </GridListItem>
          <GridListItem title="Continuously Variable Transmission (CVT) Services">
            You don’t splurge for a used CVT transmission for sale as we offer
            all makes & models for a low price.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Used Engines',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function UsedTransmission() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent part='Transmission' />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              Buy an &quot;A&quot; grade used transmission that comes with 3-5
              Years warranty.
            </h1>
            <div className="flex items-center sm:py-3">
              <div className="mr-2 flex h-12 w-12 items-center  rounded-full bg-white">
                <Image
                  src={Shipped}
                  alt="Shipping"
                  className="h-8"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display font-medium text-orange-400 sm:text-orange-950 ">
                  Flat Rate Shipping (Commercial address)
                </p>
              </div>
            </div>
            <div className="flex items-center sm:py-3">
              <div className="mr-2 flex h-12 w-12 items-center  rounded-full bg-white">
                <Image
                  src={WarrantyImage}
                  alt="Shipping"
                  className="h-8"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display font-medium text-orange-400 sm:text-orange-950 ">
                  Up to 5 Years Unlimited Mile Warranty
                </p>
              </div>
            </div>
            <div className="flex items-center sm:py-3">
              <div className="mr-2 flex h-12 w-12 items-center  rounded-full bg-white">
                <Image
                  src={Headphones}
                  alt="Shipping"
                  className="h-8"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display font-medium text-orange-400 sm:text-orange-950 ">
                  Excellent Customer Support
                </p>
              </div>
            </div>
            <div className="flex items-center sm:py-3">
              <div className="mr-2 flex h-12 w-12 items-center  rounded-full bg-white">
                <Image
                  src={Return}
                  alt="Shipping"
                  className="h-8"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display font-medium text-orange-400 sm:text-orange-950 ">
                  No core charge for 30 days <br /> (For Transmission)
                </p>
              </div>
            </div>
            <div className="mt-4 text-2xl">
              <span className="text-black">Speak with our specialist.</span>
              <NavButton />
            </div>
          </div>
        </FadeIn>
      </Container>
      <Transmission />
      <Values />
    </>
  )
}
