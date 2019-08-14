import { LitElement, customElement, property, query } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("drawer-component")
export class DrawerComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property({ type: Boolean, reflect: true }) opened = false;

  @query("aside") drawer: LitElement;

  public toggle() {
    this.opened = !this.opened;
    this.drawer.addEventListener("transitionend", () =>
      window.dispatchEvent(
        new CustomEvent("drawer-toggled", {
          composed: true
        })
      )
    );
  }
}
