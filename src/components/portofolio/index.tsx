import React from 'react';
import styled from 'styled-components';
import { Column } from '../grid';

const Title = styled.h2`
  text-align: center;
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

const Project = styled.div`
  border: 1px solid red;
  height: 250px;
`;

function Portfolio(): JSX.Element {
  return (
    <>
      <Title>My Portfolio</Title>
      <Projects>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
        <Column mobile={12} small={6} medium={4} large={3}>
          <Project />
        </Column>
      </Projects>
    </>
  );
}

export default Portfolio;
