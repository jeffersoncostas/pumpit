<script lang="ts">
	import { setStyles } from "./types";
    import type {LayoutProps} from "./types"

    interface $$Props extends LayoutProps {
        onClick?: (event?: MouseEvent) => void
    }
    const props = $$props as $$Props

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

<column
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
</column>

<style lang="scss">
    column {
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    :global(ripple) {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        pointer-events: none;
        animation: ripple 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translate(-50%, -50%) scale(0.8);

        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    }
</style>
