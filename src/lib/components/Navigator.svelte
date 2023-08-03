<script lang="ts">
	import Row from "$lib/layout/Row.svelte";
	import { Colors, Spacing } from "$lib/styles";



    let currentRoute = "home"

    function handleClick(route, e) {
        currentRoute = route
    }
</script>

<Row
    pBottom={Spacing[6]}
    align="center"
    justify="center">
    <Row
        bgColor={Colors.surface[1]}
        bRadius={Spacing[8]}
        pVertical={Spacing[3]}
        pHorizontal={Spacing[6]}
        gap={Spacing[4]}>
        <slot />
    </Row>
</Row>
