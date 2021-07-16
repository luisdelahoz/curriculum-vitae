import React from 'react';
import { FULL_NAME } from 'src/config';
import styled from 'styled-components';
import ProfilePicture from 'src/assets/images/profile-picture.jpg';
import ContactInformation from './contact-information';
import { Column } from '../grid';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5rem;
  margin-right: 5rem;
  padding-top: 1rem;
`;

const Summary = styled.div`
  padding: 1em;
`;

const ProfileImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
`;

const Presentation = styled.h2``;

const BriefDescription = styled.p`
  line-height: 1.75em;
  margin-top: 1em;
  text-align: justify;
`;

function Description(): JSX.Element {
  return (
    <Container>
      <Column mobile={12} medium={6}>
        <Summary>
          <Presentation>I&apos;m {FULL_NAME}</Presentation>
          <BriefDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </BriefDescription>
          <ContactInformation />
        </Summary>
      </Column>
      <Column mobile={12} medium={6}>
        <ProfileImageContainer>
          <ProfileImage src={ProfilePicture} alt="Profile" />
        </ProfileImageContainer>
      </Column>
    </Container>
  );
}

export default Description;
