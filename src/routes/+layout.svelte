<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
    import NavItem from "$lib/components/NavItem.svelte";
	import Navigator from "$lib/components/Navigator.svelte";
    import { pwaInfo } from 'virtual:pwa-info'; 


  
  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''


    console.log($page)
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

{#await import('$lib/components/ReloadPrompt.svelte') then { default: ReloadPrompt}}
  <ReloadPrompt />
{/await}

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