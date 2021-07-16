import React from 'react';
import Description from './components/description';
import Introduction from './components/introduction';
import Portfolio from './components/portofolio';
import MainLayout from './layouts/main-layout';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Introduction />
      <Description />
      <Portfolio />
    </MainLayout>
  );
}

export default App;
