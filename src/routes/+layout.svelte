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
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: auto;
        margin-top: 18rem;
        z-index: 10;


        @media screen and (max-width: 1920px) {
            max-width: 1200px;
        }

        @media screen and (max-width: 1600px) {
            max-width: 1000px;
        }

        @media screen and (max-width: 1200px) {
            padding: 0 2rem;
            width: calc(100vw - 4rem);
        }

        @media screen and (max-width: 768px) {
            padding: 0 1rem;
            width: calc(100vw - 2rem);
            margin-top: 8rem;
        }
         
        @media screen and (max-width: 500px) {
            padding: 2rem 1rem;
            width: calc(100vw - 2rem);
            margin-top: 6rem;
        }

        @media screen and (max-height: 700px) {
            margin-top: 6rem;
        }

        @media screen and (max-height: 800px) {
            margin-top: 8rem;
        }        
        @media screen and (max-height: 900px) {
            margin-top: 10rem;
        }        
        @media screen and (max-height: 1000px) {
            margin-top: 12rem;
        }        
        
    }

</style>

