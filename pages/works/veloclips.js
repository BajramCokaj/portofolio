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
  <Layout title="Velo Clips">
    <Container>
      <Title>
        Velo Clips <Badge>2019-</Badge>
      </Title>
      <P>
      A channel where we showcase small clips from the main channel
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
          <Link href="https://www.youtube.com/watch?v=r30991wiDPY">
            Velo Clips <ExternalLinkIcon mx="2px" />
          </Link>
       </ListItem>
       <ListItem>
          <Meta>Twitch</Meta>
          <Link href="https://www.twitch.tv/velofamily">
            Velo Clips <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/r30991wiDPY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/veloclips2.png" alt="veloclips" />
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
