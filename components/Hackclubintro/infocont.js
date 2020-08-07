/**@jsx jsx*/

import { jsx } from 'theme-ui'

export const GroupInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}></span> Everyone starts
    hacking from <span sx={{ color: 'black' }}>day one.</span> We provide
    <a target="_blank" href="https://workshops.hackclub.com/">
      {' '}
      our workshops
    </a>{' '}
    as a roadmap to your coding journey.
  </p>
)

export const ExploreInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}></span> Making
    unbelievable projects along with other hack club members and
    <span sx={{ color: 'orange' }}></span>
    <a target="_blank" href="https://scrapbook.hackclub.com/">
      {' '}
      share it
    </a>{' '}
    to the world.
  </p>
)

export const ExhibitInfo = () => (
  <p sx={{}}>
    <span sx={{ fontWeight: 'bold' }}></span>{' '}
    <span sx={{ color: 'black' }}> Everyone in the Hack Club</span> pitch their
    projects with others in the club at the end of their club meeting.
  </p>
)
