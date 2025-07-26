import styled from '@emotion/styled';
import React from 'react';

import Header from './Header'
import TodoMain from './TodoMain';

import imageDarkMobile from './images/bg-mobile-dark.jpg'
import imageLightMobile from './images/bg-mobile-light.jpg'


function App() {
  const [theme, setTheme] = React.useState(() => {
    const themequery = window.matchMedia('(prefers-color-scheme: dark)');
    return themequery.matches ? 'dark' : 'light';
  })

  // Set initial theme on mount
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(theme)
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <Container theme={theme}>
      <Wrapper>
        <Header 
        theme={theme}
        handleThemeChange={handleThemeChange}
        ></Header>
        <TodoMain></TodoMain>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  font-family: var(--font-family);
  min-height: 100vh;
  background-image: url(${p => p.theme === 'dark' ? `${imageDarkMobile}` : `${imageLightMobile}`});
  background-size: 100% 200px;
  background-repeat: no-repeat;
  background-color: var(--bg-primary);
  padding: 0 var(--spacing-3xl);
`;

const Wrapper = styled.div`
  max-width: var(--list-max-width);
  margin: 0 auto;
`;

export default App
