import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
  <Wrapper>
<div className='Container grid grid-tow-column'>
<div className='section-hero-data'>
    <p>THIS IS ME</p>
    <h1>VIRENDRA SINGH</h1>
<p>    I'm virendra singh. A Full stack Developer, youtuber and freelancer. A Full
         stack Developer, youtuber and freelancer.</p>
</div>
<div className='section-hero-image'></div>
</div>
  </Wrapper>
  )
}
const Wrapper = styled.section`
`;
export default HeroSection;