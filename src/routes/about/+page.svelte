<script>
    import { thisPage } from '../../stores';
    import SectionHead from '../../Lib/components/SectionHead.svelte';
    import NextButton from '../../Lib/components/NextButton.svelte';
    $thisPage = 'about';

</script>

<main>
    <left>
        <SectionHead num={'01'} title='About' />

        <p> 
            I really enjoy building things. I've always been interested in how things worked and would dismantle things just to get a better understanding of them.
            I began tinkering with Arduinos and Raspberry Pi's and found that coding was the ultimate sandbox for me to create and actualise whatever cool new idea popped into my head.
            It was only a hobby at first but i decided to pursue it as a career in 2021 when i began learning web development. 
        </p>

        <p>
            Today, i have just under 2 years of professional work experience in web development with a focus on php back-end and i am always looking for new opportunities to learn and grow.            
        </p>


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
                    <li>Nodejs</li>
                </ol>
            </div>
        </div>

    </left>
    
    <right>
        <!-- <img src="placeholder" alt="extremely handsome man"/> -->
    </right>
</main>
<NextButton to={"experience"} title={"Experience"}/>

<style lang="scss">
    main {
        margin: 0 auto;
        animation: fade 1s linear;
        left {
            display: flex;
            flex-direction: column;
            max-width: 1200px;
            margin: 0 auto;
            
            .tech-stack, p{
                padding: 1rem 0;
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
                        padding-right: 2rem;
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

                @media screen and (max-width: 420px) {
                    // flex-direction: column;
                    
                    ol {
                        padding-top: 1rem;
                    }

                    
                }
            }
        }
    }
</style>
