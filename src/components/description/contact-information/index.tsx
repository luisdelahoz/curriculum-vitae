import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1em;
  list-style: none;
  margin-top: 1em;
  line-height: 1.75em;
`;

const Information = styled.div``;

function ContactInformation(): JSX.Element {
  return (
    <Container>
      <Information>
        <div>Email:</div>
        <div>Skype:</div>
        <div>Address:</div>
      </Information>
      <Information>
        <div>luisgdelahozl@gmail.com</div>
        <div>luisgdelahozl@outlook.com</div>
        <div>Argentina</div>
      </Information>
    </Container>
  );
}

export default ContactInformation;
