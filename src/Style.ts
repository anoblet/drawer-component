import { css } from "lit-element";

export default css`
  slot[name="main"] {
    display: none;
  }

  :host[opened] slot[name="main"] {
    display: contents;
  }
`;
