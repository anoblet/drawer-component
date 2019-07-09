import { css } from "lit-element";

export default css`
  :host {
    display: flex;
  }

  :host aside {
    display: none;
  }

  :host([opened]) aside {
    display: block;
  }

  main {
    flex: 1;
  }
`;
