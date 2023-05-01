import { Stack } from '@chakra-ui/react'
import { Footer } from 'components/common/Footer'
import { SocialMetaTags } from 'components/common/SocialMetaTags'

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <Header />
      <SocialMetaTags currentUrl={`https://typebot.xyz/about`} />
      <Stack
        spacing={10}
        mx="auto"
        maxW="3xl"
        my="20"
        fontSize="17px"
        textAlign="justify"
      >
        <Flex w="full">
          <Heading as="h1">TypeBot's story</Heading>
        </Flex>

        <Text>
          TypeBot is a saas where anyone can create free chatbots that they can
          easily use and integrate into all platforms.
        </Text>

        <Text>
          Typebot team consists of young, dynamic and enthusiastic great
          software developers.
        </Text>

        <Text>
          Typebot has been built by leveraging the power of open source and
          continues to be developed.
        </Text>
        <Text>
          Besides the free plan, we also have some great paid plans for those
          who want more. Our great customer support applies to every package.
        </Text>
        <Text>
          Thanks to Baptiste Arnaud, this software is a variant of TypeBot
          software.
        </Text>

        <Text>
          If you have any questions, feel free to reach out to us at{' '}
          <TextLink
            href={'https://dc.hypecode.dev'}
            textDecor="underline"
          >
            discord server
          </TextLink>
        </Text>
      </Stack>
      <Footer />
    </div>
  )
}

export default AboutPage