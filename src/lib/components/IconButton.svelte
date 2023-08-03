<script lang="ts">
	import Row from "$lib/layout/Row.svelte";
	import { Colors, Elevations, Spacing } from "$lib/styles";



    import Icon from "@iconify/svelte"


    export let iconName = "home"
    export let iconColor = Colors.primary[1]
    export let size = Spacing[6]
    export let outline = false
    export let iconHighlight = false
    export let highlight = false
    export let elevation = false
    export let bgColor = Colors.primary[3]
    export let onClick: (event?: MouseEvent) => void = undefined

    $: fullIconName = `material-symbols:${iconName}-${
        outline ? "outline-" : ""
    }rounded`

    let iconStyle = ""
    let bShadow = ""

    $: {
        fullIconName = `material-symbols:${iconName}-${
            outline ? "outline-" : ""
        }rounded`
        iconStyle = iconHighlight
            ? `filter: drop-shadow(${Elevations.neon});`
            : ""
        bShadow = elevation ? Elevations.button : ""

        if (highlight) {
            bShadow +=
                ",inset 1px 1px 0px 0px rgba(171, 194, 10, 0.06), inset -1px 1px 0px 0px rgba(171, 194, 10, 0.06)"
        }
    }
</script>

<Row
    width={Spacing[9]}
    height={Spacing[9]}
    justify="center"
    align="center"
    bRadius={Spacing[4]}
    {bShadow}
    {onClick}
    {bgColor}>
    <Icon
        icon={fullIconName}
        color={iconColor}
        width={size}
        style={iconStyle} />
</Row>
