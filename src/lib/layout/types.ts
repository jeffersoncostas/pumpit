import type { Colors, Spacing } from "@styles"

export interface LayoutProps {
    gap?: string
    justify?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
    align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"

    mTop?: string
    mRight?: string
    mBottom?: string
    mLeft?: string

    padding?: string
    pHorizontal?: string
    pVertical?: string
    pTop?: string
    pRight?: string
    pBottom?: string
    pLeft?: string

    bgColor?: string
    bRadius?: string
    bShadow?: string

    width?: string
    height?: string

    position?: "absolute" | "fixed" | "relative" | "static" | "sticky"
    overflow?: string
    style?: string
}

export const layoutPropsToCssVars: { [K in keyof LayoutProps]: string } = {
    gap: "gap",
    justify: "justify-content",
    align: "align-items",
    wrap: "flex-wrap",
    mTop: "margin-top",
    mRight: "margin-right",
    mBottom: "margin-bottom",
    mLeft: "margin-left",
    pTop: "padding-top",
    pRight: "padding-right",
    pBottom: "padding-bottom",
    pLeft: "padding-left",
    bgColor: "background-color",
    bRadius: "border-radius",
    bShadow: "box-shadow",
    width: "width",
    height: "height",
    position: "position",
    overflow: "overflow",
}

export function handlePadding(props) {
    if (props.padding) {
        props.pTop = props.padding
        props.pRight = props.padding
        props.pBottom = props.padding
        props.pLeft = props.padding
    }

    if (props.pHorizontal) {
        props.pRight = props.pHorizontal
        props.pLeft = props.pHorizontal
    }

    if (props.pVertical) {
        props.pTop = props.pVertical
        props.pBottom = props.pVertical
    }

    if (props.onClick) {
        props.position = "relative"
        props.overflow = "hidden"
    }

    return props
}

export function setStyles(node: HTMLElement, props: LayoutProps) {
    setProperty(props)
    function setProperty(props: LayoutProps) {
        props = handlePadding(props)
        Object.entries(layoutPropsToCssVars).forEach(([prop, cssVar]) => {
            const value = props[prop]
            if (value) {
                node.style.setProperty(cssVar, value)
            }
        })

        if (props.style) {
            node.setAttribute("style", node.getAttribute("style") + props.style)
        }
    }

    return {
        update(props) {
            setProperty(props)
        },
    }
}
