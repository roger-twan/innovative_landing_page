import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 2em;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
`;

function App() {
  return (
    <Content>
      123
    </Content>
  );
}

export default App;
