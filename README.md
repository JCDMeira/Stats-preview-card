# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is the front-end mentor's second challenge. The challenge is to build this component of the Stats preview card component solution and make it as close to the design as possible. Building the desing with whatever you want to finish, any language, framework or tools.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

## Screenshot

### Mobile design

<p  align="center">
  <img width="300px" src="./presentation/mobile1.png" align="center"></img>
  <img width="300px" src="./presentation/mobile2.png" align="center"></img>
</p>

### Tablets design

<p  align="center"><img width="420px"  src="./presentation/i-pad.png" align="center"></img></p>

### Desktop design

<p  align="center"><img width="600px" src="./presentation/desktop.png" align="center"></img></p>

### Links

- Solution URL: [jcdmeira-order-summary](https://www.frontendmentor.io/solutions/jcdmeiraordersummary-Wd-71ZC58https://your-solution-url.com)
- Live Site URL: [jcdmeira-order-summary](https://jcdmeira-order-summary.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

Solucionando o erro "missing in props validation eslint(react/prop-types)"

```bash
   # install prop-types

   npm install --save prop-types
```

```jsx
import P from 'prop-types';

// ...
// write your component here
// ...

componentName.defaultProps = {
  componentProp2: 0,
};
componentName.propTypes = {
  componentProp1: P.string.isRequired,
  componentProp2: P.number,
};
```

```CSS
  /*
    Use  Media Queries to configure a responsive design
  */
  .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Inter;
}

  /*
    with @media it is possible to set rules for certain screen sizes only, adhering to responsiveness
  */

  @media (min-width: 1200px) {
  .info {
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
}

}
```

Use text-transform to capitalize all letters instead of using hardcoded

```CSS
  .info h1 {
  text-transform: uppercase;
}
```

With ReactJS parts of the code are used as components, and these are separated into a component folder, which can be reused.

```jsx
import React from 'react';
import P from 'prop-types';
import './style.css';

function InfoData({ children, value }) {
  return (
    <div className="info">
      <h1>{value}</h1>
      <p>{children}</p>
    </div>
  );
}

InfoData.propTypes = {
  children: P.string.isRequired,
  value: P.string.isRequired,
};

export { InfoData };
```

use your components multiple times where necessary, passing in the data to make it dynamic.

```jsx
// ...
// ...
// ...
<div className="fieldData">
  <InfoData value="10k+">Companies </InfoData>
  <InfoData value="314">Templates </InfoData>
  <InfoData value="12M+">queries </InfoData>
</div>
// ...
// ...
// ...
```

### Useful resources

- [react tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html) - This helped me structure the components and build the proposed page.
- [missing in props validation eslint(react/prop-types)](https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7) - This is an amazing article that finally helped me to resolve the problem of "...is missing in props validation eslint(react/prop-types)" . And I would recommend to anyone who is still having this problem to read.
- [text-tranform](https://developer.mozilla.org/pt-BR/docs/Web/CSS/text-transform) - This is an article that helped me understand how to use text-tranform.

## Author

- Personal Page - [Jean Carlos De Meira](https://jcdmeira.github.io)
- Frontend Mentor - [@JCDMeira](https://www.frontendmentor.io/profile/JCDMeira)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
