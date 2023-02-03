<script lang="ts">
    export let title: string;
    export let num: string;

</script>



<div class="section-head"> 
    <h3><span>{num}.</span> {title}</h3>
    <svg>
        <line x1="0" y1="0" x2="100%" y2="0" stroke='#D9D9D9' stroke-width="1"/>
    </svg>
</div>

<style lang="scss">
    .section-head{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 25rem;
        max-width: 100%;
        padding: 0 0 1rem 0;   
        
        svg{
            margin-left: 1rem;
            max-width: 25rem;
            height: 1px;
        }

        h3{
            white-space: nowrap;
            margin: 0;
            padding: 0;

            span {
                color: #C57B57;
            }
            
        }
        p {
            margin: 0;
            padding: 0;
        }

    }
</style>