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
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

const facebookGroupUrl = 'https://www.facebook.com/groups/'
const typebotLinkedInUrl = 'https://www.linkedin.com/company/'
const typebotTwitterUrl = 'https://twitter.com/'
const baptisteTwitterUrl = 'https://twitter.com'
export const contactUrl = 'https://bot.typebot.xyz/landing-page-bubble-en'
export const roadmapLink = 'https://app.typebot.xyz/feedback'
export const documentationLink = 'https://docs.typebot.xyz'
export const githubRepoLink = 'https://github.com/'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo boxSize="30px" />
              <Heading as="p" fontSize="lg">
                Typebot
              </Heading>
            </HStack>
            <Text>
              Made with ❤️ by{' '}
              <TextLink href="https://HypeCode.dev/">HypeCode.dev</TextLink>
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <TextLink href={documentationLink} isExternal>
              Documentation
            </TextLink>
            <TextLink href={'/pricing'}>Pricing</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            <TextLink href="https://dc.hypecode.dev" isExternal>
              Discord Server
            </TextLink>
            <TextLink href="mailto:admin@typebot.xyz" isExternal>
              Mail
            </TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">About</TextLink>
            <TextLink href="mailto:admin@typebot.xyz">Contact</TextLink>
            <TextLink href={'/terms-of-service'}>Terms of Service</TextLink>
            <TextLink href={'/privacy-policies'}>Privacy Policy</TextLink>
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
