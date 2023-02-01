<script lang="ts">
    // import ThreeMe from '../Lib/components/ThreeMe.svelte';
    import NextButton from '../Lib/components/NextButton.svelte';
    const threePromise = import('../Lib/components/ThreeMe.svelte')
    import { thisPage } from '../stores';
	import { LoadingManager } from 'three';
    $thisPage = 'home';
</script>


<main>
    <left>
        <h4>Hello!</h4>
        <h1>Sercan Sokmen</h1>
        <h3>I build things for the web</h3>
        <p>
            I'm a web developer with a passion for technology, problem solving and creating beautiful and functional websites. 
        </p>    
    </left>
    {#await threePromise}
        <div style="width=500; height=400;"></div>
    {:then {default: ThreeMe}}
        <ThreeMe />
    {/await}
</main>


<NextButton to={"about"} title={"About"}/>

<style lang="scss">
    
    main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width: 1200px) {
            flex-direction: column;
        
            
        }
    
        left {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            animation: fade 1s linear;
            
        }
    }
</style>