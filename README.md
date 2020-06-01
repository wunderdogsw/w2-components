# w2-components

`w2-components` is a collection of React components extracted from the [`w2` project](https://github.com/wunderdogsw/w2).

## Installation

To install the package, run

    npm install @wunderdog/w2-components

## Examples

```javascript
import React from "react";
import { Footer } from "@wunderdog/w2-components";

const MyComponent = () => (
  <Footer
    heading="Future-proof design & development"
    nav={[
      <a href="/">Work</a>,
      <a href="/">About</a>,
      <a href="/">Careers</a>,
      <a href="/">Blog</a>,
      <a href="/">Contact</a>,
    ]}
    copyright={`© ${new Date().getFullYear()} Wunderdog. WUNDERDOG is a registered trademark of Wunderdog Oy
    in the European Union.`}
    legal={[<a href="/">Cookies Policy</a>, <a href="/">Privacy Policy</a>]}
  />
);

export default MyComponent;
```
