import React from 'react';
import styled from 'styled-components';
import SoftwareDeveloperImage from 'src/assets/images/software-developer.svg';
import { FULL_NAME } from 'src/config';
import PrimaryButton from 'src/components/primary-button';

const Section = styled.section`
  background-color: #f5f5f5;
  padding: 2em;
`;

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 400px;
  width: 100%;
`;

const BasicInfo = styled.div`
  flex: 1;
  margin: 1em;
`;

const Greeting = styled.h4`
  letter-spacing: 0.05em;
  margin-top: 0.5em;
`;

const Name = styled.h1`
  margin-top: 0.5em;
`;

const JobTitle = styled.p`
  margin-top: 0.5em;
`;

const HireMeButton = styled(PrimaryButton)`
  margin-top: 1rem;
  width: 25%;
`;

function Introduction(): JSX.Element {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image src={SoftwareDeveloperImage} alt="Software Developer" />
        </ImageContainer>
        <BasicInfo>
          <Greeting>Hello</Greeting>
          <Name>I&apos;m {FULL_NAME}</Name>
          <JobTitle>Full Stack Developer</JobTitle>
          <HireMeButton>Hire me</HireMeButton>
        </BasicInfo>
      </Container>
    </Section>
  );
}

export default Introduction;
