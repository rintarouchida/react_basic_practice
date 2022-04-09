import React, {useEffect, useState} from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, changeNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    changeNum(num + 1);
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if(num > 0) {
      if (num%3 === 0){
        faceShowFlag || setFaceShowFlag(true);
      } else{
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  return (
    <React.Fragment>
      <ColorfulMessage color="blue">
        お元気ですか?
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        お元気やで
      </ColorfulMessage>
      <p>{num}</p>
      <button onClick = {onClickCountUp}>カウントアップ!</button>
      {faceShowFlag && <p>🙎‍♂️</p>}
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
    </React.Fragment>
  );
}

export default App;

