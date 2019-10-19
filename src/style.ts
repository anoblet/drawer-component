import { css } from "lit-element";

export default css`
  * {
    box-sizing: border-box;
  }

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

  :host([absolute][opened]) {
    grid-template-columns: auto;
  }

  :host([absolute][opened]) aside {
    position: absolute;
    z-index: 1;
    background: var(--background-color);
    width: max-content;
    height: 100%;
  }
`;
