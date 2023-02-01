<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    let canvasEl: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    let camera: THREE.PerspectiveCamera;

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
        renderer.setSize(500, 400)
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

            console.log(model.children[5].material.map.offset.y = 0.01)

            scene.add(model);

            mixer = new THREE.AnimationMixer(model);

            const clips = gltf.animations;
            const action = mixer.clipAction(clips[0]);
            action.play();


        }, undefined, (error) => {
            console.error(error)
        })
        
        
        let nextScreenTimer: number = 0;
        const fps = 60
        const clock = new THREE.Clock();
        const animate = () => {
            mixer?.update(clock.getDelta());
            
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


    onMount(() => {
        loadThree(canvasEl)
    })

</script>

<canvas bind:this={canvasEl}></canvas>


<style>
    canvas {
        animation: fade 1s linear;
    }
</style>