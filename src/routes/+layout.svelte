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
        height: 80vh;
        max-width: 1600px; 
        
        display: flex;
        align-items: center;
        margin: auto;
        margin-top: -6rem;
        @media screen and (max-width: 768px) {
            padding: 3rem 2rem;
        }
    }

</style>

