import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import Image from 'next/image'
import Return from '@/images/warranty/return.svg'
import WarrantyImage from '@/images/warranty/warranty.svg'
import Headphones from '@/images/warranty/headphone.svg'
import Shipped from '@/images/warranty/shipped.svg'
import NavButton from '@/components/shared/NavButton'

export default function ShippingPolicy() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              A1 Car Parts shipping policy.
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
          Shipping Policy
        </p>
        <p className="pt-4 font-display text-base">
          Welcome to A1 Car Parts, where we bring a world of
          high-quality auto parts right to your doorstep. Our shipping policy is
          designed to provide a seamless delivery experience for all our valued
          customers. Please take a moment to read through this policy to
          understand how we ensure a fast, efficient, and satisfactory delivery
          process.
        </p>
        <p className="pt-4 font-display text-base">
          <p className="font-display text-xl font-medium text-orange-400 ">
            Non-Refundable Delivery Charges
          </p>
          Delivery charges, including both initial shipping and return costs,
          are non-refundable. This applies across all our product ranges - auto
          parts, tires, aftermarket wheels, or any packaged deals.
        </p>
        <p className="pt-4 font-display text-base">
          <p className="font-display text-xl font-medium text-orange-400 ">
            Definition of Business Days
          </p>
          Our business operations, including shipping and delivery, work on
          &quot;Business Days&quot; which we define as Monday through Friday.
          This excludes Saturdays, Sundays, and public holidays (even if these
          occur on a weekday). Please consider this while estimating your
          delivery schedule.
        </p>
        <p className="pt-4 font-display text-base">
          <p className="font-display text-xl font-medium text-orange-400 ">
            Delivery Timeframe
          </p>
          <ul className="pl-2">
            <li>
              <p>
                <span className="font-display text-lg font-medium text-orange-400 ">
                  Standard Delivery :{' '}
                </span>
                Orders typically take 3 to 5 business days. For example, if your
                order is dispatched from our warehouse on a Monday, the
                countdown begins the following day, i.e., Tuesday. Thus, your
                package should arrive by the following week&apos;s Thursday,
                Friday, or Monday at the latest.
              </p>
            </li>
            <li>
              <p>
                If your order leaves our warehouse on a Friday, the countdown
                begins from the next business day, i.e., Monday. Expect your
                delivery by the end of the following week, by Friday.
              </p>
            </li>
          </ul>
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Order Processing
        </p>
        <p className="pt-4 font-display text-base">
          Our warehouse is operational from Monday through Friday, which
          excludes Saturdays, Sundays, and public holidays. Therefore, orders
          are neither processed nor dispatched on these days.
        </p>
        <p className="pt-4 font-display text-base">
          Please remember that our dedicated customer service team is always at
          your disposal to answer any questions or concerns about your order or
          delivery process. We strive to provide you with an excellent shopping
          experience; your satisfaction is our highest priority.
        </p>
        <p className="pt-4 font-display text-base">
          Disclaimer: A1 Car Parts reserves the right to update this
          shipping policy periodically to accommodate changes in our practices
          or services. We strongly recommend our customers to review this policy
          frequently to stay informed about any changes.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Delivery Timeframe and Process
        </p>
        <p className="pt-4 font-display text-base">
          At A1 Car Parts, we take pride in our efficient order-handling
          process. Most products are packed for shipping or sent from our
          warehouses within 24 to 48 hours of your order being verified. This
          swift turnaround helps us get your required auto parts to you as
          quickly as possible. Delivery times can vary, primarily depending on
          two key factors - the package size and the delivery destination.
          Typically, small to medium-sized packages are delivered to your
          doorstep within 3-5 business days, excluding weekends and holidays,
          from the date they depart from our warehouses. We always strive to
          ensure that our delivery process is quick, allowing you to receive
          your auto parts without undue delay.
        </p>
        <p className="pt-4 font-display text-base">
          Some orders may contain more significant parts, such as bumpers,
          doors, hoods, or other items. Due to the nature of these items, they
          require special handling and are usually shipped via Truck Freight.
          This could extend the delivery time slightly. However, we want to
          highlight that even these bulky items may still be eligible for free
          shipping, underlining our commitment to delivering value to our
          customers. Sometimes, if your order contains multiple parts, these may
          be shipped from different warehouses. This might result in you
          receiving multiple tracking numbers for a single order. While this may
          seem complex, it&apos;s part of our commitment to keep you fully
          informed about the shipping process for each part of your order.
        </p>
        <p className="pt-4 font-display text-base">
          Despite our best efforts to ensure timely deliveries, there may be
          instances where unforeseen circumstances cause delays. We cannot
          accept responsibility for delays that occur due to situations beyond
          our control. However, our dedicated customer service team is always on
          standby to assist and answer any questions or concerns that you may
          have about your delivery. Your understanding and patience in such
          situations are highly appreciated. And as always, we are more than
          happy to help you with any queries about our shipping process or any
          other aspect of your A1 Car Parts experience. We remain
          committed to making your shopping journey with us as seamless as
          possible.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Performance and Accessory Part Orders
        </p>
        <p className="pt-4 font-display text-base">
          We have specific guidelines for shipping performance and accessory
          parts crafted with our customer&apos;s needs in mind. These products
          are exclusively shipped via Ground service to ensure secure and
          cost-effective transportation. Upon confirmation of your order, we
          prioritize processing it swiftly. Unless specified otherwise, most
          orders are dispatched from our warehouse within 24 - 48 hours. The
          delivery timeframe, however, can vary depending on the package&apos;s
          size and location. Small and medium-sized packages typically reach
          their destination within 3 - 5 business days, excluding weekends and
          holidays, from the date they are shipped. This commitment ensures you
          receive your auto parts promptly, enabling you to get your vehicle
          back in top condition as quickly as possible.
        </p>
        <p className="pt-4 font-display text-base">
          However, orders that include larger items such as brush guards,
          running boards, and other oversized parts may require special
          handling. These items are usually shipped via Truck Freight, a service
          that could extend the delivery timeframe slightly due to its nature.
          We assure you that, despite this, we strive to ensure these items
          reach you in the shortest possible time. We are delighted to cater to
          customers located in Alaska, Hawaii, and other territories outside the
          continental United States. Please be aware that shipping charges will
          apply to these regions, and delivery times are typically longer due to
          the distance and logistics involved.
        </p>
        <p className="pt-4 font-display text-base">
          Please note that for performance and accessory part orders, Overnight
          and 2-Day shipping options are not available. This is due to these
          products&apos; specific nature and size, which demand particular
          shipping conditions to ensure they reach you in perfect condition. We
          aim to keep you informed and comfortable throughout the ordering and
          delivery process. Should you have any questions or need further
          assistance, our dedicated customer service team is always ready to
          help.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Damaged Shipments
        </p>
        <p className="pt-4 font-display text-base">
          We work hard to make sure your order gets to you in perfect condition.
          However, we recognize that in rare instances, shipments might arrive
          damaged. Upon receipt, Please inspect your package and follow the
          steps below if any damage, missing parts, or discrepancies are
          noticed.
        </p>
        <p className="pt-4 font-display text-base">
          Upon delivery, examine the shipping package and the items inside for
          any signs of damage, missing or incorrect parts. Our warehouses make
          every effort to prevent shipping damage, but it does occur
          occasionally. DO NOT accept the shipment if it contains a damaged
          part.. Instead, request the shipper to Return-To-Sender (RTS)
          immediately. If a damaged product was delivered to your location while
          you were away, get in touch with the shipping company right once and
          ask them to send it back to the sender. In such instances, please also
          contact us immediately so we can assist you in avoiding freight
          charges both ways.
        </p>
        <p className="pt-4 font-display text-base">
          Please note that we cannot be held responsible for damaged, missing,
          or incorrect parts after 30 business days, regardless of the party at
          fault. Also, we are not liable for lost or stolen packages, and all
          claims related to such incidents must be reported and processed
          through the shipping company.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Risk of Loss
        </p>
        <p className="pt-4 font-display text-base">
          All items purchased from A1 Car Parts are handled under our
          shipping terms, which operate on a F.O.B. (Free on Board) shipping
          point basis. This means that the risk of loss and title for each item
          is transferred to you at the shipping point - this transfer occurs
          when the carrier accepts the goods for transport. Given this policy,
          we are not directly responsible for lost or stolen packages. However,
          we understand the frustration and inconvenience that such incidents
          can cause. We are always ready to assist you in filing a claim with
          the shipping company to address these issues.
        </p>
        <p className="pt-4 font-display text-base">
          If you return any items, please ensure they are packaged securely to
          avoid damage during transit. Secure packaging is crucial to prevent
          potential loss or damage and ensure you&apos;re not liable for such
          loss. It&apos;s essential to contact us immediately if your entire
          shipment has not been received within two (2) full days following the
          carrier&apos;s estimated delivery date. Any discrepancies or issues
          need to be reported to us within twenty-one (21) days from the date of
          shipment to be eligible for a claim. This timeframe allows us to
          intervene effectively and liaise with the shipping company on your
          behalf.
        </p>
        <p className="pt-4 font-display text-base">
          A1 Car Parts, your satisfaction is our priority. Our dedicated
          customer service team is always available to assist you with any
          queries or concerns you may have regarding our shipping policies or
          any other aspect of your experience with us.
        </p>
        <p className="pt-4 font-display text-base">
          Thank you for choosing A1 Car Parts for all your auto parts
          needs.
        </p>
      </Container>
      <ContactSection />
    </>
  )
}
