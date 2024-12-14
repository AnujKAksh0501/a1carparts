import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { StylizedImage } from '@/components/StylizedImage'
import BannerChoose from '@/images/banner-choose.webp'
import dynamic from 'next/dynamic'
const Intro = dynamic(() => import('@/components/Hero/Intro').then(module => module.Intro))

export function Services() {
    return (
      <>
        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  src={BannerChoose}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="What is the Process for making a Purchase?">
                To place an order, you can either call our sales team at
                1800-518-9776 or soon you can place an order online on our website
                (our website will shortly feature online ordering). We accept all
                major credit cards such as VISA, Master Card, American Express,
                and Discover Card, as well as cashiers checks and money orders by
                mail. Please keep in mind that cashiers checks and money orders
                take longer to obtain and that after we receive the cashiers check
                or money order, we will contact you to verify your order and ship
                it out as per our delivery commitment.
              </ListItem>
              <ListItem title="Is financing available through your company?">
                Yes, we do provide financing through our lending partner
                PAYTOMORROW. Please refer to the financing page for more
                information and to get the pre-approval link on your email.
              </ListItem>
              <ListItem title="Is it possible for me to come and collect my auto-parts in person?">
                Unfortunately, we are unable to offer a pickup option as our
                inventory is dispersed from multiple supplier locations. However,
                all orders placed within the United States come with free
                shipping.
              </ListItem>
              <ListItem title="What components are included with a purchase of a used Engine?">
                The engine assembly that will be received will include the main
                internal parts, such as the block, head, piston, camshaft, and
                crankshaft, as well as other components. Additional parts, such as
                change-over accessories and items that may show wear and tear, may
                also be included but will not be covered by warranty and will not
                be charged for.
              </ListItem>
            </List>
          </div>
        </Container>
        {/* <Container>
          <div className="grid w-full grid-cols-1 align-middle sm:grid-cols-2">
            <Image src={BannerChoose} alt="About us" unoptimized /> */}
        <Container className="pt-4">
          <Intro
            eyebrow="About"
            title="Who are We?"
            className="mt-24 sm:mt-32 lg:mt-40"
          >
            <p>
              A1 Car Parts was established in 2010 with the objective to
              provide customers with high- quality and low mileage used engines.
              Keeping the fact in mind that new vehicle or engine can cost a
              fortune, we offer largest collection of car engines for sale which
              is as reliable as the new one & will deliver excellent performance
              at a low price. We are very particular about the quality of used
              engines and try & test every piece before selling. Hence, you can be
              assured of purchasing a reliable used engine for your vehicle.
            </p>
          </Intro>
        </Container>
        {/* </div>
        </Container> */}
      </>
    )
  }