import { relativeSize } from "./scaling"

type FontWeight = "light" | "regular" | "medium" | "semibold" | "bold"
type FontSize =
    | "caption"
    | "body2"
    | "body1"
    | "subtitle"
    | "title"
    | "headline"
    | "display"
export type TypographyToken = `${FontSize}-${FontWeight}`

type FontSizeTokens = Record<FontSize, number>
type FontWeightTokens = Record<FontWeight, string>
type TypographyTokens = Record<
    TypographyToken,
    { fontSize: string; fontWeight: string }
>

const fontSizeTokens: FontSizeTokens = {
    caption: 12,
    body2: 14,
    body1: 16,
    subtitle: 18,
    title: 20,
    headline: 24,
    display: 30,
}

const fontWeightTokens: FontWeightTokens = {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
}

export const typographyTokens: TypographyTokens = Object.entries(
    fontSizeTokens
).reduce((acc, [size, fontSize]) => {
    Object.entries(fontWeightTokens).forEach(([weight, fontWeight]) => {
        acc[`${size}-${weight}` as TypographyToken] = {
            fontSize: relativeSize(fontSize),
            fontWeight,
        }
    })
    return acc
}, {} as TypographyTokens)
