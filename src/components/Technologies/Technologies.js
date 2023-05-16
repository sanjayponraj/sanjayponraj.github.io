import React from 'react';
import { DiCode, DiCodepen, DiFirebase, DiJavascript1, DiJenkins, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiFillCodepenCircle } from 'react-icons/ai';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Range of technologies in the front-end development world from design to development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Libraries & Frameworks</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Vue.js, Knockout.js, TypeScript, jQuery, UXP, Lodash, Grunt, Mocha, Vitest, Sinon, Vite and Webpack
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJenkins size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CI/CD & Other tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Jenkins, Kibana, SumoLogic, AppDynamics, Google Analytics
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodepen size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma and Framer
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
