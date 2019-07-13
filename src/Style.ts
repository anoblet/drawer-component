import { css } from "lit-element";

export default css`
  :host {
    display: grid;
    grid-template-columns: max-content auto;
  }

  aside {
    width:0;
    overflow: hidden;
    transition: 0.5s;
    white-space: nowrap;
  }

  :host([opened]) aside {
    width: 100%;
  }

  main {
    overflow-y: auto;
  }
`;
