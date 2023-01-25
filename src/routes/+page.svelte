<script lang="ts">
    import ThreeMe from '../Lib/components/ThreeMe.svelte';
import TheeMe from '../Lib/components/ThreeMe.svelte';
</script>


<left>
    <h4>Hello!</h4>
    <h1>Sercan Sokmen</h1>
    <h3>Web Developer</h3>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nihil debitis ab dignissimos ad, 
        optio officia placeat fuga impedit odio et iusto nulla itaque dolorem aperiam quod? Reiciendis
        id nesciunt at quas laboriosam harum magnam natus repellendus deserunt! Iste, placeat?
    </p>    
</left>


<ThreeMe />

<style>
    left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>