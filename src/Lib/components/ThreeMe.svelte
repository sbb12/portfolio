<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    let canvasEl: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    let camera: THREE.PerspectiveCamera;

    let loadDivEl: HTMLDivElement;
    let loadWheelEl: SVGPathElement;

    function loadThree(canvasEl: HTMLCanvasElement){

        let controls: any;
        let mixer: any;
        let model: any;

        const scene = new THREE.Scene()

        renderer = new THREE.WebGLRenderer({
            canvas: canvasEl,
            alpha: true,
            antialias: true
        })
        renderer.setSize(400, 320)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        
        
        camera = new THREE.PerspectiveCamera(75, 500 / 400, 0.1, 1000)
        camera.position.z = 5
        camera.position.y = 2;
        camera.lookAt( new THREE.Vector3(10, 100, 10));

        controls = new OrbitControls( camera, renderer.domElement );        

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5)
        hemisphereLight.position.set(1, 1, 1)
        scene.add(hemisphereLight)

        const atmosphereLight = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(atmosphereLight)

        const directionalLight1 = new THREE.DirectionalLight(0xaaaaaa, 1.0);
        directionalLight1.position.set(20, 20, 10)
        directionalLight1.target.position.set(0, 0, 0)
        directionalLight1.castShadow = true;
        directionalLight1.shadow.mapSize.width = 2048;
        directionalLight1.shadow.mapSize.height = 2048;

        scene.add(directionalLight1)

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.ShadowMaterial({ 
                opacity: 0.2, 
            })
        );

        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        floor.position.set(0, -1.5, 0)

       
        scene.add(floor);

        const loader = new GLTFLoader()
        // loader.load('/src/Lib/Three/surge2.glb', (gltf) => {
        loader.load('/surge2.glb', (gltf) => {

            model = gltf.scene;

            model.scale.set(0.8, 0.8, 0.8);
            model.position.set(0, -1.5, 0);
            model.rotation.y = -2.6;

            model.traverse((o: any) => {
                if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                }
            });
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);

            const clips = gltf.animations;
            const action = mixer.clipAction(clips[0]);
            action.play();

            canvasEl.style.display = 'block';
            loadDivEl.style.display = 'none';

        }, (xhr) => {
            let loaded = (xhr.loaded / xhr.total)
            if (loadWheelEl) {
                loadWheelEl.style.strokeDasharray = "" + 251.2 * loaded + ", 251.2"  
            }
        }, (error) => {
            console.error(error)
        })
        
        
        let nextScreenTimer: number = 0;
        const fps = 60
        const clock = new THREE.Clock();
        const animate = () => {
            mixer?.update(clock.getDelta());
            resize();
            
            if (model) {
                model.rotation.y += (0.001 * (60/fps));

                if (clock.oldTime > nextScreenTimer) {
                    nextScreenTimer = clock.oldTime  + 100 + (Math.random() * Math.random() * 1600);
                    model.children[5].material.map.offset.y += 4/144
                }
            }
            setTimeout(() => {
                requestAnimationFrame(animate);
            }, 1000/fps);
            renderer.render(scene, camera);
        };

        animate();
        
    }

    function resize() {
        if (renderer) {
            if (window.innerWidth <= 550) {
                const w = window.innerWidth - 50
                renderer.setSize(w, w * 0.8)
                camera.aspect = w / (w * 0.8)
            } else {
                renderer.setSize(500, 400)
                camera.aspect = 500 / 400
            }
            camera.updateProjectionMatrix()
        }

    }

    onMount(() => {
        loadThree(canvasEl)
        window.addEventListener('resize', resize)
    })

</script>

<three>
    <canvas bind:this={canvasEl}></canvas>
    <div class="loading-wheel" bind:this={loadDivEl}>
        <svg 
            id="loading-wheel" 
            viewBox="0 0 100 100"
            stroke="#C57B57"
            height="60"
            width="50"
        >
        <circle cx="50" cy="50" r="40" fill="none" stroke-width="3" stroke="#768286"></circle>
        <path fill="none" stroke-width="3" stroke="#C57B57"
        d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
           bind:this={loadWheelEl}>
        </path>
    </svg >

    </div>
    


</three>


<style lang="scss">

    three{
        animation: fade 1s linear;
    }
    canvas {
        display: none;
        margin: 0 auto;
        animation: fade 1s linear;
    }

    .loading-wheel {
        width: 400px;
        height: 320px;
        margin: auto;
        display: flex;
        svg {
            margin: auto;
            path {
                transition: stroke-dasharray 0.3s linear;
                stroke-dasharray: 5, 251.2;
            }
        }
    }
    
</style>