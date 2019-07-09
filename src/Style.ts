import { css } from "lit-element";

export default css`
  :host {
    display: flex;
  }

  aside {
    flex: 0;
    overflow: hidden;
    transition: 0.5s;
    white-space: nowrap;
  }

  :host([opened]) aside {
    flex: 1;
  }

  main {
    flex: 5;
  }
`;
