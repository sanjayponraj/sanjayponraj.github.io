import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Contacts } from '../../constants/constants';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sanjayponraj26@gmail.com">
            sanjayponraj26@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href={Contacts.github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={Contacts.linkedIn}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={Contacts.mail}>
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
