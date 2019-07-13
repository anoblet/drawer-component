import { css } from "lit-element";

export default css`
  :host {
    display: grid;
    grid-template-columns: max-content auto;
    overflow-y: auto;
  }

  aside {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  :host([opened]) aside {
    width: 100%;
  }

  main {
    overflow-y: auto;
  }
`;
