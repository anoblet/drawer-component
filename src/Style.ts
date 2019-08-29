import { css } from "lit-element";

export default css`
  :host {
    display: grid;
    grid-template-columns: max-content auto;
    overflow-y: auto;
    position: relative; /* Edge case */
  }

  aside {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.2s;
    transition-timing-function: ease-in-out;
  }

  :host([opened]) aside {
    width: 100%;
  }

  main {
    overflow-y: auto;
  }

  ::slotted([slot="main"]) {
    min-height: 100%;
  }

  :host([absolute][opened]) aside {
    position: absolute;
  }
`;
