import { html } from "lit-element";

export default function() {
  return html`
    <aside part="aside"><slot name="drawer"></slot></aside>
    <main><slot name="main"></slot></main>
  `;
}
