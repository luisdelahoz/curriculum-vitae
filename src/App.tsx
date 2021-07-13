import React from 'react';
import Introduction from './components/introduction';
import MainLayout from './layouts/main-layout';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Introduction />
    </MainLayout>
  );
}

export default App;
