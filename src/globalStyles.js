import { css } from '@emotion/react'

export const globalStyles = css`
  /* CSS Custom Properties (Global Variables) */
  :root {
    /* Color Variables */
    --color-primary-blue: #3a7cfd;
    --color-bright-blue: #57ddff;
    --color-check-bg: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    
    /* Light Theme Colors */
    --bg-light: #fafafa;
    --bg-card-light: #ffffff;
    --text-light: #494c6b;
    --text-muted-light: #9495a5;
    --border-light: #e3e4f1;
    
    /* Dark Theme Colors */
    --bg-dark: #171823;
    --bg-card-dark: #25273d;
    --text-dark: #c8cbe7;
    --text-muted-dark: #5b5e7e;
    --border-dark: #393a4b;
    
    /* Current Theme Variables (default to light) */
    --bg-primary: var(--bg-light);
    --bg-secondary: var(--bg-card-light);
    --text-primary: var(--text-light);
    --text-secondary: var(--text-muted-light);
    --border-color: var(--border-light);
  }

  /* Dark Theme Override */
  [data-theme="dark"] {
    --bg-primary: var(--bg-dark);
    --bg-secondary: var(--bg-card-dark);
    --text-primary: var(--text-dark);
    --text-secondary: var(--text-muted-dark);
    --border-color: var(--border-dark);
  }

  /* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    /* interpolate-size: allow-keywords; - Future CSS property */
  }
}

body {
  /* 4. Add accessible line-height */
  line-height: 1.5;
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
  /* text-wrap: pretty; - Future CSS property */
}
h1, h2, h3, h4, h5, h6 {
  /* text-wrap: balance; - Future CSS property */
}

/*
  10. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`
