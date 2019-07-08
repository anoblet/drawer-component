import { html } from "lit-element";

export default function() {
  return html`
    <slot name="drawer"></slot>
    <main><slot name="main"></slot></main>
  `;
}
