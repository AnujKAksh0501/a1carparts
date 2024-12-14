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

export default function ReturnPolicy() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              Engines and Drivetrain return policy.
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
          Cancellation Policy
        </p>
        <p className="pt-4 font-display text-base">
          A1 Car Parts knows that the situation may be erratic and that,
          occasionally, you may need to cancel an order. We&apos;ve got you
          covered, so don&apos;t worry! Before receiving our formal order
          confirmation, you are free to cancel your order anytime.
        </p>
        <p className="pt-4 font-display text-base">
          An order cannot be canceled since we want to provide quick and
          efficient service, which means once it has been verified, it is
          quickly processed for shipping. This is because we move quickly to
          make sure your car components get to you as soon as possible.
        </p>
        <p className="pt-4 font-display text-base">
          Please be aware of our order processing schedule over the weekends.
          Orders placed between Friday at 5 EST (2:00 PST) and Monday at 9 EST
          (6:00 PST) cannot be canceled. This is because we try to process
          orders and prepare them for shipping over the weekend.
        </p>
        <p className="pt-4 font-display text-base">
          We do this to shorten wait times and guarantee that your items are
          shipped promptly for on-time delivery. This way, whether you&apos;re
          ordering a part to do a quick repair or just stocking up, you can
          relax knowing it&apos;s coming.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Return Policy
        </p>
        <p className="pt-4 font-display text-base">
          At A1 Car Parts, we stake our name on the high caliber of our
          goods and services, and we are aware that ensuring client happiness
          necessitates offering a robust and thorough return policy.
        </p>
        <p className="pt-4 font-display text-base">
          We value the trust that you invest in us when making a purchase, and
          we want to reassure you that we have a thorough procedure in place to
          address any issues you may have with your order. For most of our
          products, our policy permits authorized returns to be accepted within
          90 calendar days of the customer receiving the product. This timeline
          includes a few of our product lines, including those from Kool Vue,
          Replacement, Bolton Premiere, Evan Fischer, Garage Pro, StyleLine,
          N-Dure, Auto Trust, 4WD Pros, and Item Auto.
        </p>
        <p className="pt-4 font-display text-base">
          To ensure a smooth return process, we request that all returned items
          be unused and in their original condition. All parts and pieces from
          the initial shipment are included in this. Any components assembled
          incorrectly, mounted incorrectly, or damaged due to user mistake are
          not eligible for return.
        </p>
        <p className="pt-4 font-display text-base">
          Please be aware that A1 Car Parts does not accept
          responsibility for any extra expenses incurred due to the installation
          or usage of incorrect or defective parts. This includes any related
          labor costs, installation fees, towing fees, additional repair costs,
          or expenditures for rental cars. Before beginning installations, it is
          advised to confirm that all parts are appropriate and in good
          condition.
        </p>
        <p className="pt-4 font-display text-base">
          As part of our commitment to providing top-notch service, we kindly
          request that you check all packages as soon as you receive your order
          for any missing, damaged, or inadvertent parts. If a broken component
          is delivered, kindly refuse the delivery and arrange for the carrier
          to return the item to the sender as soon as possible. We regrettably
          cannot take responsibility for missing, damaged, or incorrect parts
          after 90 calendar days, irrespective of which party is at fault.
        </p>
        <p className="pt-4 font-display text-base">
          We need to inform you that we are not liable for missing or stolen
          packages; all claims must be made directly to the shipping provider.
          Our return policy is designed with our valued customers in mind,
          aiming to provide them with a seamless experience and ensure their
          satisfaction with our products.
        </p>
        <p className="pt-4 font-display text-base">
          In cases where your shipment arrives with damaged or incorrect items,
          we request that you promptly repackage the item(s) in the original
          shipping container. Please refer to our comprehensive Return Procedure
          outlined below to initiate the return process.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Return Procedure
        </p>
        <p className="pt-4 font-display text-base">
          We ask that you properly check each shipment after receiving your
          order to look for missing, harmed, or inadvertent parts. Please
          repackage the item(s) in the original shipping container if you
          unluckily receive a damaged or wrong item and follow the instructions
          in our return policy, which are listed below:
        </p>
        <p className="pt-4 font-display text-base">
          1. If you receive a damaged part, then do not accept the package.
          Contact the shipper immediately and return it to the sender.
        </p>
        <p className="pt-4 font-display text-base">
          2. If a damaged package is left in your absence by the shipper,
          immediately contact the shipping company to arrange its return to the
          sender.
        </p>
        <p className="pt-4 font-display text-base">
          3. If you discover missing, damaged, or incorrect parts upon receipt,
          please get in touch with us as soon as possible. Your swift reporting
          helps prevent you from being charged for both receipt and return
          freight.
        </p>
        <p className="pt-4 font-display text-base">
          4. Call our Returns Desk at +1-(888) 793-7616. We are available from
          Monday to Friday, 9 am to 11 pm EST (6 am to 8 pm PST), and on
          Saturday from 9 am to 8 pm EST (6 am to 5 pm PST). We are closed on
          Sundays.
        </p>
        <p className="pt-4 font-display text-base">
          Before returning the item, please make sure that the item is wrapped
          securely. To avoid shipment damage, we strongly advise following any
          special packaging recommendations. We won&apos;t be liable if your
          return is damaged because of poor packaging.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Refund Processing
        </p>
        <p className="pt-4 font-display text-base">
          Refunds usually process and credit within 24 to 48 hours of our
          warehouse receiving your returned products. The refund will be
          credited to the same payment method you used for the original
          purchase. When your refund is finalized, a &quot;credit approved&quot;
          email will be sent to you. Although it can take 1–7 business days for
          your banking institution to display the credit in your account, kindly
          be aware of this possibility.
        </p>
        <p className="pt-4 font-display text-base">
          Our goal at A1 Car Parts is to make every customer experience
          great. Please contact us if you have any more queries or worries
          concerning our return or cancellation policies.
        </p>
      </Container>

      <ContactSection />
    </>
  )
}
