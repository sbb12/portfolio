<script>
    import { thisPage } from '/src/stores';
    import SectionHead from '../../Lib/components/SectionHead.svelte';
    $thisPage = 'about';

</script>

<main>
    <left>
        <SectionHead num={'01'} title='About' />

        <p> 
            My name is Sercan and i really enjoy building things. As a kid i was always interested in how things worked and would take them apart to see how they worked.
            I began tinkering with Arduinos and Raspberry Pi's and found that coding was the ultimate sandbox for me to create whatever idea popped into my head.
            It was only a hobby at first but i decided to pursue it as a career in 2021 when i began self-teaching myself web development. 
        </p>

        <p>
            Today, i have over a year of professional experience in web development with a focus on php back-end and i am always looking for new opportunities to learn and grow.
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
        }
    }
}
</style>
