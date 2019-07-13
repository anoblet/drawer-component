import { css } from "lit-element";

export default css`
  :host {
    display: grid;
    grid-template-columns: auto;
  }

  aside {
    display: none;
    overflow: hidden;
    transition: 0.5s;
    white-space: nowrap;
  }

  :host([opened]) {
    grid-template-columns: max-content auto;
  }

  :host([opened]) aside {
    display: block;
  }

  main {
    flex: 5;
    overflow-y: auto;
  }
`;
