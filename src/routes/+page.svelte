<script lang="ts">
    import ThreeMe from '../Lib/components/ThreeMe.svelte';
    import NextButton from '../Lib/components/NextButton.svelte';
    import { thisPage } from '../stores';
	import { LoadingManager } from 'three';
    $thisPage = 'home';
</script>


<main>
    <left>
        <h4>Hello!</h4>
        <h1>Sercan Sokmen</h1>
        <p>
            I'm a web developer with a passion for technology, problem solving, and creating things online. 
        </p>    
    </left>
        <ThreeMe />
</main>


<NextButton to={"about"} title={"About"}/>

<style lang="scss">
    
    :global(main){
        width: 100%;
        margin: 0 auto;
        
    }
    main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width: 1200px) {
            flex-direction: column;
        }
    
        left {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            animation: fade 1s linear;
            
            @media screen and (max-width: 610px) {
                
                h1 {
                    line-height: 4.5rem;

                }
                
            }
        }
    }
</style>