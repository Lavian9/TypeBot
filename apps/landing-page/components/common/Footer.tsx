import React, { ReactNode } from 'react'

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { NextChakraLink } from './nextChakraAdapters/NextChakraLink'
import Image from 'next/image'

const facebookGroupUrl = 'https://www.facebook.com/'
const TypeBotLinkedInUrl = 'https://www.linkedin.com/company/hypecode'
const TypeBotTwitterUrl = 'https://twitter.com/'
const TypeBotInstagramUrl = 'https://www.instagram.com/'

const baptisteTwitterUrl = 'https://twitter.com/baptisteArno'
export const contactUrl = 'https://bot.typebot.xyz/landing-page-bubble-en'
export const roadmapLink = 'https://app.typebot.xyz/feedback'
export const documentationLink = 'https://docs.typebot.xyz'
export const githubRepoLink = 'https://github.com/'
export const hypecode = 'https://hypecode.dev'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={40} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Image
                src="/images/logo.webp"
                width="30"
                height="30"
                alt="logo"
              />

              <Heading as="p" fontSize="lg">
                TypeBot.
              </Heading>
            </HStack>
            <Text>Made with ❤️</Text>
            <NextChakraLink
              href={hypecode}
              isExternal
              color="gray.400"
            >
              HypeCode.dev
            </NextChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <NextChakraLink
              href={documentationLink}
              isExternal
              color="gray.400"
            >
              Documentation
            </NextChakraLink>
            {/* <NextChakraLink href={roadmapLink} isExternal color="gray.400">
              Roadmap
  </NextChakraLink>*/}
            <NextChakraLink href={'/pricing'} color="gray.400">
              Pricing
            </NextChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            {/*<NextChakraLink href={githubRepoLink} isExternal color="gray.400">
              GitHub repository
</NextChakraLink>}
            <NextChakraLink href={facebookGroupUrl} isExternal color="gray.400">
              Facebook Group
            </NextChakraLink>*/}
            <NextChakraLink
              href={TypeBotTwitterUrl}
              isExternal
              color="gray.400"
            >
              Twitter
            </NextChakraLink>
            <NextChakraLink
              href={TypeBotLinkedInUrl}
              isExternal
              color="gray.400"
            >
              LinkedIn
            </NextChakraLink>
            <NextChakraLink
              href={TypeBotInstagramUrl}
              isExternal
              color="gray.400"
            >
              Instagram
            </NextChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <NextChakraLink href="/about" color="gray.400">
              About
            </NextChakraLink>
            <NextChakraLink href="mailto:info@typebot.xyz" color="gray.400">
              Contact
            </NextChakraLink>
            <NextChakraLink href={'/terms-of-service'} color="gray.400">
              Terms of Service
            </NextChakraLink>
            <NextChakraLink href={'/privacy-policies'} color="gray.400">
              Privacy Policy
            </NextChakraLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Heading>
  )
}