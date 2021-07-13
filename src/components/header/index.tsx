import React from 'react';
import styled from 'styled-components';
import { FULL_NAME, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from 'src/config';

const StyledHeader = styled.header`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;

const Name = styled.h1`
  font-size: 1.35rem;
`;

const SocialNetworkLinksContainer = styled.div``;

const SocialNetworkLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 1em;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <Name>
          <Link href="localhost:3000">{FULL_NAME}</Link>
        </Name>
        <SocialNetworkLinksContainer>
          <SocialNetworkLinks>
            {GITHUB_URL && (
              <li>
                <Link href={GITHUB_URL} target="_blank">
                  Github
                </Link>
              </li>
            )}
            {LINKEDIN_URL && (
              <li>
                <Link href={LINKEDIN_URL} target="_blank">
                  LinkedIn
                </Link>
              </li>
            )}
            {TWITTER_URL && (
              <li>
                <Link href={TWITTER_URL} target="_blank">
                  Twitter
                </Link>
              </li>
            )}
          </SocialNetworkLinks>
        </SocialNetworkLinksContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
