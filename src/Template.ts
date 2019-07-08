import { html } from "lit-element";

export default function() {
  return html`
    <slot name="drawer"></slot> <slot name="main"></slot>
  `;
}
