import BaseComponent from "./base";
import Content from "./content";
import Heading from "./heading";
import Image from "./image";
import Subheading from "./subheading";

export default Object.assign(BaseComponent, {
  Content: Content,
  Heading: Heading,
  Image: Image,
  Subheading: Subheading,
});
