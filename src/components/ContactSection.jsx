import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import satisfaction from '@/images/satisfaction.png'
import Image from 'next/image'
import { List, ListItem } from './List'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-orange-400 px-6 py-20 sm:mx-0 sm:py-16 md:px-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl mb-8 font-medium text-white [text-wrap:balance] sm:text-4xl">
              Why A1 Car Parts?
            </h2>
            <ul role="list" className={clsx('text-base text-neutral-100')}>
              <li className="group mt-2 first:mt-0">
                You will get a FREE PRICE QUOTE on used parts
              </li>
              <li className="group mt-2 first:mt-0">
                Low Mileage & High-Quality parts
              </li>
              <li className="group mt-2 first:mt-0">
                Free Shipping all over the USA
              </li>
              <li className="group mt-2 first:mt-0">
                3-5 years of return/replacement warranty on all parts
              </li>
              <li className="group mt-2 first:mt-0">
                An extensive inventory of used engines covering every make and
                model, domestic as well as foreign
              </li>
              <li className="group mt-2 first:mt-0">
                Short Delivery time, that is 5 to 7 days
              </li>
              <li className="group mt-2 first:mt-0">
                You will get a FREE PRICE QUOTE on used parts
              </li>
              <li className="group mt-2 first:mt-0">
                Short Delivery time, that is 5 to 7 days
              </li>
              <li className="group mt-2 first:mt-0">
                1800+ Inventory Yards all over the USA
              </li>
              <li className="group mt-2 first:mt-0">
                Dedicated customer service to assist you with your queries and
                complaints
              </li>
            </ul>
          </div>
          <Image className="hidden sm:block" src={satisfaction} alt="100% Satisfaction" unoptimized />
        </div>
      </FadeIn>
    </Container>
  )
}
