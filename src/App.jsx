import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
  );
`;

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0; 
  padding: 0;
  }
  input {
    width: 90%;
  }
  span { 
    color: green;
    &:hover {
      background-color: white-space;
    }
  }
  `;

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);

  return (
    <>
    <GlobalStyle/>
      <Container input1={input1} input2={input2} input3={input3} input4={input4}>
        <div> rgba 값을 이용한 배경색 바꾸기 </div>
        <input 
        type="range" 
        value={input1} 
        onChange={(e) => setInput1(e.target.value)}
        min={0}
        max={255}
        />
        <span>{input1}</span>
        <input 
        type="range" 
        value={input2} 
        onChange={(e) => setInput2(e.target.value)}
        min={0}
        max={255}
        />
        <span>{input2}</span>
        <input 
        type="range" 
        value={input3} 
        onChange={(e) => setInput3(e.target.value)}
        min={0}
        max={255}
        />
        <span>{input3}</span>
        <input 
        type="range" 
        value={input4} 
        onChange={(e) => setInput4(e.target.value)}
        min={0}
        step={0.1}
        max={1}
        />
        <span>{input4}</span>

      </Container>
      </>
  );
};

export default App;
