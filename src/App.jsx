import styled from '@emotion/styled';
import imageLightMobile from './images/bg-mobile-light.jpg'
import Header from './Header';

function App() {

  return (
    <Container>
      <Wrapper>
        <Header></Header>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  font-family: "Josefin Sans", sans-serif;
  min-height: 100vh;
  background-image: url(${imageLightMobile});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fafafa;
  padding: 0 calc(36rem / 16);
`;

const Wrapper = styled.div`
  max-width: calc(540rem / 16);
  margin: 0 auto;
`;

export default App
