/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import Header from '../components/Header/index'
import Intro from '../components/Team/Introduction/index'
import Card from '../components/Team/card'
import Footer from '../components/Footer/index'

export default () => (
  <div sx={{ width: '100%' }}>
    <Header />
    <Intro />
    <Grid columns={[1, 1, 2]} sx={{ pb: 5, mt: [4, 5] }}>
      <Card
        url={'Abba'}
        name="Abba Haruna"
        position="Lead Hack Club Auk"
      />
      <Card
        url={'Halima'}
        name="Halima Kabir"
        position="Lead Women in Hack Club"
      />
      <Card
        url={'Mahee'}
        name="Mahee"
        position="Social media at Hack Club Auk
"
      />
      <Card
        url={'Na Madi'}
        name="Na Madi"
        position="Co-organizer"
      />
    </Grid>
    <Footer />
  </div>
)
