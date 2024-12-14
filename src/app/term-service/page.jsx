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

export default function TermService() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              A1 Car Parts term service.
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
          Term Of Services
        </p>
        <p className="pt-4 font-display text-base">
          Greetings, and thanks for visiting A1 Car Parts Quality Used
          Engines! We are very glad you are here. We&apos;re committed to giving
          you high-quality used engines that you can rely on, but before you
          start, we ask that you become aware of the policies that apply when
          using our website.
        </p>
        <p className="pt-4 font-display text-base">
          A set of rules and regulations govern how our website works. You
          automatically accept these terms by visiting, browsing, or otherwise
          using our website. They are legally enforceable rules that you promise
          to abide by, not just empty phrases. They are there to ensure
          everyone—including you, our other guests, and us as a service
          provider—is treated with respect and safety.
        </p>
        <p className="pt-4 font-display text-base">
          Additionally, these agreements incorporate all applicable laws and
          regulations. As a result, by accepting our conditions, you also
          guarantee to abide by all regional and municipal rules that may be in
          force in your area. Although legalese might be confusing, these words
          help to keep the workplace polite and safe. Please take the time to
          read them thoroughly, and if you find that you do not agree with any
          of them, do not use our website.
        </p>
        <p className="pt-4 font-display text-base">
          As you can see, our website has a wealth of information, including
          words, pictures, images, and other materials. We&apos;re proud of the
          tools we&apos;ve developed to make it easier for you to comprehend and
          use our goods. It&apos;s important to note that copyright and
          trademark laws protect all the content you see on this site.
        </p>
        <p className="pt-4 font-display text-base">
          Everything you see on our website, including the written content,
          photographs, graphics, and trademarks, is the property of Engines &
          Drivetrain Quality Used Engines and is legally protected. This is what
          we mean when we discuss copyright and trademark laws. This implies
          that using, copying, or distributing our content without express
          authorization is forbidden. It was established to honor and safeguard
          the time, money, and resources we invested in creating and maintaining
          our website.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Use License
        </p>
        <p className="pt-4 font-display text-base">
          Part of this relationship involves being transparent and clear about
          the rights we provide to our users regarding the materials available
          on our website.
        </p>
        <p className="pt-4 font-display text-base">
          We want to acknowledge that we&apos;re granting you the privilege to
          temporarily download a single copy of our materials for your personal,
          non-commercial use. When discussing materials, we mean any information
          or software you find on our site. Think of it as borrowing a book from
          a library; you can enjoy it, but the book remains the library&apos;s
          property.
        </p>
        <p className="pt-4 font-display text-base">
          Let&apos;s be clear, though; this privilege is a license. It permits
          you to use our resources but is not an ownership title. You can liken
          it to being given keys to a friend&apos;s house - you can visit, but
          it doesn&apos;t belong to you.
        </p>
        <p className="pt-4 font-display text-base">
          We need to lay down some ground rules about this license:
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          <span className="font-display text-lg font-medium text-orange-400">
            No Alterations:
          </span>
          Our materials result from our team&apos;s hard work and creativity. As
          such, altering or copying them in any manner is strictly off-limits.
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          <span className="font-display text-lg font-medium text-orange-400">
            Personal Use Only:
          </span>
          Our materials are for your eyes only. Using them for commercial
          purposes or public display, whether for profit or not, isn&apos;t
          permitted.
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          <span className="font-display text-lg font-medium text-orange-400">
            No Reverse Engineering:
          </span>
          Our software is like a secret recipe; you can enjoy the end result,
          but trying to decode or reverse engineer it is prohibited.
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          <span className="font-display text-lg font-medium text-orange-400">
            Respect Proprietary Marks:
          </span>
          Copyright marks or other proprietary notations must be left intact.
          They&apos;re like the signature on a painting – a token of ownership
          and creativity.
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          <span className="font-display text-lg font-medium text-orange-400">
            sNo Transferring:
          </span>
          Just like you wouldn&apos;t pass on the keys to your friend&apos;s
          house to someone else, you&apos;re not allowed to transfer our
          materials to another person or &quot;mirror&quot; them on another
          server.
        </p>
        <p className="pl-2 pt-4 font-display text-base">
          If these rules are not respected, we reserve the right to terminate
          your license at any moment. Upon termination, whether caused by a
          violation or the natural expiration of the license, any downloaded
          materials in your possession must be promptly deleted, be it in
          electronic or printed format.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Disclaimer
        </p>
        <p className="pt-4 font-display text-base">
          We put considerable effort into providing valuable and accurate
          information. However, the world of used engines is vast and
          continuously evolving, and thus, we believe in maintaining
          transparency with our users. While we strive to present the best, we
          must clarify that A1 Car Parts Quality Used Engines disclaims
          all explicit and implied warranties. These disclaimers cover aspects
          including, but not limited to, merchantability, fitness for a
          particular purpose, and non-infringement of intellectual property.
          What does this mean for you? While we aim to be a trusted resource, we
          cannot guarantee the marketability of the engines listed, their
          specific suitability for your needs, or the freedom of all content
          from intellectual property rights.
        </p>
        <p className="pt-4 font-display text-base">
          Furthermore, while we work diligently to maintain the accuracy and
          reliability of our materials, we cannot provide absolute assurance due
          to the dynamic nature of the auto industry. This extends to any linked
          sites we may direct you to. We are committed to your satisfaction, but
          it is always essential for users to verify information before making
          decisions.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Limitations
        </p>
        <p className="pt-4 font-display text-base">
          We understand that our users may have questions or issues that extend
          beyond our regular operating hours. If you contact us after our listed
          hours, don&apos;t worry. Simply leave us a message, and rest assured
          we will get back to you promptly to address your concerns.
        </p>
        <p className="pt-4 font-display text-base">
          However, it&apos;s crucial to understand certain limitations about our
          liability. We strive to provide a useful and reliable platform, but
          there may be situations where you need help with using the materials
          on our site or face unforeseen interruptions. We regret any
          inconvenience this may cause, but A1 Car Parts Quality Used
          Engines or our suppliers cannot be held responsible for any resulting
          damages. These damages might include, but aren&apos;t limited to, data
          loss or profit due to business interruption.
        </p>
        <p className="pt-4 font-display text-base">
          This disclaimer applies even if A1 Car Parts Quality Used
          Engines or an authorized representative from our side has been
          notified orally or in writing about the potential of such damage. We
          understand that certain jurisdictions do not allow limitations on
          implied warranties or liability for consequential or incidental
          damages, so these restrictions might not apply to you.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Accuracy of Materials
        </p>
        <p className="pt-4 font-display text-base">
          While we strive to ensure the highest quality, we understand that our
          site occasionally has technical, typographical, or photographic
          errors. In a fast-paced digital world, these occurrences are only
          partially avoidable. A1 Car Parts Quality Used Engines cannot
          guarantee that all of our site&apos;s materials will always be
          accurate, complete, or up-to-date. The used engine market is dynamic,
          and information can change rapidly. Thus, we may update or change the
          materials on our site at any given time without prior notice. However,
          we also want to be upfront that while we will do our best to provide
          current information, we don&apos;t commit to updating all materials
          consistently.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Links
        </p>
        <p className="pt-4 font-display text-base">
          As part of our services, we may provide links to other websites for
          your convenience. However, we need you to understand that we have yet
          to review every single one of the sites linked to our platform. Our
          provision of these links does not suggest that we verify, approve, or
          endorse the linked sites. Each of these external sites has its own set
          of rules, regulations, and privacy policies, which may differ from
          ours. So, we&apos;re not responsible or liable for these sites&apos;
          content, actions, or services. It&apos;s crucial to remember that
          visiting any linked website is done at your own risk. We strongly
          advise you to carefully read the terms and conditions and privacy
          policies of every website you access through our links.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Modifications
        </p>
        <p className="pt-4 font-display text-base">
          The terms of service for our website may occasionally need to be
          updated or modified without prior notice due to the dynamic nature of
          our business and the digital environment. These modifications might be
          brought on by new rules or legislation or by enhancements we make to
          our platform to give you a better user experience. So that you are
          aware of any changes, we advise you to examine these conditions from
          time to time. You agree to abide by the most recent version of the
          terms of service when you use our website following any changes to
          these terms. Your continued use confirms that you agree to the updated
          terms. We sincerely appreciate your cooperation and understanding as
          we strive to give you the finest service possible.
        </p>
      </Container>
      <Container className="pt-0 sm:pt-32">
        <p className="font-display text-3xl font-medium text-orange-400 ">
          Governing Law
        </p>
        <p className="pt-4 font-display text-base">
          It&apos;s important to realize that the laws of Birmingham will apply
          to the interpretation of our terms and conditions. This indicates that
          all of the guidelines we&apos;ve provided for using our website are
          based on the laws of this country. By choosing to use our platform,
          you are implicitly agreeing to abide by these laws. Additionally, you
          unconditionally and irrevocably consent to the Birmingham courts
          having sole jurisdiction over any legal matters resulting from your
          use of our website.
        </p>
        <p className="pt-4 font-display text-base">
          Please remember that these terms are designed to ensure fair use,
          protect your rights, and enable us to provide you with our services.
          We sincerely value your comprehension and compliance in sticking to
          these guidelines.
        </p>
      </Container>

      <ContactSection />
    </>
  )
}
