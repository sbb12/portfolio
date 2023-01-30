<script lang="ts">

    import SectionHead from '../../Lib/components/SectionHead.svelte';
    import { thisPage } from '/src/stores';
    $thisPage = 'experience';

    let knobEl: HTMLElement;
    let selected: string = 'EMG';
   
    $: {selected; moveKnob()}

    function moveKnob(){
        if (knobEl){
            knobEl.classList.remove('EMG' ,'BFI' , 'Misc');
            knobEl.classList.add(selected);
        }
    }

</script>


<main>
    <SectionHead num={'02'} title={"Where I've worked"} />
    <div class="job-section">
        <div class="selector">
            <div class="selector-bar">
                <svg id="bar">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke='#768286' stroke-width="2"/>
                </svg>
                <knob bind:this={knobEl} class="EMG"></knob>
                
            </div>
            <div class="options">
                <button class:selected={selected === 'EMG'} on:click={() => selected = "EMG"}>EMG</button>
                <button class:selected={selected === 'BFI'} on:click={() => selected = "BFI"}>BFI</button>
                <button class:selected={selected === 'Misc'} on:click={() => selected = "Misc"}>Misc</button>
            </div>
        </div>
        
        <div>
            <div class="job-details" class:current={selected === 'EMG'}>
                <h3>Developer <a href="https://uk.emglive.com/"><span>@ EMG</span></a></h3> 
                <h5>September 2022 - December 2022</h5>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, vel voluptate adipisci doloribus pariatur facere dolorum. Explicabo, cumque voluptates.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at molestias, illo aut quam voluptate.</li>
                </ol>
            </div>
            <div class="job-details" class:current={selected === 'BFI'}>
                <h3>Junior Developer <a href="https://www.wearebfi.co.uk/"><span>@ BFI - Big Fish Internet</span></a></h3> 
                <h5>July 2021 -  September 2022</h5>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, vel voluptate adipisci doloribus pariatur facere dolorum. Explicabo, cumque voluptates.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at molestias, illo aut quam voluptate.</li>
                </ol>
            </div>
            <div class="job-details" class:current={selected === 'Misc'}>
                <h3>Junior Developer <span>@ BFI - Big Fish Internet</span></h3> 
                <h5>July 2021 -  September 2022</h5>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, vel voluptate adipisci doloribus pariatur facere dolorum. Explicabo, cumque voluptates.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at molestias, illo aut quam voluptate.</li>
                </ol>
            </div>
        </div>
        
    </div>
</main>

<style lang="scss">
    :root {
        --tab-height: 4rem;
    }

    main{
        animation: fade 1s linear;
        margin: 0 auto;
    }

    .job-section {

        display: flex;
        flex-direction: row;
        padding: 1rem;

        .selector {
            
            display: flex;
            flex-direction: row;
            
            .selector-bar{
                position: relative;
                width: 1rem;
                
                #bar {
                    width: 7px;
                    height: 11rem;
                }
                
                knob {
                    position: absolute;
                    top: 0px;   
                    left: 0px;
                    width: 5px;
                    height: 2.24rem;
                    border-radius: 0.5rem;
                    background-color: #C57B57;
                    transition: transform 0.5s ease;
                }
            }
            
            .options {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0.5rem;
            padding: 0.6rem 0;
            height: 11rem;
            button {
                width: 5rem;
                border: none;
                background-color: transparent;
                color: #768286;
                text-align: left;
                transition: color 0.25s ease;
                &:hover {
                    color: #C57B57;
                }

                &.selected {
                    color: #C57B57;
                }
            }
        }
    }

    .job-details {
            display: none;
            opacity: 1;
            margin-left: 2rem;

            @media screen and (max-width: 768px) {
                margin-left: 0rem;
                
            }
            
            &.current {
                display: block;
                animation: fade 1s linear;
            }

            @keyframes fade {
                0% { opacity: 0 }
                10% { opacity: 0 }
                80% { opacity: 0.9 }
                100% { opacity: 1 }
            }   

            h3 {
                color: rgb(200,200,200);
                font-size: 1.5rem;
                margin-bottom: 0rem;
                span {
                    font-size: 1.25rem;
                    font-weight: 400;
                    color: #C57B57;
                }
            }
            h5 {
                font-size: 1rem;
                font-weight: 400;
                color: #768286;
            }
            ol{
                margin-top: 1rem;
                list-style: none;

                @media screen and (max-width: 768px) {
                    padding-right: 1rem;
                }
                li{
                    position: relative;
                    color: rgb(180,180,180);
                    max-width: 700px;
                    padding-bottom: 0.5rem;
                    margin-left: 1rem;
                    &::before{
                        content: ">";
                        position: absolute;
                        color: #C57B57;
                        left: -1rem;
                    }
                }
            }
        }
}

</style>