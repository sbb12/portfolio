<script lang="ts">
    let color: string = '#D9D9D9';
    let size: number = 24;
</script>

<left>
    <ul class="icons">
        <li>
            <a href="https://github.com/sbb12" aria-label="GitHub" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img"  width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/sercan-sokmen/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
        </li>
        
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="150" fill="{color}" >
        <line x1="5" y1="0" x2="5" y2="150" stroke="{color}" stroke-width="1"/>
    </svg>
</left>

<right>
    <a href="mailto:sercansokmen0@gmail.com">Sercansokmen0@gmail.com</a>
    <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="150" fill="{color}" >
        <line x1="5" y1="0" x2="5" y2="150" stroke="{color}" stroke-width="1"/>
    </svg>
</right>



<style lang="scss">

    left, right {
        position: fixed;
        bottom: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1rem;

        .icons svg{
            transition: all 0.1s linear;
            &:hover {
                transform: translate(-2px, -2px);
                color: #C57B57;
                stroke: #C57B57;
            }
        }

        svg {
            margin-top: 1rem;
        }

        @media screen and (max-width: 836px) {
            display: none;
        }
    }
    left {
        left: 3rem;
    }
    right {
        right: 3rem;

        a {
                color: #D9D9D9;
                font-size: 1rem;
                letter-spacing: 0.1rem;
                margin: 0;
                transform: rotate(90deg) translateX(-44%);

                &:hover {
                    color: #C57B57;
                }

        }
    }
    
    

</style>