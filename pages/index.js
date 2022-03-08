import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumbVelofam from '../public/images/links/velofam.jpeg'
import thumbShkolla from '../public/images/works/shkollathumb.jpeg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a digital creator based in Albania!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Bajram Çokaj
          </Heading>
          <p>Digital Craftsman ( Video Editor / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/bajram.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Bajram is a freelance digital creator and developer based in Tirana with a
          passion for building digital services/stuff he wants. His passion is discovering 
          new stuff in the digital and tech world, and implementing it into peoples lives.
          When not online, he loves spending time with his guitar. Currently, he is working
          as a video editor at Velo Family.
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Koplik, Albania.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Bachelors degree on Computer Engineering, Epoka University
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at<Link href='https://www.shkolla.online/'target="_blank"> Shkolla online </Link>
          won first place.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a content creator at Velo Family
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Playing Guitar, Photography
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/BajramCokaj" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @BajramCokaj
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://instagram.com/bajramcokaj" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @bajramcokaj
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCQFhZ8UHdINi0WCrzIVEeGA"
            title="Velo Family"
            thumbnail={thumbVelofam}
          >
            YouTube channel I work For
          </GridItem>
          <GridItem
            href="https://www.shkolla.online/"
            title="ShkollaOnline"
            thumbnail={thumbShkolla}
          >
            An online school system
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
