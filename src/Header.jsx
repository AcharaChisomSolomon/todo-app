import styled from '@emotion/styled';
import iconMoon from './images/icon-moon.svg';
import iconSun from './images/icon-sun.svg'

export default function Header({ theme, handleThemeChange }) {
  return (
    <Header_>
      <Text>TODO</Text>
      <ImageContainer onClick={handleThemeChange}>
        <Image src={
          theme === 'light' ? iconMoon : iconSun
        } alt='A moon Icon to toggle to dark mode' />
      </ImageContainer>
    </Header_>
  )
};

const Header_ = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: calc(48rem / 16);
`;

const Text = styled.nav`
  color: #ffffff;
  font-weight: 700;
  font-size: calc(20rem / 16);
  letter-spacing: calc(12rem / 16);
  line-height: 1;

  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: calc(20rem / 16);
  height: calc(20rem / 16);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;