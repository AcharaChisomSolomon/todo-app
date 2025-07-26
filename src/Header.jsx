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

  padding-top: var(--spacing-header);
`;

const Text = styled.nav`
  color: #ffffff;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-header);
  letter-spacing: var(--spacing-md);
  line-height: 1;

  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: var(--circle-size);
  height: var(--circle-size);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;