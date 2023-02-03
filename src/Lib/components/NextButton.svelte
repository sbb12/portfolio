<script lang="ts">

    export let title: string;
    export let to: string;

</script>

<a href="/{to}"> 
    <button type="button">
        {title}  
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
    </button> 
</a>
    
<style lang="scss">

@keyframes slowJiggle {
    0% { transform: translateX(0); }
    50% { transform: translateX(0.5rem); }
    100% { transform: translateX(0); }
} 

    a {
        margin: 4rem auto;
        animation: fade 1s linear;
        // z-index: 11;
        
        button {
            // border: 2px solid #C57B57;
            display: inline-flex;
            align-items: center;
            border-radius: 4px;
            padding: 0.5rem 1.5rem;
            background-color: transparent;
            color: #C57B57;
            transition: all 0.1s ease-in-out;
            margin-bottom: 5rem;
            
            &:hover {
                background-color: #C57B5722;
            }
            
            svg {
                margin-left: 0.5rem;
                animation: slowJiggle 2.5s ease-in-out infinite;
            }
        }
       
    }
</style>