<script lang="ts">
    import ThreeMe from '../Lib/components/ThreeMe.svelte';
    import { thisPage } from '/src/stores';
    $thisPage = 'home';
</script>


<main>
    <left>
        <h4>Hello!</h4>
        <h1>Sercan Sokmen</h1>
        <h3>Web Developer</h3>
        <p>
            I am a web developer with a passion for creating beautiful and functional websites. 
            
        </p>    
    </left>
    <ThreeMe />
</main>

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