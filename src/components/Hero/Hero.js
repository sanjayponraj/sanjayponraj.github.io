import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';
import { Contacts } from '../../constants/constants';
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';
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

        <SectionText>
          <Button><a href= {Contacts.mail} style={{color: 'white'}}> Get in touch!</a></Button>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;