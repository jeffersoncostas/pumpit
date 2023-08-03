<script lang="ts">
    import { setStyles} from "./types"
    import type {LayoutProps} from "./types"

    interface $$Props extends LayoutProps {
        onClick?: (event?: MouseEvent) => void
    }
    $: props = $$props as $$Props

    let ripples = []
    function handleClick(event) {
        if (props.onClick) {
            props.onClick(event)
            const rect = event.currentTarget.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            const size = Math.max(rect.width, rect.height)

            ripples = [...ripples, { id: Math.random(), x, y, size }]
        }
    }

    const removeRipple = (id) => {
        ripples = ripples.filter((r) => r.id !== id)
    }
</script>

<cRow
    use:setStyles={props}
    on:click={handleClick}>
    {#each ripples as ripple (ripple.id)}
        <ripple
            style:left="{ripple.x}px"
            style:top="{ripple.y}px"
            style:width="{ripple.size}px"
            style:height="{ripple.size}px"
            on:animationend={() => removeRipple(ripple.id)} />
    {/each}
    <slot />
</cRow>

<style lang="scss">
    cRow {
        display: flex;
        flex-direction: row;
    }
</style>
