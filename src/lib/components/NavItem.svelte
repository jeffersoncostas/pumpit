<script lang="ts">
	import { Colors } from "$lib/styles";
    import IconButton from "./IconButton.svelte"

    export let iconName = "home"
    export let active = false
    export let onClick: (event?: MouseEvent) => void = undefined

    let outline
    let bgColor
    let iconColor
    let iconHighlight

    $: {
        outline = !active
        iconHighlight = active
        bgColor = active ? Colors.primary[3] : "transparent"
        iconColor = active ? Colors.primary[1] : Colors.primary[2]
    }
</script>

<IconButton
    {onClick}
    {iconName}
    {outline}
    {bgColor}
    {iconColor}
    {iconHighlight} />
