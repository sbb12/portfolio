<script>
    import Nav from '../Lib/components/Nav.svelte';
    import Footer from '../Lib/components/Footer.svelte';
    import '../app.css'
</script>

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
        margin-top: 20rem;
        z-index: 10;


        @media screen and (max-width: 1920px) {
            max-width: 1200px;
            margin-top: 18rem;
        }

        @media screen and (max-width: 1600px) {
            max-width: 1000px;
            margin-top: 16rem;
        }

        @media screen and (max-width: 1200px) {
            padding: 0 2rem;
            width: calc(100vw - 4rem);

        }

        @media screen and (max-width: 836px) {
            padding: 0 1rem;
            width: calc(100vw - 2rem);
            margin-top: 10rem;
        }
         
        @media screen and (max-width: 500px) {
            padding: 2rem 1rem;
            width: calc(100vw - 2rem);
            margin-top: 6rem;
        }

        

        
    }

</style>

