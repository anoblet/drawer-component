import { LitElement } from "lit-element";
export declare class DrawerComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    render: any;
    opened: boolean;
    absolute: boolean;
    aside: LitElement;
    main: HTMLElement;
    open(): void;
    close(): void;
    toggle(): void;
}
