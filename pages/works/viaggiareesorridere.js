import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Viaggiare e Sorridere <Badge>2019-2020</Badge>
      </Title>
      <P>
        A tourism/dental clinic.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Facebook, Instagram, Youtube</span>
        </ListItem>
        <ListItem>
          <Meta>Skills Used</Meta>
          <span>After Effects, Davinci Resolve, Photoshop, Canon Camera</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      
      <WorkImage src="/images/works/viaggiare.jpeg" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
