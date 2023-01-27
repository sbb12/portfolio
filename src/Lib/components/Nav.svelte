<script lang="ts">
	import { onMount } from 'svelte';
    import { thisPage } from '../../stores';
    import AnimatedBurger from './AnimatedBurger.svelte';

    export let open: boolean = false;
    let innerWidth: number = 0;
    $: mobileView = innerWidth <= 836;
    mobileView = false;

    let document: Document;
    let navEl: HTMLElement;
    let olEl: HTMLElement;
    let overlayEl: HTMLElement;

    let scrollY: number;

    $: { mobileView; resize(); }
    $: { open; resetOverlay(); }

    // hide the nav and overlay when the window is resized
    function resize() {
        if (olEl && overlayEl) {
            open = false;
            olEl.style.display = mobileView ? 'none' : 'flex'     
            navEl.style.top = '0rem'       
        };
        if (overlayEl && !open){
            overlayEl.style.display = 'none'
            navEl.style.top = '0rem' 
        }
    }

    // force hide the overlay when the nav is closed
    function resetOverlay(){
        if ( overlayEl && !open){
            overlayEl.style.display = 'none'
        }
    }

    // nav menu toggle for mobile
    export let onClick = (): void => {
        open = !open
        olEl.style.display = open ? 'flex' : 'none'
        overlayEl.style.display = open ? 'block' : 'none'
    }   
    
    // hide the nav when scrolling down
    function scrollVis(e: WheelEvent){
        if (document && navEl && !mobileView){
            if ((document.body.scrollHeight > window.innerHeight) && e.deltaY > 0){
                navEl.style.top = '-10rem'
            } else {
                navEl.style.top = '0rem'
            }
        }
    }

    onMount(() => {
        document = window.document;
    });

</script>

<svelte:window bind:innerWidth bind:scrollY on:mousewheel={scrollVis}/>
<overlay bind:this={overlayEl} on:click={onClick} on:keypress={onClick}></overlay>
<nav bind:this={navEl} class:scrolling={scrollY > 0}>
    <a href="/">
        <img src="/logo.svg" alt="logo" class="h-14"/>
    </a>


    {#if mobileView}
        <AnimatedBurger {open} {onClick}/>
    {/if}

    <ol bind:this={olEl}>
        <li class:current={$thisPage === 'about'}>
            <a href="/about">
                <span>01.</span> About
            </a>
        </li>
        <li class:current={$thisPage === 'experience'}>
            <a href="/experience">
                <span>02.</span> Experience
            </a>
        </li>
        <li class:current={$thisPage === 'work'}>
            <a href="/work">
                <span>03.</span> Work
            </a>
        </li>
        <li class:current={$thisPage === 'contact'}>
            <a href="/contact">
                <span>04.</span> Contact
            </a>
        </li>
        <li>
            <button>
                Resume
            </button>
        </li>
    </ol>

</nav>


<style lang="scss">
    overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.1);
        backdrop-filter: blur(4px);
        z-index: 5;
        display: none;
        transition: display 1s ease-in-out;
    }

    :global() {
            nav.scrolling{
                background: #0f252ffa;
                padding: 1rem 3rem;
                box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);

                @media screen and (max-width: 768px) {
                    padding: 1rem 1rem;
                }
            }
    }
    
    nav {

        position: fixed;
        top: 0rem;
        left: 0;
        z-index: 20;

        color: #FAF6EF;
        font-weight: 300;
        width: 100%;

        padding: 2rem 3rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        backdrop-filter: blur(4px);
        transition: all 0.5s ease-in-out;


        @media screen and (max-width: 768px) {
            padding: 1rem 1rem;
        }

        img {
            z-index: 20;
        }
        
        
        ol {
            display: flex;
            flex-direction: row;
            align-items: center;

            z-index: 10;

            @media screen and (max-width: 768px) {
                display: none;
                height: 100vh;
                width: 50vw;
                min-width: 20rem;
                z-index: 10;
                position: absolute;
                top: 0;
                right: 0;
                flex-direction: column;
                justify-content: center;
                background-color: #16333F;

                
            }
            
            li {
                list-style: none;
                margin: 0 0 0 4rem;
                color: rgb(210, 210, 210);

                @media screen and (max-width: 768px) {
                    margin: 2rem 0;
                }
                
                &.current {
                    text-decoration: underline #C57B57;
                }
                a { 
                    transition: color 0.1s ease-in-out;
                    &:hover {
                        color: #C57B57;
                    }
                    @media screen and (max-width: 1200px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    span {
                        font-weight: 400;
                        color: #C57B57;
                    }
                    
                        
                    
                }
            }
        }

        button {
            border: 3px solid #C57B57;
            border-radius: 8px;
            padding: 1rem 1.5rem;
            background-color: transparent;
            color: #C57B57;
            :hover {
                background-color: #C57B57;
                color: #FAF6EF;
            }
        }
    }

</style>
