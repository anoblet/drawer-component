import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("drawer-component")
export class DrawerComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() opened = false;

  public toggle() {
    this.opened = !this.opened;
  }
}
