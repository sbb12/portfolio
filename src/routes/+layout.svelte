<script>
    import Nav from '../Lib/components/Nav.svelte';
    import Footer from '../Lib/components/Footer.svelte';
    import '../app.css'
</script>

<svelte:head>
    <title>Sercan Dev</title>
</svelte:head>

<Nav />

<div class="container">
    <slot />
</div>

<Footer />


<style lang="scss">
    .container {
        width: 100%;
        height: 70vh;
        max-width: 1600px; 
        padding: 0 1rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: auto;
        z-index: 10;

        @media screen and (max-height: 500px) {
            margin-top: 6rem;
        }
        @media screen and (min-height: 500px) {
            margin-top: 8rem;
        }
        @media screen and (min-height: 900px) {
            margin-top: 11rem;
        }
        @media screen and (min-height: 1000px) {
            margin-top: 13rem;
        }


        @media screen and (max-width: 836px) {
            margin-top: 8rem;
        }
        @media screen and (min-width: 837px) {
            padding: 0 8rem;
        }
        
        
    }

</style>

