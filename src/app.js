import React from 'react'
import data from 'Data'
import Headline from 'Styles/headline'
import HeadlineWrapper from 'Styles/headline-wrapper'
import Subheadline from 'Styles/subheadline'
import Main from 'Styles/main'
import Overlay from 'Styles/overlay'
import ProfileImage from 'Styles/profile-image'
import SolarSystem from 'Components/solar-system.js'
import Planet from 'Components/planet.js'

const { name, description, links, profileImg } = data;

const planets = links.map(({ type, title, url },i) =>(
  <Planet
    key={title}
    icon={type}
    href={url}
    index={i}
    total={links.length}>
    {title}
  </Planet>
))

export default () => <Main>
  <HeadlineWrapper>
    <Headline>{name}</Headline>
    <Subheadline>{description}</Subheadline>
  </HeadlineWrapper>
  <SolarSystem ringCount={links.length} />
  <Overlay>
    <ProfileImage src={profileImg} />
    {planets}
  </Overlay>
</Main>
