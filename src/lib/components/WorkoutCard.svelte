<script lang="ts">
	import Column from "$lib/layout/Column.svelte";
	import Row from "$lib/layout/Row.svelte";
	import Text from "$lib/layout/Text.svelte";
	import { Colors, Elevations, Spacing } from "$lib/styles";


    import IconButton from "./IconButton.svelte"
</script>

<Column
    pVertical={Spacing[6]}
    pHorizontal={Spacing[5]}
    bgColor={Colors.surface[2]}
    bRadius={Spacing[4]}
    bShadow={Elevations.surface}
    gap={Spacing[6]}
    onClick={(e) => {
        console.log("olaa", e)
    }}>
    <Row justify="space-between">
        <Row gap={Spacing[4]}>
            <Row
                justify="center"
                align="center"
                height={Spacing[8]}
                width={Spacing[8]}
                bRadius={Spacing[3]}
                bgColor={Colors.surface[3]} />
            <Column gap={Spacing[3]}>
                <Text
                    color={Colors.on[1]}
                    type="title-regular">Superiores</Text>

                <Row gap={Spacing[3]}>
                    <Text
                        color={Colors.on[2]}
                        type="caption-regular">DOM</Text>
                    <Text
                        color={Colors.on[2]}
                        type="caption-regular">QUA</Text>
                </Row>
            </Column>
        </Row>

        <IconButton
            iconName="chevron-right"
            iconHighlight
            highlight
            elevation />
    </Row>

    <Row gap={Spacing[4]}>
        <Text
            color={Colors.on[2]}
            type="title-medium">0/5</Text>
    </Row>
</Column>
