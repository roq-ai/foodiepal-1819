import { Button, Flex, Heading, Image, Text, Stack, useBreakpointValue } from '@chakra-ui/react';

import { signIn, signUp, requireNextAuth } from '@roq/nextjs';

import Head from 'next/head';
import { HelpBox } from 'components/help-box';

function HomePage() {
  return (
    <>
      <Head>
        <title>FoodiePal</title>

        <meta
          name="description"
          content="Welcome to FoodiePal: Your ultimate guide to exploring and savoring the finest culinary experiences. Discover diverse cuisines, browse menus, read genuine reviews, and effortlessly reserve your next dining adventure."
        />
      </Head>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack position="relative" spacing={6} w={'full'} maxW={'lg'}>
            <HelpBox />
            <Image src="/roq.svg" alt="Logo" w="150px" mb="8" />
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'}>Explore the</Text>{' '}
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'cyan.400',
                  zIndex: -1,
                }}
              >
                FoodiePal
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Welcome to FoodiePal: Your ultimate guide to exploring and savoring the finest culinary experiences.
              Discover diverse cuisines, browse menus, read genuine reviews, and effortlessly reserve your next dining
              adventure.
            </Text>
            <Text>Founder</Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'cyan.500'}
                color={'white'}
                _hover={{
                  bg: 'cyan.700',
                }}
                onClick={() => signUp('founder')}
              >
                Signup
              </Button>
              <Button rounded={'full'} onClick={() => signIn('founder')}>
                Login
              </Button>
            </Stack>
            ,<Text>Guest</Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'cyan.500'}
                color={'white'}
                _hover={{
                  bg: 'cyan.700',
                }}
                onClick={() => signUp('guest')}
              >
                Signup
              </Button>
              <Button rounded={'full'} onClick={() => signIn('guest')}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={'/homebg.jpg'} />
        </Flex>
      </Stack>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/users',
})(HomePage);
