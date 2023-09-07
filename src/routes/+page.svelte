<script>
	import Column from '$lib/layout/Column.svelte'
	import Text from '$lib/layout/Text.svelte'
	import WorkoutCard from '$lib/components/WorkoutCard.svelte'
	import '$lib/styles/global.css'
	import { Colors, Spacing } from '$lib/styles'
</script>

<home>
	<Column gap={Spacing[2]}>
		<Column
			align="center"
			gap={Spacing[3]}
			padding={Spacing[6]}>
			<Text type="title-medium">Treinos de hoje</Text>
			<Text
				type="body2-regular"
				color={Colors.on[2]}>Sábado, 15 de julho 2023</Text>
		</Column>

		<Column
			gap={Spacing[5]}
			pHorizontal={Spacing[6]}>
			<WorkoutCard />
			<WorkoutCard />
		</Column>
	</Column>
</home>

<style lang="scss">
	home {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
