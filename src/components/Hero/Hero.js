import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { SocialContainer, SocialIconsContainer } from '../Footer/FooterStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SectionDivider } from '../../styles/GlobalComponents';

const handleClick = (e) => {
  window.location.href="mailto:sanjayponraj26@gmail.com"
}
const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I am <br />
         Sanjay Ponraj
        </SectionTitle>
        <SectionText>
        A Front-end Developer based in Chennai, India. I am building things for the web for 5+ years now.
        </SectionText>
        <Button onClick={(e) => handleClick(e)}>Mail Me</Button>
      <br/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;