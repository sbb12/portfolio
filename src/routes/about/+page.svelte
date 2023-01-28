
<script>

</script>

<main>
    <left>
        <div class="section-head"> 
            <h3><span>01.</span> About</h3>
            <svg>
                <line x1="0" y1="0" x2="100%" y2="0" stroke='#D9D9D9' stroke-width="1"/>
            </svg>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro officia quaerat exercitationem ducimus ad dolorum velit quae quasi, fugit hic reiciendis, dicta sequi nemo dignissimos dolorem non adipisci iste earum inventore ipsam, repudiandae ut eius. Aliquid praesentium voluptatem debitis culpa. Adipisci recusandae quasi modi officia velit ad quaerat nisi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro officia quaerat exercitationem ducimus ad dolorum velit quae quasi, fugit hic reiciendis, dicta sequi nemo dignissimos dolorem non adipisci iste earum inventore ipsam, repudiandae ut eius. Aliquid praesentium voluptatem debitis culpa. Adipisci recusandae quasi modi officia velit ad quaerat nisi.</p>

        <div>
            <p class="tech-stack">Tech Stack:</p>
            <div class="stacks">
                <ol>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                </ol>
                <ol>
                    <li>SvelteKit</li>
                    <li>NextJS</li>
                    <li>Laravel</li>
                    <li>CodeIgniter</li>
                </ol>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Linux</li>
                    <li>Node.js</li>
                </ol>
            </div>
        </div>

    </left>
    
    <right>
        <!-- <img src="placeholder" alt="extremely handsome man"/> -->
    </right>
</main>


<style lang="scss">
    main {
        margin: 0 auto;
        animation: fade 1s linear;
        left{
            display: flex;
            flex-direction: column;
            
            .tech-stack, p{
                padding: 1rem 0;
            }
            
            .section-head{
                display: flex;
            flex-direction: row;
            align-items: center;
            width: 25rem;
            max-width: 100%;

            h3{
                white-space: nowrap;
                margin: 0;
                padding: 0;
                span {
                    color: #C57B57;
                }
            }
            
            svg{
                margin-left: 1rem;
                width: 25rem;
                height: 1px;
            }
        }
        
        .tech-stack{
            color: rgb(230,230,230);
        }
        .stacks {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 100%;
            
            ol{
                list-style: none;
                padding-right: 4rem;
                
                @media screen and (max-width: 768px) {
                    padding-right: 1rem;
                }
                li{
                    color: rgb(180,180,180);
                    margin: -3px 0;
                    &::before{
                        content: ">";
                        color: #C57B57;
                        margin-right: 0.5rem;
                    }
                }
            }
        }
    }
}
</style>
