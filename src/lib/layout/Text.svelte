<script lang="ts">
    import { typographyTokens, type TypographyToken } from "../styles"
    import { Colors } from "../styles"

    export let type: TypographyToken = "body1-regular"
    export let color: string = Colors.on[1]
</script>

<span
    style="
  --font-size:{typographyTokens[type].fontSize}; 
  --font-weight:{typographyTokens[type].fontWeight};
  --color: {color};
">
    <slot />
</span>

<style lang="scss">
    span {
        font-size: var(--font-size);
        line-height: var(--font-size);
        font-weight: var(--font-weight);
        color: var(--color);
    }
</style>
