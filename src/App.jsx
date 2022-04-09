import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  return (
    <React.Fragment>
      <ColorfulMessage color="blue">
        お元気ですか?
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        お元気やで
      </ColorfulMessage>
    </React.Fragment>
  );
}

export default App;

