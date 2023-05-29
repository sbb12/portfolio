<script lang="ts">
    import { thisPage } from '../../stores';
    import SectionHead from '../../Lib/components/SectionHead.svelte';
    import NextButton from '../../Lib/components/NextButton.svelte';
    $thisPage = 'work';

</script>

<main>
    <SectionHead num={'03'} title={"Things I've built"} />
    
    <project class="right">
        <a href="https://github.com/sbb12/portfolio" class="img-link" target="_blank" rel="noreferrer">
            <img src="/portfolio_page.webp" alt="portfolio page img"/>
        </a>
        <div class="project-details">
            <h4>Project</h4>
            <a href="/" target="_blank" rel="noreferrer"> <h3>This Website</h3> </a>

            <div class="project-description">
                <p>Personal portfolio website to showcase some of the things I've done as a developer and also to explore SvelteKit, ThreeJs and other technologies that interested me.</p>
            </div>
            <ul>
                <li>SvelteKit</li>
                <li>TypeScript</li>
                <li>ThreeJs</li>
                <li>SCSS</li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/sbb12/portfolio" target="_blank" rel="noreferrer"> 
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_95)">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1382 15.054 13.5183 14.0333 14.496 12.6718C15.4737 11.3102 15.9997 9.67624 16 8C16 3.58 12.42 0 8 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_12_95">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" rel="noreferrer">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_97)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1465 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1465 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.14601 9.146C6.09952 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09952 9.80751 6.14601 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.50001 10.0006C6.56575 10.0006 6.63085 9.98768 6.69159 9.96252C6.75233 9.93736 6.80752 9.90049 6.85401 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1465 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_12_97">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </project>

    <project class="left">
        <a href="https://eat.sercan.co.uk/" target="_blank" rel="noreferrer" class="img-link">
            <img src="/eatit_page.webp" alt="eatit page img"/>
        </a>
        <div class="project-details">
            <h4>Project</h4>
            <a href="https://eat.sercan.co.uk/" target="_blank" rel="noreferrer"> <h3>EatIt - calorie and fitness tracker</h3> </a>

            <div class="project-description">
                <p> 
                    A versatile web app designed to help users monitor their weight, nutrition, and associated costs, empowering them to achieve their goals.<br>
                    Uses PocketBase as a backend for user authentication and real time database operations.<br>
                    Allows for scanning of product barcodes to retrieve nutritional information.
                </p>
            </div>
            <ul>
                <li>SvelteKit</li>
                <li>PocketBase</li>
                <li>Tailwind</li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/sbb12/eatit" target="_blank" rel="noreferrer"> 
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_95)">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1382 15.054 13.5183 14.0333 14.496 12.6718C15.4737 11.3102 15.9997 9.67624 16 8C16 3.58 12.42 0 8 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_12_95">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://eat.sercan.co.uk/" target="_blank" rel="noreferrer">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_97)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1465 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1465 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.14601 9.146C6.09952 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09952 9.80751 6.14601 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.50001 10.0006C6.56575 10.0006 6.63085 9.98768 6.69159 9.96252C6.75233 9.93736 6.80752 9.90049 6.85401 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1465 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_12_97">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </project>

    <project class="right">
        <a href="https://aoc.sercan.co.uk" class="img-link" target="_blank" rel="noreferrer">
            <img src="/aoc_page.webp" alt="advent of code page image"/>
        </a>
        <div class="project-details">
            <h4>Project</h4>
            <a href="https://aoc.sercan.co.uk" target="_blank" rel="noreferrer"> <h3>Advent of code 2022</h3> </a>

            <div class="project-description">
                <p>Advent of code is an annual coding challenge. These pages are a good exercise for me to explain problems, articulate my thought processes and communicate my solutions to increasingly complex problems</p>
            </div>
            <ul>
                <li>SvelteKit</li>
                <li>TypeScript</li>
                <li>Canvas</li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/sbb12/aoc2022" target="_blank" rel="noreferrer"> 
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_95)">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1382 15.054 13.5183 14.0333 14.496 12.6718C15.4737 11.3102 15.9997 9.67624 16 8C16 3.58 12.42 0 8 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_12_95">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://aoc.sercan.co.uk" target="_blank" rel="noreferrer">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_97)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1465 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1465 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.14601 9.146C6.09952 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09952 9.80751 6.14601 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.50001 10.0006C6.56575 10.0006 6.63085 9.98768 6.69159 9.96252C6.75233 9.93736 6.80752 9.90049 6.85401 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1465 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_12_97">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </project>

    <project class="left">
        <a href="https://purplepuffer.itch.io/out-of-water" target="_blank" rel="noreferrer" class="img-link">
            <img src="/oow_page.webp" alt="placeholder"/>
        </a>
        <div class="project-details">
            <h4>Project</h4>
            <a href="https://purplepuffer.itch.io/out-of-water" target="_blank" rel="noreferrer"> <h3>Out of water - Game Jam</h3> </a>

            <div class="project-description">
                <p> 
                    3D platformer game made in Unity for the 2022 Game Off game jam. <br>
                    Collaboration project with 2 other developers to create a game in a short amount of time. 
                </p>
            </div>
            <ul>
                <li>C#</li>
                <li>Unity</li>
                <li>Express</li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/DanMossDev/game-off-22" target="_blank" rel="noreferrer"> 
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_95)">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1382 15.054 13.5183 14.0333 14.496 12.6718C15.4737 11.3102 15.9997 9.67624 16 8C16 3.58 12.42 0 8 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_12_95">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://purplepuffer.itch.io/out-of-water" target="_blank" rel="noreferrer">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_97)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.636 3.5C8.636 3.36739 8.58332 3.24021 8.48955 3.14645C8.39579 3.05268 8.26861 3 8.136 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H11.5C11.8978 16 12.2794 15.842 12.5607 15.5607C12.842 15.2794 13 14.8978 13 14.5V7.864C13 7.73139 12.9473 7.60421 12.8536 7.51045C12.7598 7.41668 12.6326 7.364 12.5 7.364C12.3674 7.364 12.2402 7.41668 12.1464 7.51045C12.0527 7.60421 12 7.73139 12 7.864V14.5C12 14.6326 11.9473 14.7598 11.8536 14.8536C11.7598 14.9473 11.6326 15 11.5 15H1.5C1.36739 15 1.24021 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4H8.136C8.26861 4 8.39579 3.94732 8.48955 3.85355C8.58332 3.75979 8.636 3.63261 8.636 3.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.5C16 0.367392 15.9473 0.240215 15.8536 0.146447C15.7598 0.0526784 15.6326 0 15.5 0L10.5 0C10.3674 0 10.2402 0.0526784 10.1465 0.146447C10.0527 0.240215 10 0.367392 10 0.5C10 0.632608 10.0527 0.759785 10.1465 0.853553C10.2402 0.947322 10.3674 1 10.5 1H14.293L6.14601 9.146C6.09952 9.19249 6.06264 9.24768 6.03748 9.30842C6.01232 9.36916 5.99937 9.43426 5.99937 9.5C5.99937 9.56574 6.01232 9.63084 6.03748 9.69158C6.06264 9.75232 6.09952 9.80751 6.14601 9.854C6.19249 9.90049 6.24768 9.93736 6.30842 9.96252C6.36916 9.98768 6.43426 10.0006 6.50001 10.0006C6.56575 10.0006 6.63085 9.98768 6.69159 9.96252C6.75233 9.93736 6.80752 9.90049 6.85401 9.854L15 1.707V5.5C15 5.63261 15.0527 5.75979 15.1465 5.85355C15.2402 5.94732 15.3674 6 15.5 6C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5V0.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_12_97">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </project>

