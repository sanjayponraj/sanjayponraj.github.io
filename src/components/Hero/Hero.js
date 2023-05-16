import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Contacts } from '../../constants/constants';
const handleClick = (e) => {
  console.log('Opening Mail');
  window.location.href=Contacts.mail;
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
        A Front-end Developer based in Chennai, India specializing in creating captivating user experiences. With expertise in latest front-end technoloies, I bring designs to life with seamless functionality.
        </SectionText>
        <Button onClick={() => handleClick() }>Mail Me</Button>
      <br/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;