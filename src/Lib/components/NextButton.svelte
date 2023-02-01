<script lang="ts">

    export let title: string;
    export let to: string;

</script>

<a href="/{to}"> <button type="button">{title} ➡</button> </a>
    
<style lang="scss">
    a {
        margin: 2rem auto;
        animation: fade 1s linear;
        
        button {
            // border: 2px solid #C57B57;
            border-radius: 4px;
            padding: 0.5rem 1.5rem;
            background-color: transparent;
            color: #C57B57;
            transition: all 0.1s ease-in-out;
            &:hover {
                background-color: #C57B5722;
            }
        }
       
    }
</style>