</main>

<NextButton to={"contact"} title={"Contact"}/>


<style lang="scss">
    main{
        animation: fade 1s linear;
        margin: auto;
        width: 100%;
        max-width: 1000px;

        project {
            display: flex;
            margin: 2rem 0 8rem 0;

            h3{
                margin: 0.5rem 0
            }
           
            @media screen and (max-width: 836px) {
                flex-direction: column;
                background-color: #26434F3A;
                padding: 1rem 0;
                margin: 2rem 0 3rem 0; 
            }
            
            &.left {
                flex-direction: row-reverse;

                @media screen and (max-width: 836px) {
                    flex-direction: column;
                }

                .project-details {
                    align-items: flex-end;

                    @media screen and (max-width: 836px) {
                        align-items: unset;
                    }

                    .project-description{
                        margin-left: 0;
                        margin-right: -5rem;
                        border-radius: 0 8px 8px 0;
                    }
                }
            }

            a.img-link {
                border-radius: 4px;
                background-color: #C57B57;
                height: 400px;
                background-image: url("/placeholder-300x300.gif");
                background-size: cover;
                
                @media screen and (max-width: 1200px) {
                    height: 300px;
                }

                @media screen and (max-width: 836px) {
                        display: none;
                }
                
                img {
                    height: 400px;
                    width: 555px;
                    object-fit: fill;
                    filter: brightness(0.5) grayscale(0.5) opacity(0.8);
                    border-radius: 4px;
                    transition: all 0.3s ease-in-out;

                    @media screen and (max-width: 1200px) {
                    height: 300px;
                    width: 400px;

                    
                }

                    &:hover{
                        filter: brightness(1) grayscale(0.1) opacity(0.95);
                    }
                }
            }
            
            .project-details {
                display: flex;
                flex-direction: column;
                padding: 0 2rem ;
                max-width: 500px;

                .project-description{
                    z-index: 3;
                    background-color: #001f2c;
                    padding: 1.5rem 2rem;
                    margin-left: -5rem;
                    border-radius: 8px 0 0 8px;
                    width: 100%;

                    @media screen and (max-width: 836px) {
                        margin-left: 0;
                        border: unset;
                        padding: unset;
                        background-color: unset;
                    }

                    p{
                        color: rgb(160, 160, 160);
                        font-size: 1.1rem;
                        line-height: 140%;
                    }
                }

                ul {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                    margin-left: -0.5rem;

                    @media screen and (max-width: 836px) {
                        margin-left: unset;
                    }

                    li {
                        margin-right: 1rem;
                        color: rgb(200,200,200);
                    }
                }

            }
        }
    }
</style>