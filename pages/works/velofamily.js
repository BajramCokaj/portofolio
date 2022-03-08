import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Velo Family">
    <Container>
      <Title>
        Velo Family <Badge>2019-</Badge>
      </Title>
      <P>
      Not just a normal channel. We are a big family that enjoys playing 
      different games.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Youtube</span>
        </ListItem>
        <ListItem>
          <Meta>Skills Used</Meta>
          <span>Davinci Resolve, Photoshop, After Effects</span>
        </ListItem>
        <ListItem>
          <Meta>Youtube</Meta>
          <Link href="https://www.youtube.com/thevelofamily">
            Velo Family <ExternalLinkIcon mx="2px" />
          </Link>
       </ListItem>
       <ListItem>
          <Meta>Twitch</Meta>
          <Link href="https://www.twitch.tv/velofamily">
          Velo Family <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Discord</Meta>
          <Link href="http://invite.gg/veluco">
          Velo Family <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/mMgFYctOL8g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/velo2.png" alt="velofamily" />
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
