import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShkolla from '../public/images/works/shkollathumb.jpeg'
import thumbVelostars from '../public/images/works/velostars.jpeg'
import thumbVeloClips from '../public/images/works/veloclips.jpeg'
import thumbDemu from '../public/images/works/thumbdemu.jpeg'
import thumbViagg from '../public/images/works/thumbViagg.jpeg'
import thumbVelo from '../public/images/works/thumbVelo.jpeg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ShkollaOnline" title="Shkolla Online" thumbnail={thumbShkolla}>
          An online platform to help teachers reach their students, 
          organize their content and help students find lectures easily.
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem id="viaggiareesorridere" thumbnail={thumbViagg} title="Viaggiare e Sorridere">
            Dental Clinic, (Content Creator)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem
            id="velostars"
            title="Velo Stars"
            thumbnail={thumbVelostars}
          >
            Youtube channel about showbiz
          </WorkGridItem>

        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="demuslim" thumbnail={thumbDemu} title="DemusliM">
            A AOE4 channel starring DemusliM an Age of Empires Celebrity
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
      <WorkGridItem
            id="veloclips"
            title="Velo Clips"
            thumbnail={thumbVeloClips}
          >
            A youtube channel that posts short gaming clips
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
        <WorkGridItem id="velofamily" thumbnail={thumbVelo} title="Velo Family">
            Not just a normal gaming channel
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
