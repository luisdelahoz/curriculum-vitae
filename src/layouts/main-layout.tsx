import React from 'react';
import styled from 'styled-components';
import Header from 'src/components/header';

const Container = styled.div`
  margin: auto;
  max-width: 1128px;
`;

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

export default MainLayout;
