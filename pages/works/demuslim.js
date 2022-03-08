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
  <Layout title="Demuslims">
    <Container>
      <Title>
        DeMuslim <Badge>2022</Badge>
      </Title>
      <P>
      RTS Legend streaming various RTS Titles, currently AoE 4 and Sc2.

      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Youtube</span>
        </ListItem>
        <ListItem>
          <Meta>Skills Used</Meta>
          <span>Davinci Resolve, Photoshop</span>
        </ListItem>
        <ListItem>
          <Meta>Youtube</Meta>
          <Link href="https://www.youtube.com/DeMusliMyt">
            Demuslim <ExternalLinkIcon mx="2px" />
          </Link>
       </ListItem>
       <ListItem>
          <Meta>Twitch</Meta>
          <Link href="https://www.twitch.tv/demuslim/">
            Demuslim <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/VlFNBrWkDoA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/demuslim2.png" alt="demuslim" />
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
