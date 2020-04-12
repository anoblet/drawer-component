var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, query } from "lit-element";
import style from "./style";
import template from "./template";
let DrawerComponent = class DrawerComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.render = template.bind(this);
        this.opened = false;
        this.absolute = false;
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
    toggle() {
        this.opened = !this.opened;
    }
};
DrawerComponent.styles = style;
__decorate([
    property({ type: Boolean, reflect: true })
], DrawerComponent.prototype, "opened", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], DrawerComponent.prototype, "absolute", void 0);
__decorate([
    query("aside")
], DrawerComponent.prototype, "aside", void 0);
__decorate([
    query("main")
], DrawerComponent.prototype, "main", void 0);
DrawerComponent = __decorate([
    customElement("drawer-component")
], DrawerComponent);
export { DrawerComponent };
