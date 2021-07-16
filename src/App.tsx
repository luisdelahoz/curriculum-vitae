import React from 'react';
import Description from './components/description';
import Introduction from './components/introduction';
import MainLayout from './layouts/main-layout';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Introduction />
      <Description />
    </MainLayout>
  );
}

export default App;
