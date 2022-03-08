
import {
  Link,
  Container,
  Heading,
  Button,
  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp,IoMail,IoLogoDiscord} from 'react-icons/io5'


const Contact = () => (
  <Layout title="Contact">
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:bajramcokaj98@gmail.com" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail/>}
              >
                Send email
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://api.whatsapp.com/send?phone=355675592387" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                Send Whatsapp Dm
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://discordapp.com/channels/@me/maestro#0765/" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                Send Discord Dm
              </Button>
            </Link>
          </ListItem>
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
        
      </Section>

      
    </Container>
    <Container>
      
    </Container>
  </Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'
