import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Founder'];
  const roles = ['Founder', 'Food Critic', 'Product', 'Marketing', 'Guest'];
  const applicationName = 'FoodiePal';
  const tenantName = 'Food Guide';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Founder:
1. As a founder, I want to be able to create and manage my Food Guide, so that I can provide a curated list of restaurants and culinary experiences for users.
2. As a founder, I want to be able to invite and manage Food Critics, Product, and Marketing team members, so that I can build a strong team to support the growth of my Food Guide.
3. As a founder, I want to be able to view and analyze user engagement data, so that I can make informed decisions about the direction of my Food Guide.
4. As a founder, I want to be able to set up and manage partnerships with restaurants, so that I can offer exclusive deals and promotions to FoodiePal users.
5. As a founder, I want to be able to receive feedback from users, so that I can continuously improve the Food Guide and user experience.

Food Critic:
1. As a Food Critic, I want to be able to write and publish reviews of restaurants and culinary experiences, so that users can make informed decisions about where to dine.
2. As a Food Critic, I want to be able to rate restaurants based on various criteria, so that users can easily compare different dining options.
3. As a Food Critic, I want to be able to upload photos and videos of my dining experiences, so that users can get a visual representation of the food and atmosphere.
4. As a Food Critic, I want to be able to respond to user comments and questions on my reviews, so that I can engage with the FoodiePal community.

Product:
1. As a Product team member, I want to be able to manage and update restaurant listings, so that users have accurate and up-to-date information.
2. As a Product team member, I want to be able to monitor and address any technical issues with the FoodiePal app, so that users have a seamless experience.
3. As a Product team member, I want to be able to gather and analyze user feedback, so that we can continuously improve the app and its features.

Marketing:
1. As a Marketing team member, I want to be able to create and manage promotional campaigns, so that we can attract new users and increase engagement.
2. As a Marketing team member, I want to be able to manage our social media presence, so that we can build a strong online community around our Food Guide.
3. As a Marketing team member, I want to be able to analyze the success of our marketing efforts, so that we can optimize our strategies and grow our user base.

Guest:
1. As a guest, I want to be able to browse restaurant listings and reviews, so that I can discover new dining options.
2. As a guest, I want to be able to search for restaurants based on various criteria, such as location, cuisine, and price, so that I can find the perfect dining experience.
3. As a guest, I want to be able to view restaurant menus, so that I can decide if the food options are appealing to me.
4. As a guest, I want to be able to read reviews from fellow food enthusiasts, so that I can get an authentic perspective on the dining experience.
5. As a guest, I want to be able to make reservations with just a few taps, so that I can easily plan my dining experience.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
