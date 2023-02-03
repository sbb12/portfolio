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

    $: { open; toggleOpen(); }
    $: { mobileView; toggleMobileView()}


    // show/hide nav and overlay when 'open' changes
    function toggleOpen(){
        if (navEl){
            olEl.style.display = open ? 'flex' : 'none'
            overlayEl.style.display = open ? 'block' : 'none'
        }
    }

    // if page size changes, reset nav options
    function toggleMobileView(){
        if ( navEl ){
            open = false
            overlayEl.style.display = 'none'
            olEl.style.display = mobileView ? 'none' : 'flex'
            navEl.style.top =  '0rem'
            
        }
    }

    export let onClick = (): void => {
        open = !open
    }   
    
    function scrollVis(e: WheelEvent){
        if (document && navEl && mobileView){
            if ((document.body.scrollHeight > window.innerHeight) && e.deltaY > 0){
                navEl.style.top = '-10rem'
            } else {
                navEl.style.top = '0rem'
            }
        }
    }

    let lastScrollPos: number = 0
    function onScroll(e: Event){
        const currentScroll = window.scrollY;
        
        if (document && navEl && mobileView){
            if ((document.body.scrollHeight > window.innerHeight) && (currentScroll > lastScrollPos)){
                navEl.style.top = "-10rem"
            } else {
                navEl.style.top = '0rem'
            }
            lastScrollPos = currentScroll
        }
    }

    // hide the nav and overlay when a link is pressed
    function navReset(e: Event|null = null){
        if (e?.type === 'keydown' && e?.key !== 'Enter') return;        
        open = false
        navEl.style.top = '0rem'
        olEl.style.display ='flex' 
        overlayEl.style.display ='none'
    }

    onMount(() => {
        document = window.document;
    });

</script>



<svelte:window bind:innerWidth bind:scrollY on:scroll={onScroll}/>

<overlay bind:this={overlayEl} on:click={onClick} on:keypress={onClick}></overlay>

<nav bind:this={navEl} class:scrolling={scrollY > 0}>
    <a href="/">
        <img src="/logo.svg" alt="logo"/>
    </a>


    {#if mobileView}
        <AnimatedBurger {open} {onClick}/>
    {/if}

    <ol bind:this={olEl}>
        <li>
            <a href="/about" on:click={navReset} on:keydown={navReset}>
                <span class:current={$thisPage === 'about'}>01.</span> About
            </a>
        </li>
        <li>
            <a href="/experience" on:click={navReset} on:keydown={navReset}>
                <span class:current={$thisPage === 'experience'}>02.</span> Experience
            </a>
        </li>
        <li>
            <a href="/work" on:click={navReset} on:keydown={navReset}>
                <span class:current={$thisPage === 'work'}>03.</span> Work
            </a>
        </li>
        <li>
            <a href="/contact" on:click={navReset} on:keydown={navReset}>
                <span class:current={$thisPage === 'contact'}>04.</span> Contact
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

    @keyframes flyIn{  
        0%{transform: translateX(100%);}
        100%{transform: translateX(0%);}
    }
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

                @media screen and (max-width: 836px) {
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
        // max-width: 50vw;

        padding: 2rem 3rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        backdrop-filter: blur(4px);
        transition: all 0.5s ease-in-out;


        @media screen and (max-width: 836px) {
            padding: 1rem 1rem;
        }

        img {
            z-index: 20;
            height: 3.5rem;
        }
        
        
        ol {
            display: flex;
            flex-direction: row;
            align-items: center;

            z-index: 10;
            

            @media screen and (max-width: 836px) {
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
                background-color: #0f252ffa;
                box-shadow: 0 0 10px 0 rgba(0 ,0 , 0, 0.5);

                animation: flyIn 0.5s ease-in-out;
                
            }
            
            li {
                list-style: none;
                margin: 0 0 0 4rem;
                color: rgb(210, 210, 210);

                @media screen and (max-width: 836px) {
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

                        &.current {
                            border-bottom: #C57B57 1px solid;

                            @media screen and (max-width: 836px) {
                                border-bottom: none;
                                
                            }
                        }
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
            transition: all 0.1s ease-in-out;
            &:hover {
                background-color: #C57B5722;
            }
        }
    }

</style>
