import { Flex, Heading, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import * as React from 'react'
import joshuaPictureSrc from 'public/images/homepage/joshua.jpg'
import julienPictureSrc from 'public/images/homepage/julien.jpeg'
import nicolaiPictureSrc from 'public/images/homepage/nicolai.jpg'
import annaFilouPictureSrc from 'public/images/homepage/annaFilou.jpeg'
import theoPictureSrc from 'public/images/homepage/theo.jpeg'
import abhayPictureSrc from 'public/images/homepage/abhay.jpeg'
import lucasPictureSrc from 'public/images/homepage/lucas.png'
import oscarPictureSrc from 'public/images/homepage/oscar.jpeg'
import invictuzPictureSrc from 'public/images/homepage/invictuz.png'
import laszloPictureSrc from 'public/images/homepage/laszlo.jpeg'
import kurniaPictureSrc from 'public/images/homepage/kurnia.jpeg'
import marioPictureSrc from 'public/images/homepage/barretta.jpeg'
import stevePictureSrc from 'public/images/homepage/steve.jpg'
import { Testimonial } from './Testimonial'
import { StaticImageData } from 'next/image'

export type TestimonialData = {
  name: string
  avatarSrc?: StaticImageData
  provider: 'email' | 'productHunt' | 'capterra' | 'reddit'
  role?: string
  content: string | React.ReactNode
}

const testimonials: TestimonialData[][] = [
  [
    {
      name: 'Joshua Lim',
      role: 'Growth Strategist @ Socialhackrs Media',
      avatarSrc: joshuaPictureSrc,
      provider: 'email',
      content:
        'I upgraded my typeforms to typebots and saw a conversion rate increase from 14% to 43% on my marketing campaigns. I noticed the improvement on day one. That was a game-changer.',
    },
    {
      name: 'Laszlo Csömör',
      role: 'Digital Marketing Expert',
      provider: 'email',
      avatarSrc: laszloPictureSrc,
      content: (
        <>
          Typebot is one of the best chatbot builders with its intelligent
          features and drag-and-drop simplicity. Its UI/UX is an earthly
          paradise...
          <br />
          What&apos;s even more important is the person who stands behind it. He
          guarantees that the platform will work and progress for a long time.
        </>
      ),
    },
    {
      name: 'Mario Barretta',
      role: 'Customer Care Manager',
      provider: 'email',
      avatarSrc: marioPictureSrc,
      content: (
        <>
          Thanks to typebot I can finally make site forms much more modern and I
          can collect information that I would have missed before. Also ,thanks
          to Baptiste, the service is always evolving and has excellent
          assistance not only in solving but also in listening to suggestions
          and putting it into action.
          <br />
          <br />
          Thank you thank you and thank you again .
        </>
      ),
    },
  ],
]

export const Testimonials = () => {
  return (
    <Flex as="section" justify="center">
      <VStack spacing={12} pt={'52'} px="4" maxW="1400px">
        <Heading textAlign={'center'} data-aos="fade">
          They&apos;ve tried, they never looked back. 💙
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {testimonials.map((testimonialGroup, index) => (
            <Stack key={index} spacing="6">
              {testimonialGroup.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  )
}
