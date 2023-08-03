import { writable, get } from "svelte/store"

let baseDesignWidth = 375
let scaleFactor = writable(window.innerWidth / baseDesignWidth)

// Listen for resize events to update the scale factor
window.addEventListener("resize", () => {
    scaleFactor.set(window.innerWidth / baseDesignWidth)
})

export function relativeSize(size: number) {
    return size * get(scaleFactor) + "px"
}
