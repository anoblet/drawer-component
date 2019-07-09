import { html } from "lit-element";

export default function() {
  return html`
    <aside><slot name="drawer"></slot></aside>
    <main><slot name="main"></slot></main>
  `;
}
