import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import FormComponent from '@/components/Form'
import { List, ListItem } from '@/components/List'
import { PhoneIcon } from '@heroicons/react/24/outline'
import Return from '@/images/warranty/return.svg'
import Certified from '@/images/warranty/certified.svg'
import WarrantyImage from '@/images/warranty/warranty.svg'
import Headphones from '@/images/warranty/headphone.svg'
import Shipped from '@/images/warranty/shipped.svg'
import NavButton from '@/components/shared/NavButton'

export const metadata = {
  title: 'Policy',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let articles = await loadMDXMetadata('blog')

  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex-column items-center justify-between pt-4 sm:flex md:pt-0">
          <FormComponent />
          <div className="mx-auto max-w-xl px-2 sm:px-0 sm:pl-16">
            <h1 className="hidden font-display text-2xl font-semibold tracking-tight text-orange-400 [text-wrap:balance] sm:text-3xl sm:text-orange-950 md:block">
              Know more about our policy.
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

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Privacy Policy</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      Used A1 Car Parts (&quot;us&quot;, &quot;we&quot;,
                      or &quot;our&quot;) operates a1-carparts.com
                      (hereinafter referred to as &quot;Service&quot;). This
                      privacy policy (&quot;Policy&quot;) outlines our policy
                      regarding the collection, use, and disclosure of personal
                      data when you use our Service and the choices you have
                      associated with that data. As the entrusted guardians of
                      your personal data, we comprehend the importance and
                      enormity of our role. We cherish the connection we have
                      established with you and sincerely appreciate your
                      confidence in us when you choose to share your personal
                      information. Hence, it is incumbent upon us to provide a
                      transparent and detailed explanation of our data
                      collection, use, and security practices.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      This Privacy Policy aims to illuminate the methodologies
                      we employ and our intentions behind collecting and using
                      your personal data (defined within). You must thoroughly
                      read and comprehend this document before interacting with
                      our Site or divulging personal information. We reserve the
                      right to modify this Privacy Policy&apos;s terms at any
                      moment. Should such amendments occur, we will notify you
                      via an updated Privacy Policy posted on our Site,
                      displaying the date of the most recent update. Your
                      sustained engagement with the Site following these
                      modifications implies your acceptance of these changes. We
                      encourage a regular review of our Privacy Policy whenever
                      you use our Site to stay abreast of any modifications and
                      to ensure you fully understand how your personal
                      information will be managed. For details regarding the
                      most recent changes to this Privacy Policy, please refer
                      to the section &quot;Changes to this Privacy Policy&quot;
                      included further.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      We stress the importance of a careful perusal of this
                      Privacy Policy. Your usage of our Site, whether through
                      browsing or availing of its services, signifies your
                      acceptance of this Privacy Policy, all its subsequent
                      updates, and all additional terms, guidelines, and
                      disclosures incorporated by reference. Your acceptance is
                      recognized by your actual usage of the Site or its
                      services, and we consider your continued use of the Site
                      as a consistent endorsement of this Privacy Policy.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      We strongly believe in the value of open and honest
                      communication with our users. Your questions, opinions,
                      and feedback are welcome and instrumental in shaping our
                      services. We are wholeheartedly committed to addressing
                      your concerns, and your trust in us extends beyond this
                      policy document. We eagerly anticipate an ongoing,
                      mutually beneficial relationship with you, with the
                      promise that your privacy remains our topmost priority.
                      It&apos;s more than just a policy - it&apos;s our pledge
                      to uphold, safeguard, and respect your privacy in all our
                      transactions and interactions. Your privacy isn&apos;t a
                      token feature for us - it&apos;s the bedrock upon which
                      our services are built.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Protection of Minors - Children Policy</p>
                    </h2>
                    <ul>
                      <li className="mt-6 text-base text-neutral-600">
                        - Our commitment to privacy extends beyond the scope of
                        adult internet users; we greatly emphasize protecting
                        minors in the digital world. Therefore, it&apos;s
                        important to note that our platform, content, and
                        services are neither designed for nor directed toward
                        children. IF YOU ARE UNDER THIRTEEN AGE, YOU ARE NOT
                        AUTHORIZED TO ACCESS OR USE THE SITES UNDER ANY
                        CIRCUMSTANCES. We adhere strictly to this policy,
                        reflecting our resolve to safeguard the privacy of our
                        young internet users.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We believe in a world where the innocence and privacy
                        of children are fiercely protected, especially in the
                        digital realm. As part of our commitment to preserving
                        this, we make it clear that we do not knowingly collect,
                        use, or disclose personal information from children
                        under 13. If we become aware that we accidentally
                        collected personal information from a child under 13, we
                        shall take prompt action to entirely and promptly remove
                        the information from our records. This principle has our
                        complete and steadfast dedication. We also support
                        parental or guardian participation in their
                        children&apos;s internet activity. We highly advise
                        youngsters (those under the age of 18) to obtain
                        parental or guardian consent before disclosing any
                        personal information to anyone online. In addition to
                        ensuring their safety, asking for parental permission
                        also serves to teach kids the value of privacy.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We encourage parents to monitor their children&apos;s
                        online activity and teach them about responsible and
                        safe behaviour. Open communication between parents and
                        children about the potential dangers and pitfalls of
                        sharing personal information online, as well as guidance
                        on identifying and preventing such dangers, can
                        significantly increase their child&apos;s safety. This
                        is a shared duty; working together can give our kids a
                        safer online experience. In addition, we support using
                        parental control features offered by software developers
                        and online service providers. These technologies can
                        create a safe online environment for kids and stop them
                        from giving out their names, addresses, and other
                        personal information without their parent&apos;s
                        consent. Children can benefit much from the world of the
                        internet, which offers them a limitless supply of
                        information, creative opportunities, and social
                        connections. It could, however, come with risks and
                        hazards. Our collaborative duty as parents, technology
                        providers, and community members is to ensure that our
                        kids may safely and securely explore the online world.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We strongly advise parents and legal guardians to
                        contact us immediately if they suspect a kid under the
                        age of 13 has given us personal information without
                        their permission. In addition to offering support and
                        information, we are prepared to take the appropriate
                        actions to delete such data from our systems. We
                        strongly value your trust and cooperation as we work
                        together to safeguard the internet privacy of our
                        younger generation.
                      </li>
                    </ul>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Cookies and Tracking Technologies</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      - The segment of our Privacy Policy outlined here concerns
                      all data gathered by, or submitted to, the Sites.
                      Gathering this data empowers us to create and refine your
                      shopping journey by customizing it according to your needs
                      and preferences. You retain the choice to refrain from
                      providing certain information; however, it&apos;s
                      important to understand that choosing to withhold
                      information may limit your ability to utilize some of the
                      features offered on our Sites. As you navigate our Sites,
                      every interaction you have with us serves as a data
                      source. We automatically collect and store any information
                      you enter or share on our Sites. These interactions could
                      include product searches, order placements, adding items
                      to your shopping cart, browsing activities, updates to
                      your account information, communications via phone, chat,
                      or email, survey completions, or any interaction with us
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - The information gathered from these activities may
                      include but is not limited to, your name, email address,
                      phone numbers, transactional information (based on your
                      activities on the Sites and content you generate or that
                      relates to your account), correspondences through the
                      Sites, and other communication sent to us. We use this
                      accumulated information either directly or indirectly
                      through our business partners.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - These practices aren&apos;t merely about data collection
                      in the grand scheme of things. They are integral
                      components of a larger effort to construct an
                      ever-evolving, user-centric platform where your needs
                      guide our actions. We are constantly learning and
                      improving, and your data provides us with the valuable
                      insights needed to do this. In addition, we implement
                      stringent data management protocols and employ the latest
                      technologies to ensure the security and confidentiality of
                      your information. We treat the responsibility of
                      protecting your privacy as a top priority and strive to
                      use your data responsibly and ethically.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - At the core, cookies enhance the efficiency and
                      personalization of your online shopping experience. They
                      allow us to track and recall your past activities, update
                      your account data, tailor the website&apos;s features and
                      information to your preferences, and optimize our
                      marketing efforts. Please note, however, that cookies
                      provide us with a wealth of valuable user insight. Still,
                      they only automatically enable us to identify you
                      personally if we can access additional information from
                      third parties. The information we glean from cookies is
                      generally used to analyze trends, administer the Sites,
                      monitor user navigation, compile demographic data about
                      our user base, and steer our marketing strategies.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Most web browsers are designed to accept cookies by
                      default but also offer settings that allow you to decline
                      them. If you&apos;ve set your browser to reject cookies,
                      it may impair some aspects of our Sites, including our
                      Shopping Cart feature. This Privacy Policy exclusively
                      covers our use of cookies and does not pertain to the use
                      of cookies by any third parties. Suppose you wish to opt
                      out of using cookies or non-personal information by
                      third-party service providers. In that case, we recommend
                      reviewing the privacy policies of any third-party sites or
                      services you access. Each interaction you have with us and
                      our Sites is a valuable source of information that helps
                      us to provide a tailored, user-centric experience. We
                      gather, store, and analyze diverse types of data to inform
                      our practices and better understand our user&apos;s
                      preferences and behaviours. The data we collect may
                      include the complete Uniform Resource Locator (URL)
                      clickstream to, through, and from our Sites, which gives
                      us insights into your journey and interaction patterns.
                      The URL clickstream and timestamps provide us with a
                      comprehensive view of the flow and chronology of your
                      visits.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - In addition to this, we track your cookie number, which
                      is essential in ensuring consistent and personalized
                      browsing sessions. It also enables us to remember and
                      display the products you&apos;ve viewed or added to your
                      shopping cart during your visit, making your shopping
                      experience seamless and efficient. When you reach out to
                      us via our toll-free number, we document the phone number
                      you used. This helps us to offer you prompt and
                      personalized customer service. Though used solely for
                      internal purposes, your IP address is crucial in resolving
                      server issues and administering our Sites.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Meanwhile, data like your browser type and version,
                      operating system and platform, page visit metrics, traffic
                      to and from the Sites, ad data, standard web log
                      information, and purchase history offer us an extensive
                      view of your interaction patterns and preferences. By
                      compiling this data, we can identify trends, optimize our
                      marketing strategies, carry out internal research on your
                      interests, and ultimately, serve you better. We may
                      associate this automatically-collected data with your
                      personally identifiable information, creating a holistic
                      user profile that allows us to deliver a truly
                      personalized experience. We also assess session
                      information, such as page response times, download errors,
                      length of visits to specific pages, and page interaction
                      data (like scrolling, clicks, and mouse-overs). Observing
                      how users navigate away from a page gives us vital
                      feedback on user engagement and the effectiveness of our
                      site design.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - When purchasing products from our platform, we require
                      certain essential information from you, namely your email
                      address and delivery details. Your email address serves as
                      a critical communication channel through which we can keep
                      you updated on your order&apos;s status. Through your
                      email, we dispatch essential notifications such as order
                      confirmations, tracking numbers, and other pertinent
                      updates regarding your order, including any potential
                      shipping delays. Beyond order-related correspondence, your
                      email also serves as a gateway through which we can offer
                      you tailored product updates, recommendations, special
                      announcements, and promotional discounts from our Sites.
                      We understand the importance of respecting your privacy,
                      and we assure you that we will never rent or sell your
                      email address to other marketers.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - If you wish to opt out of our marketing communications,
                      you can do so through the unsubscribe link found in every
                      email we send or by contacting us via our website. We may
                      also gather additional information about you from various
                      sources to supplement our records. These sources may
                      include social media platforms such as Facebook or from
                      carriers and other third parties providing us with updated
                      delivery and address information. This data allows us to
                      correct our records and ensure your future purchases or
                      communications are delivered efficiently.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Cooperation with other merchants under co-branded
                      partnerships, or for whom we provide services such as
                      technical, fulfilment, marketing, or other services, may
                      result in shared website visitation information. Search
                      term and search result information, including paid
                      listings, are also gathered to offer more relevant
                      products and services. To further enhance security and
                      prevent fraudulent activities, we may obtain credit
                      history information from credit bureaus and third-party
                      credit card fraud detection services. Should any issues be
                      verifying the information you provide, we may request
                      further documentation, such as a driver&apos;s license,
                      utility bill, or answers to additional online questions to
                      corroborate your information. Our primary objective in
                      gathering this diverse range of data is to provide a safe,
                      efficient, and personalized experience for you, ensuring
                      your interactions with our Sites are as seamless and
                      rewarding as possible.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Outsider Advertisers</p>
                    </h2>
                    {/* <strong className="mt-6 text-base text-neutral-600">
                      We may share your personal information to (internal and
                      external) recipients for the processing purposes described
                      above.
                    </strong> */}
                    <p className="mt-6 text-base text-neutral-600">
                      {/* <strong className="text-orange-400">
                        Within A1 Car Parts :{' '}
                      </strong>{' '} */}
                      Our Sites employ third-party advertising companies to
                      deliver targeted advertising on our behalf. This method of
                      outsourcing enables us to display more relevant and
                      personalized promotions to our users. Moreover, we may
                      send out emails or serve ads that incorporate third-party
                      cookies or action tags. These cookies or action tags play
                      a significant role in analyzing user interaction with the
                      advertising content. They track how you respond to
                      advertisements or emails, allowing us to measure the
                      effectiveness of our advertising campaigns. Some
                      third-party advertisers also use these action tags to
                      incentivise or reward their members who interact with
                      their ads.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      {/* <strong className="text-orange-400">
                        Sharing with Other Users :{' '}
                      </strong>{' '} */}
                      It&apos;s crucial to note that we do not have access to or
                      control over these third-party cookies or action tags.
                      Therefore, despite using these action tags, we do not
                      obtain any user information collected by these
                      advertisers. In addition, we do not share any personally
                      identifiable information with these companies, such as
                      your name, phone number, or address, unless explicitly
                      stated by us or the advertiser. To ensure transparency and
                      safeguard your interests, we have prioritised educating
                      our users about the data collection practices of these
                      third-party advertisers. This step is crucial as it helps
                      our users be aware of the kind of information these
                      companies might collect and how they use it. We encourage
                      you to review the linked information on these practices to
                      understand better how these third-party cookies or action
                      tags operate.
                    </p>
                    {/* <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Service Providers :{' '}
                      </strong>{' '}
                      We work with third parties and allow them to help us,
                      operate and improve the services like hosting providers,
                      e-commerce service providers and analytics service
                      providers. Services provided includes maintaining
                      accounts, customer service, processing or fulfilling
                      orders and transactions, verifying customer information,
                      processing payments, financing, marketing services and
                      analytic services or similar services on behalf of Swap
                      Motors.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Insolvency and Business Transitions :{' '}
                      </strong>{' '}
                      Whenever we file for bankruptcy or get involved in a
                      business transition such as a merger or joint venture with
                      another company, or if we purchase, sell, or reorganize
                      all or a part of the Service or our business or assets or
                      the business or assets of our affiliates, your personal
                      information may be disclosed, including to prospective or
                      actual purchasers in connection with one of these
                      transactions.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Regulators, authorities and other third parties :{' '}
                      </strong>{' '}
                      We may also provide your personal information to
                      governmental agencies and regulators like tax authorities,
                      government authorities and independent external advisors
                      like lawyers, accountants, auditors in accordance with
                      applicable law.
                    </p> */}
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Use of Data</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      Our commitment to delivering a personalized and improved
                      user experience has led us to participate in the Google
                      AdWords Remarketing program. This program is designed to
                      understand our users better, enabling us to offer them a
                      more tailored browsing and shopping experience. The Google
                      Remarketing program uses cookies to track user&apos;s
                      actions as they navigate different pages or sections of
                      our Sites. This tracking forms the basis for creating a
                      Remarketing List. This list comprises users who have
                      visited and left specific areas or pages of our Sites,
                      which then assists in customizing ad content that targets
                      these specific user groups on the Google Display Network.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      Understanding that our participation in the Google AdWords
                      Remarketing program does not involve accessing or
                      controlling these third-party cookies is crucial.
                      Furthermore, we do not gain access to any personal
                      information collected by Google via these cookies. Nor do
                      we share personally identifiable information, such as your
                      name, phone number, email, or home address, with the
                      network of sites that form the Google Display Network
                      unless explicitly indicated by us or the concerned site.
                      Your privacy is our top priority; you have complete
                      control over your ad preferences. If you wish to customize
                      these preferences or prefer to prevent Google&apos;s use
                      of cookies during your browsing sessions, you can do so by
                      visiting the Google Advertising Opt-out page.
                      Alternatively, if you wish to opt out of receiving cookies
                      from third-party ad servers altogether, you can use the
                      Network Advertising Initiative (NAI) Opt-out Tool. These
                      measures give you control over your browsing experience,
                      enabling you to choose how your data is collected and
                      used.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Rights of Users</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      At the core of our Privacy Policy is a commitment to the
                      rights of our users. Your information is your property;
                      you should have complete control over it. Therefore, we
                      adhere to a comprehensive set of user rights that provide
                      you with a full range of controls over your data.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to be Informed:{' '}
                      </strong>{' '}
                      You have the right to be informed about how we collect and
                      use your personal information. Our commitment to
                      transparency ensures that you are always aware of what
                      data we collect, why we collect it, how we use it, and
                      with whom we may share it. We aim to provide clear,
                      concise, and accessible information about our data
                      processing activities in this Privacy Policy and through
                      other means, such as pop-up notices on our website.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right of Access:{' '}
                      </strong>{' '}
                      As a user, you can request access to the personal data we
                      hold about you. This means that you can request a copy of
                      the personal data we have collected about you during your
                      interactions with our services to verify the accuracy of
                      the data and ensure that we are processing it legally.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to Rectification:{' '}
                      </strong>{' '}
                      We understand that your personal information can change
                      over time. If the personal data we hold is inaccurate or
                      incomplete, you have the right to correct it. We encourage
                      you to update your personal information as needed,
                      ensuring that our records remain accurate and up to date.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to Erasure:{' '}
                      </strong>{' '}
                      Also known as the right to be forgotten, this right allows
                      you to request the deletion or removal of your personal
                      information where there is no compelling reason for us to
                      continue processing it. You may exercise this right in
                      certain circumstances, such as when you withdraw consent
                      or when the data is no longer necessary for the purpose
                      for which it was originally collected.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to Restrict Processing:{' '}
                      </strong>{' '}
                      If you believe that your personal data is not accurate, or
                      if you object to our processing, but we are verifying
                      whether our legitimate grounds override your rights, you
                      have the right to request a restriction on the processing
                      of your data. We will store your data during this period
                      but not further process it, except in limited
                      circumstances.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to Data Portability:{' '}
                      </strong>{' '}
                      You have the right to get hold of and reuse your personal
                      information across different services for your own
                      objectives. This enables the safe and secure transfer,
                      copying, or moving of sensitive data from one IT
                      environment to another without compromising its
                      usefulness.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to Object:{' '}
                      </strong>{' '}
                      You have the right to object to processing your personal
                      data in certain circumstances. For example, you can object
                      to direct marketing and processing for purposes of
                      scientific or historical research and statistics. Upon
                      receiving an objection request, we will stop processing
                      your personal data unless we can demonstrate compelling
                      legitimate grounds for the processing.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Automated Decision-Making and Profiling Rights:{' '}
                      </strong>{' '}
                      You have rights concerning automated decisions, including
                      profiling. If an automated decision has been made that has
                      a legal or similarly significant effect on you, you have
                      the right to challenge this decision and request a review
                      by a human. These rights serve to give you control and
                      understanding over your personal data. We are committed to
                      honouring these rights and encourage you to exercise them
                      as you see fit. We strive to handle all requests swiftly
                      and fairly, always keeping your privacy as our top
                      priority. Remember, your data is yours, and we are merely
                      the custodians of it.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Information We Collect</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      The protection of your privacy is a responsibility we take
                      with utmost seriousness. Your contact information is
                      treated with high respect, and we don&apos;t engage in
                      selling or leasing it to other marketing firms. However,
                      there might be instances where we share your information,
                      including your personally identifiable information, with
                      third parties as described in this Privacy Policy. We may
                      decide to share the data we accumulate from you with our
                      affiliates or subsidiaries under our jurisdiction. These
                      entities may choose to use the information for marketing
                      ventures. Should this be the case, the use and disclosure
                      of your data will be regulated under this Privacy Policy,
                      ensuring your privacy remains intact.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      We may also choose to share specific personal information
                      about you with companies that undertake work for us to
                      deliver products and services on our behalf. These
                      organizations assist us in various aspects such as data
                      processing, customer order fulfilment, product delivery or
                      marketing, customer data management, or customer service.
                      In this context, these companies are strictly prohibited
                      from misusing your personal data for unauthorized
                      intentions. They are obligated to guard your data in line
                      with our policies unless we inform you otherwise at the
                      time of collection.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      The provision of this information is essential for certain
                      functions on our site. With it, it may be easier for you
                      to make purchases, receive product deliveries, access
                      customer support, or use specific services, offers, and
                      content on our site. For instance, to complete your
                      purchase, we may need to share your personal data with a
                      third-party payment processor based on your preferred
                      payment method. We also collaborate with third parties
                      such as the U.S. Postal Service, Federal Express, and
                      United Parcel Service for product shipment and delivery
                      assurance.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Secure Encryption</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      We utilize advanced security protocols like Secure Socket
                      Layer (SSL) or Transport Layer Security (TLS), which are
                      universally recognized and supported by the majority of
                      modern internet browsers. These protocols are most
                      effective when used with the latest encryption version of
                      Internet browsers. SSL and TLS technologies represent the
                      pinnacle of internet security. They automatically encode
                      information transmitted over the internet, authenticate
                      the identities of servers involved in transactions through
                      certificates and digital signatures, and ensure the
                      message content remains intact throughout its
                      transmission.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      Our minimum security measure is SHA-256-bit SSL
                      transaction encryption for Internet browsers. This robust
                      encryption mechanism ensures the safe transmission of your
                      data. Please refer to its documentation or user guide for
                      information about your browser&apos;s specific security
                      features. We transmit the encrypted credit card number to
                      the appropriate payment processor when processing an
                      order. However, in the interest of your privacy and in
                      adherence to the Payment Card Industry Data Security
                      Standard, we reveal only the last four digits of your
                      credit card numbers when confirming an order.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      In an era where data breaches and cyber threats are
                      rampant, we are committed to maintaining the integrity and
                      security of your personal information. Our focus on
                      adopting cutting-edge security measures underscores this
                      commitment. By entrusting us with your personal
                      information, you can rest assured that we have the
                      technology, policies, and procedures in place to safeguard
                      it. Your confidence in our security measures is paramount
                      to us, and we constantly strive to exceed your
                      expectations in maintaining the confidentiality and
                      security of your data.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      As part of our security system, we have procured a digital
                      certificate from Comodo Group, Inc., a leading provider of
                      Internet trust services. This assures you of the safety
                      measures in place when interacting with our platform. When
                      you navigate into a secure section of our site, an icon of
                      a closed lock or a solid key should appear in the lower
                      bar of your browser window. Clicking this icon reveals a
                      small popup window that displays site-security
                      information. This digital certificate guarantees that your
                      personal information is transmitted securely, encrypted to
                      our web server, and not to an unidentified or unauthorized
                      server. We are committed to offering the highest levels of
                      security and transparency so you can confidently and
                      confidently navigate our site.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      Our websites are subject to continuous testing and have
                      been certified to pass stringent security assessment tests
                      conducted by leading third-party services. This
                      high-level, third-party security evaluation is a testament
                      to our commitment to protecting you from potential threats
                      such as identity theft and credit card fraud, offering you
                      a secure environment to shop and engage. The safety of
                      your personal data is further fortified by the unique
                      password you create when you set up an account with us
                      through our &quot;Sign In/Quick Checkout&quot; page. It
                      would help if you kept this password confidential, as it
                      is your personal key to your account information.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      Please be aware that no representatives from our company
                      will ever request your password. Your password&apos;s
                      secrecy is your responsibility. We believe in making your
                      experience with us convenient, enjoyable, and secure. As
                      such, we continue implementing advanced security measures
                      and educating our users about their role in safeguarding
                      their data. Remember, the strength of your account&apos;s
                      security is also dependent on the complexity and
                      confidentiality of your password. Together, we can create
                      a safer digital environment, giving you the confidence to
                      use our sites for your needs.
                    </p>
                    {/* <p className="mt-3 text-base text-neutral-600">
                      To the extent provided by the law of your jurisdiction,
                      you may also have the following rights:
                      <ul className="pl-4">
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to withdraw your consent :{' '}
                          </strong>{' '}
                          You can withdraw your consent by clicking on the
                          withdraw option in relevant communication or by
                          contacting relationship manager (for existing
                          customers). Such a withdrawal will not affect the
                          lawfulness of the processing prior to the consent
                          withdrawal.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request access to your personal data :{' '}
                          </strong>{' '}
                          The access to your personal information includes the
                          purposes of the processing, the categories of personal
                          data concerned, and the recipients or categories of
                          recipients to whom the personal data have been or will
                          be disclosed. You also have the right to obtain a copy
                          of the personal data undergoing processing free of
                          charge.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request rectification :{' '}
                          </strong>{' '}
                          You have the right to obtain the rectification from us
                          of inaccurate personal data.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request erasure (right to be forgotten) :{' '}
                          </strong>{' '}
                          Where provided by applicable data protection law, you
                          have the right to obtain from us the erasure of
                          personal data concerning you and we are obliged to
                          erase such data.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request restriction of processing :{' '}
                          </strong>{' '}
                          Where provided by applicable data protection law, you
                          have the right to obtain from us restriction of
                          processing of your personal information and we are
                          obliged to restrict such processing.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request data portability :{' '}
                          </strong>{' '}
                          You have the right to receive your provided data in a
                          structured, commonly used and machine-readable format
                          and also have the right to transmit those personal
                          data to another entity without interference from us.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to object :{' '}
                          </strong>{' '}
                          Under applicable data protection law, you have the
                          right to object any time to the processing of your
                          data by us. Such right to object especially applies if
                          we collect and process your data for direct marketing
                          purposes. To exercise your rights, please contact us
                          by using the contact information at the end of this
                          Notice. Additionally, under European Union General
                          Data Protection Regulation (GDPR), you also have the
                          right to lodge a complaint with the competent data
                          protection.
                        </li>
                      </ul>
                    </p> */}
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Information Security</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      Under Section 1798.83 of the Alabama Civil Code, Alabama
                      residents have the right to inquire with businesses about
                      the kinds of personal information shared with third
                      parties for direct marketing purposes. They can also learn
                      about the identities of these third parties with whom the
                      business has shared such data over the course of the
                      preceding calendar year, as long as the resident has an
                      established business relationship with said business.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      If you wish to exercise this right and seek details about
                      the information disclosure provided by us by Section
                      1798.83 of the Alabama Civil Code, we are more than
                      willing to help. We recognize the importance of
                      transparency in our operations and our commitment to
                      respecting your privacy rights.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Changes in This Policy</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      The latest modification to this Privacy Policy took place
                      on July 26, 2023. These revisions elaborated on the
                      potential for you to receive promotional materials from us
                      via mail or email in accordance with the conditions
                      specified in this Privacy Policy. The changes also shed
                      light on how we might employ cookies and action tags to
                      market our products to you.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      It&apos;s crucial to understand that this Privacy Policy
                      isn&apos;t static and can be altered at any moment. We
                      reserve the unilateral right to update or change this
                      Privacy Policy based on our discretion, so we strongly
                      encourage you to review it frequently. Any changes or
                      updates to our Privacy Policy will be promptly posted on
                      this page, keeping you well-informed about how we handle
                      and protect your personal information. Your understanding,
                      trust, and satisfaction remain our highest priorities, and
                      we strive to uphold transparent and ethical data-handling
                      practices.
                    </p>
                    {/* <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to object :{' '}
                      </strong>{' '}
                      The service is proposed for users over the age of 18 and
                      is not directed to children under 13. We don&apos;t
                      collect personal information from children under 13. If in
                      case any information reached to us without parental
                      consent, please contact us by using the &quot;contact
                      us&quot; at the end of this Notice, and we will take steps
                      to remove or terminate that information.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        California Residents :{' '}
                      </strong>{' '}
                      <ul className="pl-4">
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">a : </strong>{' '}
                          California residents can contact with us by using the
                          contact information at the end of this Notice.
                          California Civil Code Section 1798.83 permits
                          California residents to request and obtain services
                          from us, once a year free of charge, a list of the
                          third parties to whom we have disclosed personal
                          information (as defined under that statute) of that
                          California resident, for direct marketing purposes in
                          the preceding calendar year and the categories of that
                          kind of personal information that was disclosed to
                          them.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">b : </strong> Swap
                          Motors. Service is not intended for anyone under the
                          age of 18, if you are a California resident under age
                          18 and feels like your information has become
                          publicly-available through the service and you are
                          unable to remove it, you may request removal by
                          contacting us at: support@A1 Car Parts.com. While
                          requesting for removal, you must be specific about the
                          information, and URL for each page where the
                          information is located.
                        </li>
                      </ul>
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Modification of this Notice :{' '}
                      </strong>
                      Occasionally we post changes to this Notice, where we
                      revise the &quot;Last updated date&quot; at the top of
                      this Notice in order to notify you of changes. We always
                      suggest you to check the service time to time to inform
                      yourself of any changes or any of other policies. If you
                      don&apos;t agree to any update, please do not use the
                      service.
                    </p> */}
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
