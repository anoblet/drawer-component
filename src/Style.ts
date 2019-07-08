import { css } from "lit-element";

export default css`
  :host {
    display: flex;
  }

  slot[name="drawer"] {
    display: none;
  }

  :host[opened] slot[name="drawer"] {
    display: contents;
  }

  main {
    flex: 1;
  }
`;
