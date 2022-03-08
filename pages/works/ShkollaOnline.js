import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ShkollaOnline">
    <Container>
      <Title>
        Shkolla <Badge>2020-</Badge>
      </Title>
      <P>
      A content aggregator/organizer platform that connects teachers, 
      students and schools; an online platform to help teachers reach their students, 
      organize their content and help students find lectures easily.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.shkolla.online/">
            https://www.shkolla.online/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, mySql, Php</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/shkolla2.jpg" alt="ShkollaOnline" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
