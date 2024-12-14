import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import gearStick from '@/images/gear-stick.jpeg'
import engineRepair from '@/images/engine-repair.jpeg'
import wheels from '@/images/wheels.jpeg'
import Image from 'next/image'
import Return from '@/images/warranty/return.svg'
import Certified from '@/images/warranty/certified.svg'
import WarrantyImage from '@/images/warranty/warranty.svg'
import Headphones from '@/images/warranty/headphone.svg'
import Shipped from '@/images/warranty/shipped.svg'
import NavButton from '@/components/shared/NavButton'

function Section({ title, image, children }) {
  return (
    <Container>
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-orange-400 sm:text-4xl">
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
    <Section title="Customer Satisfaction Is Our Goal" image={{ src: wheels }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At A1 Car Parts, used engine warranty is restricted to only
          manufacturing defects of the following parts: block, heads, pistons,
          crankshafts, camshafts, rockers, and other internal components only.
          A1 Car Parts warranty doesn&apos;t cover any attached
          accessory parts such as
          <strong className="font-semibold text-orange-400">
            {' '}
            switches, sensors, cables, electronics, belts, hoses, water pumps,
            manifolds, wire harnesses, valve covers, gaskets, brackets, oil pan,
            flywheel, etc.
          </strong>
          At A1 Car Parts, used engine warranty is restricted to only
          manufacturing defects of the following parts: block, heads, pistons,
          crankshafts, camshafts, rockers, and other internal components only.
          A1 Car Parts warranty doesn&apos;t cover any attached
          accessory parts such as switches, sensors, cables, electronics, belts,
          hoses, water pumps, manifolds, wire harnesses, valve covers, gaskets,
          brackets, oil pan, flywheel, etc.
        </p>
        <p>
          A1 Car Parts is also not accountable for any charges
          associated with inappropriate engine installation and labor costs.
        </p>
        <p>
          Since our exhaustive used engines inventory is located at various
          supplier facilities, delivery time can vary, but it normally takes
          7-10 BUSINESS days (excluding weekends and holidays). Even though it
          is very rare but sometimes delivery time may be affected due to
          unusual circumstances that might require some additional time.
        </p>
        <p>
          Our shipping for used engines for sale is free to the commercial
          address within the central USA. Residential deliveries will result in
          a $150.00 additional shipping charge unless noted otherwise.
        </p>
        <p>
          All returned used engines or cancelled orders are subject to 25%
          handling and restocking fees, customer assumes all the shipping costs
          unless the replacement is authorized by A1 Car Parts during
          the warranty period. If an order gets cancelled after the payment has
          been processed and the order is still not shipped, the customer will
          bear the processing fees of the credit card.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="" image={{ src: gearStick, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Customers are self-responsible for satisfying the terms of the
          payment. If the customer ignores the payment terms, they will be
          answerable for all of the charges associated with the collection. Our
          charges will include all collection costs and attorney fees.
        </p>
        <p>
          We are not liable for any refund which is associated with USED ENGINES
          or parts that were not diagnosed correctly. A1 Car Parts will
          not assume towing, shipping, transportation charges, or rental car
          costs. Any wrong information will automatically cancel your warranty.
        </p>
        <p>
          For your information! You are purchasing used engines from us. We make
          efficient and presentable engine parts for all vehicles but we
          don&apos;t guarantee engine appearance. The customer should inspect
          all the parts before signing on delivery.
        </p>
        <p>
          Used low mileage engine is the best in our knowledge. Engines &
          Drivetrain warranty doesn&apos;t apply to oil leaks/damage on engines
          due to seals, gaskets, and filters that have not been replaced.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="" image={{ src: engineRepair, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          OEM auto parts are interchangeable within different makes and models.
          A1 Car Parts is using a VIN compatibility tool to assure that
          the ordered used engine for sale is an adequate and exact fit for your
          vehicle. All deposits made to us are non-refundable unless otherwise
          noted.
        </p>
        <p>
          Return or exchange of used engines are authorized by Engines &
          Drivetrain Shipped order if returned should be received in the same
          assembled condition as it was originally shipped to the customer. If
          in case received order is not in the same condition because of any
          reason, NO REFUND will be done from our side. Refunds are only
          authorized if the replacement is not available. If the engine was
          disassembled or altered in any way without A1 Car Parts
          written authorization, the warranty will be void. Our used engines are
          meticulously tested, visually inspected, and properly cleaned.
        </p>
        {/* <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-orange-400">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-orange-400">maintenance</strong>{' '}
          retainer.
        </p> */}
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-orange-400">
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
      </List> */}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-orange-400/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="WARRANTY CANCELLATION"
        title="Warranty will be cancelled if"
      >
        {/* <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p> */}
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem className="flex" title="Faulty Installation">
            Used engine was not properly installed.
          </GridListItem>
          <GridListItem className="flex" title="Inappropriate usage">
            Used engine was used for racing.
          </GridListItem>
          <GridListItem className="flex" title="Lack of proper components">
            Used engine was used without proper lubrication or cooling
            regardless of the reason.
          </GridListItem>
          <GridListItem className="flex" title="Untimely installation">
            Purchased used engine is not installed within 30 days after
            delivery.
          </GridListItem>
          <GridListItem className="flex" title="">
            warranty will cover only a one-time claim per product purchased from
            us. A1 Car Parts warranty claim representative will work
            with you to ensure your experience is a complete success. We reserve
            the right to charge any applicable fees in connection with the
            processing of your warranty claim.
          </GridListItem>
          <GridListItem className="flex" title="">
            A1 Car Parts permits only original purchasers for any deal
            or purchase and guarantees that our sold used engine shall be free
            from knocking excessive oil consumption and cracks in the block. We
            follow the same Auto terms and conditions as other suppliers are
            following.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Limitations() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-orange-400/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Warranty Limitations"
        title="A1 Car Parts warranty applies to the used engines ONLY."
      >
        <p>Our warranty will not be applied if:</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem className="flex" title="1 ">
            Used engines &quot;Repair or Replacement&quot; required as a result
            of any accident or misuse.
          </GridListItem>
          <GridListItem className="flex" title="2 ">
            Repair or replacement of any used engine include specifically,
            without limitation, to all components of the cooling, fuel,
            electrical, engine control system and all ignition system
            components, belts, hoses and filters.
          </GridListItem>
          <GridListItem className="flex" title="3 ">
            Used engine was used for racing competition or related purposes.
          </GridListItem>
          <GridListItem className="flex" title="4 ">
            Used engine has been repaired or remodelled for few extents or parts
            and its part or accessory is not conforming to original manufacturer
            specifications has been installed.
          </GridListItem>
          <GridListItem className="flex" title="5 ">
            Used engine is damaged as a result of overheating or lack of
            lubrication.
          </GridListItem>
          <GridListItem className="flex" title="6 ">
            Used engine is returned with the heat tabs missing or melted.
          </GridListItem>
          <GridListItem className="flex" title="7 ">
            A1 Car Parts warranty does not apply for an initial
            installation. A1 Car Parts warranty claim must be submitted
            and authorized by Swap Motors. warranty technician prior to any work
            being performed.
          </GridListItem>
          <GridListItem className="flex" title="8 ">
            Buyer needs to submit all documentations within 5 business days,
            otherwise your claim will be denied, no exceptions. Vehicle use
            shall be immediately discontinued once the issue or problem has been
            identified, otherwise warranty will be void.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Warranty',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Warranty() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              Engines and Drivetrain warranty.
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
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Warranty Policy
        </p>
        <p className="pt-4 font-display text-base">
          At A1 Car Parts, our products are more than just auto parts;
          they represent our everlasting dedication to quality, dependability,
          and client happiness. We are aware that each item you purchase from us
          represents a financial commitment to your car that has to be protected
          and guaranteed.
        </p>
        <p className="pt-4 font-display text-base">
          We continuously work to uphold the highest standards of customer
          satisfaction while leading the auto parts market. Each part,
          accessory, or assembly carefully chosen and supplied from our
          facilities reflects this dedication. Every product comes with our
          quality assurance seal, which attests to our commitment to quality
          control and shows how much we value every one of our customers.
          Additionally, our warranty is not just a compilation of legalese or a
          list of prerequisites that must be satisfied. It is a physical
          representation of our dedication to our clients and our vow to back up
          and support our offerings. With this approach, you can be confident
          that no component will fail and that the vehicle will run smoothly and
          dependably every time you turn the ignition key.
        </p>
        <p className="pt-4 font-display text-base">
          To uphold this guarantee, each item in our catalog is thoroughly
          tested and inspected before packing for delivery. Although rigorous,
          this exacting technique is not immune to rare errors. We know this, so
          we have a responsive, committed team to support you should the
          unlikely occur. Any damaged element will be replaced as the first line
          of defense. However, we will fully refund the complete amount you were
          charged for your order if a replacement is not possible for any
          reason. Furthermore, this pledge covers almost all the car parts we
          supply, giving our clients a broad level of certainty.
        </p>
        <p className="pt-4 font-display text-base">
          We take a straightforward approach to the warranty policy. We clarify
          that our guarantee does not cover labor charges associated with the
          installation or removal of items. Additionally, it doesn&apos;t cover
          other expenses like towing fees, rental car charges, or additional
          repairs required as a result of using faulty or inappropriate parts.
          Our company aims to develop relationships based on trust and customer
          satisfaction, not only by selling parts. This corporate concept is
          clearly reflected in A1 Car Parts warranty policy. We continue
          to offer assistance and support to our clients long after the sale
          finalizes to give them the finest possible service.
        </p>
        <p className="pt-4 font-display text-base">
          Our warranty program offers our clients protection against defective
          items and peace of mind, among other advantages. They can shop
          confidently, knowing that every component will perform to the highest
          standards and that, should any issues arise, we&apos;ll be here to
          address them quickly and satisfactorily. Moreover, our warranty policy
          reflects our confidence in the caliber of our products. It
          demonstrates our ongoing dedication to giving our consumers only the
          best. We stand by every product we sell, from the initial examination
          and testing of parts to their delivery and installation.
        </p>
        <p className="pt-4 font-display text-base">
          A1 Car Parts recognizes the value of backing up our products
          with a firm warranty policy in a world where trust is valued equally
          to the product itself. In addition, we are committed to upholding this
          high level of client pleasure and belief in our goods, delivering a
          more streamlined and dependable experience for all our clients. Select
          A1 Car Parts to explore the auto parts world confidently. We
          strive to offer customers peace of mind, excellent performance, and
          long-lasting durability in addition to simply selling parts. Put your
          faith in our products, our warranties, and our dedication to you.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Return Process
        </p>
        <p className="pt-4 font-display text-base">
          We are aware that returning a part occasionally can be difficult.
          Because of this, we work hard to make the return procedure as simple
          as possible. We ask that our clients thoroughly explain the problem
          they&apos;ve encountered to make returns go more smoothly. Thanks to
          your information, we can better identify the nature of the issue,
          address it, and improve our service.
        </p>
        <p className="pt-4 font-display text-base">
          However, if a returned part doesn&apos;t adhere to the guidelines
          specified in our return policy, a restocking fee of 25% of the total
          paid amount assesses. By taking this action, we can better manage our
          inventories and provide for you in the future.
        </p>
        <p className="pt-4 font-display text-base">
          Ordering the correct part is crucial, which cannot be emphasized
          sufficiently. We firmly advise our customers to consult a mechanic or
          other automotive expert before placing an order to avoid future
          issues. We regrettably cannot accept returns or issue refunds for
          parts which are ordered incorrectly. Please be aware that to be
          eligible for a refund or exchange, all claims must be returned within
          30 days of delivery.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Warranty Coverage on Transmissions
        </p>
        <p className="pt-4 font-display text-base">
          The transmission is a critical component of an automobile&apos;s
          intricate ecosystem. It is the brains behind turning the power of your
          engine into motion. A1 Car Parts recognizes the importance of
          this job and specifically emphasizes our warranty coverage for
          transmissions, which play a crucial role in the overall operation of
          your car.
        </p>
        <p className="pt-4 font-display text-base">
          Our transmission warranty coverage goes above and beyond the norm. We
          know a transmission&apos;s efficiency extends beyond functional gears
          and bearings. It entails paying close attention to every component
          supporting efficient power transfer from your engine to your wheels.
          Let&apos;s clarify the function and intricacy of transmissions before
          getting into the complexities of our transmission guarantee. Moreover,
          an automatic gearbox comprises many gears, bearings, seals, gaskets,
          and fluid lines, just a few of the many different parts. The assembly
          is a mechanical wonder that ensures your car&apos;s motion because
          each component is essential for the transmission to operate correctly.
        </p>
        <p className="pt-4 font-display text-base">
          However, comprehensive and robust warranty coverage is required due to
          the complicated assembly&apos;s susceptibility to wear and tear.
          Moreover, our dedication to you extends to ensuring that each
          component works in unison to give you a safe and dependable driving
          experience. Our transmission guarantee was explicitly created to
          ensure it would operate correctly, with smooth gear and bearing
          motion. However, the duty does not end there. Before assembling the
          transmission, we advise clients to clean all its parts, including the
          oil pan, properly. Doing this will make you confident that any
          leftover impurities won&apos;t affect how well your new part works.
        </p>
        <p className="pt-4 font-display text-base">
          Additionally, it is essential to repair all gaskets and seals before
          installing the transmission. This procedure reduces the possibility of
          any leaks that can result in fluid loss and possible harm. The cooler
          and lines should also undergo a thorough inspection, flush, and flow
          test. This guarantees that the cooling system, essential to
          maintaining the transmission&apos;s health, is operating as it should.
          In addition, the warranty coverage changes regarding manual
          transmissions to consider their particular characteristics. The
          replacement of the clutch, pressure plate, and slave
          cylinder—essential components of the manual transmission system—is
          advised by the policy. Prior to installation, the flywheel should also
          be refinished to guarantee optimum clutch engagement and seamless gear
          changes.
        </p>
        <p className="pt-4 font-display text-base">
          It&apos;s also crucial to remember that keeping your
          transmission&apos;s fluid level at the right level is essential for
          its longevity and effective operation. Moreover, it doesn&apos;t
          matter if the transmission is automatic or manual; fluid levels must
          be monitored and filled off as necessary to prevent overheating and
          guarantee seamless gear changes. Additionally, it is essential to
          recognize that not all parts are covered by our warranty, even though
          we guarantee the performance of the fundamental transmission
          components. While turbo seals, for example, are a component of the
          transmission assembly, they are not warranted to remain faultless and
          need to be replaced within a specific time range.
        </p>
        <p className="pt-4 font-display text-base">
          Our extensive warranty coverage for transmissions aligns with our
          broader dedication to excellence, dependability, and client happiness.
          It intends to offer a hassle-free ownership experience, allowing you
          to concentrate on the road ahead rather than the components inside
          your engine. We will support every mile of your journey as we make
          sure it is as smooth as a transmission covered by a Engines &
          Drivetrain warranty. Trust in us, and let&apos;s travel through the
          automotive world together.
        </p>
      </Container>
      {/* <Container className="mt-36 pt-0 sm:pt-32">
        <div className="grid grid-cols-1">
          <div className="flex py-6">
            <Image src={Return} alt="Return" className="mr-8" unoptimized />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Return and Replacements
              </p>
              We provide a no-cost warranty since we cover the shipping expenses
              for all authorized returns and replacements.
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={Certified}
              alt="Certified"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Certified Professionals
              </p>
              Our ase-certified professionals have thoughtfully crafted a
              pre-installation guide to ensure the engine performs at its peak.
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={WarrantyImage}
              alt="Warranty"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Replacement Warranty
              </p>
              6 months return and replacement warranty
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={Headphones}
              alt="Support"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Dedicated Support
              </p>
              Lifetime Support (Our in-house warranty team works with you to
              troubleshoot the majority of frequent issues to prevent total
              engine failure).
            </div>
          </div>

          <div className="flex py-6">
            <Image src={Shipped} alt="Shipping" className="mr-8" unoptimized />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Express Shipping
              </p>
              we generally ship orders within 3-5 business days(excluding
              weekend and holidays). though it’s very rare, during some
              unavoidable circumstances, delivery might require some additional
              time.
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <div className="mt-12 flex justify-center border-t border-t-neutral-200 pt-36">
        <div className="max-w-5xl px-8 text-center">
          <h3 className="text-orange-400">What is a Used Engine?</h3>
          <p className="py-2">
            The term used engine shall mean, a used engine assembly (basic
            block, cylinder head, and internal components) supplied by Swap
            Motors. of the original manufacturer. All other accessories
            attached, left on the block are for convenience purposes only.
          </p>
          <p className="py-2">
            Subject to the limitations listed below, A1 Car Parts says they will
            either send a replacement engine of the same kind that is available
            at the time or refund the customer purchase price if the engine is
            defective and no replacement is available.
          </p>
          <p className="py-2">
            A1 Car Parts will not be responsible for any labour cost incurred by
            the customer unless prior agreement is made.
          </p>
        </div>
      </div>

      <Limitations />

      <Container className="mt-12 flex justify-start pt-36">
        <div>
          <h3 className="text-3xl text-orange-400">Limited Liability</h3>
          <p className="py-2">
            The A1 Car Parts liability is solely and exclusively limited to
            supplying low mileage used engines replacement whenever one is
            available or refunding customer with the purchase price. Swap
            Motors. doesn&apos;t accept any liability associated with labor
            costs, replacement of engine oil, transmission fluid, and
            antifreeze, or damage to other engine or parts or components towing
            charges, telephone calls, freight, lost profits, lost time,
            substitute transportation, or replacement vehicle or any other
            consequential damages. A1 Car Parts is not responsible for any
            failure resulting from improper installation, modification of the
            product faulty or incompatible parts and accessories, and/or
            abnormal use of operation. State and federal laws regulate odometer
            mileage for most used automobiles, but odometer mileage
            determinations for used engines and their parts are not practically
            possible.
          </p>
          <p className="py-2">
            Determination of mileage use for used engines cannot be done with
            certainty since the engines are often sold and/or transferred apart
            from the original vehicle in which they were originally installed.
            Therefore, all representations of mileage are estimates.
          </p>
          <p className="py-2">
            A1 Car Parts offers an extensive engine warranty regardless of the
            mileage, based upon our expertise and evaluation of our products.
          </p>
        </div>
      </Container>
      <Container className="mt-12 flex pt-36">
        <div>
          <h3 className="text-3xl text-orange-400">
            Used Engine Installation Procedure Requirements
          </h3>
          <p className="py-2 font-semibold">Please Read Before Installation</p>
          <p className="py-2">
            We need to follow few steps before installation and an operation of
            recycled or used engines. It is always required to perform certain
            inspections to change over accessories and make routine maintenance
            to assure uninterrupted service. Some used engine parts and
            components have been left attached for your convenience only. These
            accessories may save your time during installation; however, the
            professional installer is accountable for the parts and accessories
            exchange. All parts, change over accessories, wear and tear items
            are left on the engine block for your suitability and are not
            covered under warranty. For more queries and warranty-related
            questions, feel free to visit our website.
          </p>
        </div>
      </Container> */}

      <ContactSection />
    </>
  )
}
