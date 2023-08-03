<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
    import NavItem from "$lib/components/NavItem.svelte";
	import Navigator from "$lib/components/Navigator.svelte";
    console.log($page)
</script>



<div class="router">
    <div class="screens">
        <slot/>
    </div>
    
        <Navigator>
            <NavItem
            active={$page.route.id == "/"}
             onClick={() => goto("/")} />

            <NavItem
                iconName="list-alt"
                active={$page.route.id == "/workouts"}
                onClick={() => goto("/workouts")} />
        </Navigator>

</div>

<style lang="scss">

    .screens {
        padding: var(--12px);
        overflow: auto;
    }
    .router {
        background-color: rgb(25, 28, 28);
        display: grid;
        grid-template-rows: 1fr auto;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
</style>