import { BoxShadowManifest } from "../box-shadow";
import { EdgeInsets } from "../ui";
import { Widget, WidgetKey } from "../widget";

export class Stack extends Widget {
    readonly _type: "Stack" = "Stack";

    width: number;
    height: number;
    boxShadow?: BoxShadowManifest;

    constructor(p: {
        key: WidgetKey;
        children: Widget[];
        width: number;
        height: number;
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
    }) {
        super(p);

        this.children = p.children;
        this.width = p.width;
        this.height = p.height;
        this.boxShadow = p.boxShadow;
        this.margin = p.margin;
        this.padding = p.padding;
    }
}
