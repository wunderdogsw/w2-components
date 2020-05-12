import React from "react";

import Footer from "./footer";

export default { title: "Footer" };

export const plain = () => (
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

export const withoutMenu = () => (
  <Footer
    heading="We are more than code and design"
    copyright={`© ${new Date().getFullYear()} Wunderdog. WUNDERDOG is a registered trademark of Wunderdog Oy
    in the European Union.`}
    legal={[<a href="/">Cookies Policy</a>, <a href="/">Privacy Policy</a>]}
  />
);

export const withoutCopyright = () => (
  <Footer
    heading="We are more than code and design"
    nav={[
      <a href="/">Work</a>,
      <a href="/">About</a>,
      <a href="/">Careers</a>,
      <a href="/">Blog</a>,
      <a href="/">Contact</a>,
    ]}
    legal={[<a href="/">Cookies Policy</a>, <a href="/">Privacy Policy</a>]}
  />
);

export const withoutLegal = () => (
  <Footer
    heading="We are more than code and design"
    nav={[
      <a href="/">Work</a>,
      <a href="/">About</a>,
      <a href="/">Careers</a>,
      <a href="/">Blog</a>,
      <a href="/">Contact</a>,
    ]}
    copyright={`© ${new Date().getFullYear()} Wunderdog. WUNDERDOG is a registered trademark of Wunderdog Oy
  in the European Union.`}
  />
);
