import { LitElement, customElement, property, query } from "lit-element";

import style from "./style";
import template from "./template";

@customElement("drawer-component")
export class DrawerComponent extends LitElement {
  public static styles = style;
  public render = template.bind(this);

  @property({ type: Boolean, reflect: true }) opened = false;
  @property({ type: Boolean, reflect: true }) absolute = false;

  @query("aside") aside: LitElement;
  @query("main") main: HTMLElement;

  public open() {
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

  public toggle() {
    this.opened = !this.opened;
  }
}
