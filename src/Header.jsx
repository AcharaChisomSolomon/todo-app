import styled from '@emotion/styled';
import iconMoon from './images/icon-moon.svg';

export default function Header() {
  return (
    <Header_>
      <Text>TODO</Text>
      <ImageContainer>
        <Image src={iconMoon} alt='A moon Icon to toggle to dark mode' />
      </ImageContainer>
    </Header_>
  )
};

const Header_ = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: calc(70rem / 16);
`;

const Text = styled.nav`
  color: #ffffff;
  font-weight: 700;
  font-size: calc(20rem / 16);
  letter-spacing: 10px;
  line-height: 1;
`;

const ImageContainer = styled.div`
  width: calc(20rem / 16);
  height: calc(20rem / 16);
`;

const Image = styled.img`
  width: 100%;
`;