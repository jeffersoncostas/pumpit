type ColorVariant = {
    1: string
    2: string
    3: string
}

export type Colors = {
    background: string
    surface: ColorVariant
    primary: ColorVariant
    on: ColorVariant
}

export const Colors: Colors = {
    background: "#191C1C",
    surface: { 1: "hsl(180 5% 14% / 1)", 2: "#212727", 3: "#2A3232" },
    primary: {
        1: "#ABC20A",
        2: "rgba(171, 194, 10, 0.5)",
        3: "rgba(171, 194, 10, 0.1)",
    },
    on: {
        1: "#E1E4CD",
        2: "rgba(225, 228, 205, 0.7)",
        3: "rgba(225, 228, 205, 0.5)",
    },
}
