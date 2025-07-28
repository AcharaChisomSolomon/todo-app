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
    --text-completed-light: #D1D2DA;
    
    /* Dark Theme Colors */
    --bg-dark: #171823;
    --bg-card-dark: #25273d;
    --text-dark: #c8cbe7;
    --text-muted-dark: #5b5e7e;
    --border-dark: #393a4b;
    --text-completed-dark: #4D5067;
    
    /* Current Theme Variables (default to light) */
    --bg-primary: var(--bg-light);
    --bg-secondary: var(--bg-card-light);
    --text-primary: var(--text-light);
    --text-secondary: var(--text-muted-light);
    --border-color: var(--border-light);
    --text-completed-color: var(--text-completed-light);
    
    /* Typography Variables */
    --font-family: "Josefin Sans", sans-serif;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    
    /* Font Sizes */
    --font-size-header: calc(20rem / 16); /* 1.25rem / 20px */
    --font-size-body: calc(12rem / 16);   /* 0.75rem / 12px */
    --font-size-input: calc(12rem / 16);  /* 0.75rem / 12px */
    
    /* Spacing Variables */
    --spacing-xs: calc(4rem / 16);   /* 0.25rem / 4px */
    --spacing-sm: calc(8rem / 16);   /* 0.5rem / 8px */
    --spacing-md: calc(12rem / 16);  /* 0.75rem / 12px */
    --spacing-lg: calc(14rem / 16);  /* 0.875rem / 14px */
    --spacing-xl: calc(16rem / 16);  /* 1rem / 16px */
    --spacing-2xl: calc(20rem / 16); /* 1.25rem / 20px */
    --spacing-3xl: calc(24rem / 16); /* 1.5rem / 24px */
    --spacing-4xl: calc(30rem / 16); /* 1.875rem / 30px */
    --spacing-5xl: calc(36rem / 16); /* 2.25rem / 36px */
    --spacing-6xl: calc(40rem / 16); /* 2.5rem / 40px */
    --spacing-7xl: calc(43rem / 16); /* 2.6875rem / 43px */
    --spacing-header: calc(48rem / 16); /* 3rem / 48px */
    --spacing-8xl: calc(70rem / 16); /* 4.375rem / 70px */
    --spacing-9xl: calc(74rem / 16); /* 4.625rem / 74px */
    
    /* Component Dimensions */
    --circle-size: calc(20rem / 16);     /* 1.25rem / 20px */
    --input-padding-y: calc(14rem / 16); /* 0.875rem / 14px */
    --input-padding-x: calc(20rem / 16); /* 1.25rem / 20px */
    --list-max-width: calc(540rem / 16); /* 33.75rem / 540px */
    --container-padding: calc(36rem / 16); /* 2.25rem / 36px */
    
    /* Border Radius */
    --radius-sm: calc(4rem / 16);  /* 0.25rem / 4px */
    --radius-md: calc(8rem / 16);  /* 0.5rem / 8px */
    
    /* Border Widths */
    --border-width-thin: 1px;
    --border-width-thick: 2px;
    
    /* Box Shadows */
    --shadow-light: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-strong: 8px 8px 12px rgba(0, 0, 0, 0.15);
    --shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    /* Dark theme shadows */
    --shadow-light-dark: 0 2px 4px rgba(0, 0, 0, 0.3);
    --shadow-medium-dark: 0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-strong-dark: 8px 8px 12px rgba(0, 0, 0, 0.3);
    --shadow-hover-dark: 0 4px 8px rgba(0, 0, 0, 0.4);
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Media Query Breakpoints */
    --breakpoint-mobile: calc(550rem / 16); /* 34.375rem / 550px */
    
    /* Z-index values */
    --z-index-base: 1;
    --z-index-tooltip: 10;
    --z-index-dropdown: 100;
    --z-index-modal: 1000;

    @media (min-width: 550px) {
      --font-size-header: calc(40rem / 16);
      --font-size-body: calc(18rem / 16);
      --font-size-input: calc(18rem / 16);

      --input-padding-y: calc(20rem / 16); 
      --input-padding-x: calc(24rem / 16);

      --circle-size: calc(26rem / 16);
      --spacing-header: calc(70rem / 16);
      --spacing-3xl: calc(24rem / 16);
    }
  }

  /* Dark Theme Override */
  [data-theme="dark"] {
    --bg-primary: var(--bg-dark);
    --bg-secondary: var(--bg-card-dark);
    --text-primary: var(--text-dark);
    --text-secondary: var(--text-muted-dark);
    --border-color: var(--border-dark);
    --text-completed-color: var(--text-completed-dark);
    
    /* Override shadows for dark theme */
    --shadow-light: var(--shadow-light-dark);
    --shadow-medium: var(--shadow-medium-dark);
    --shadow-strong: var(--shadow-strong-dark);
    --shadow-hover: var(--shadow-hover-dark);
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
