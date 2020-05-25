import BaseComponent from "./base";
import BodyComponent from "./body";
import HeadingComponent from "./heading";
import MetaComponent from "./meta";

export default Object.assign(BaseComponent, {
  Body: BodyComponent,
  Heading: HeadingComponent,
  Meta: MetaComponent,
});
export const Body = BodyComponent;
export const Heading = HeadingComponent;
export const Meta = MetaComponent;
