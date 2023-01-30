<script lang="ts">
    import { thisPage } from '/src/stores';
    $thisPage = 'contact';
</script>

<main>
    <div class="section-head"> 
        <h3><span>04.</span> So, what's next?</h3>
        <svg>
            <line x1="0" y1="0" x2="100%" y2="0" stroke='#D9D9D9' stroke-width="1"/>
        </svg>
    </div>

    <h1>Get In Touch</h1>

    <p>
        My inbox is always open. Whether you want to discuss an opportunity, have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <div class="contact-btn">
        <button>Say Hello</button>
    </div>

    <div class="email-div">
        <p>Sercansokmen0@gmail.com</p>
    </div>

</main>

<style lang="scss">

    main{
        margin: 0 auto;        

        .contact-btn, .email-div {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 3rem 0;
            
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
    }
</style>