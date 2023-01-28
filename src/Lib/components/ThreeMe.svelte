<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    let canvasEl: HTMLCanvasElement;
    // let renderer: THREE.WebGLRenderer;
    
    

    function loadThree(canvasEl: HTMLCanvasElement){

        let controls: any;
        let mixer: any;
        let model: any;

        const scene = new THREE.Scene()

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasEl,
            alpha: true,
            antialias: true
        })
        renderer.setSize(800, 400)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.BasicShadowMap
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        camera.position.y = 1;
        const cameraTarget = new THREE.Vector3(10, 100, 10)
        camera.lookAt(cameraTarget);

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
        // directionalLight1.shadow.mapSize.width = 2048;
        // directionalLight1.shadow.mapSize.height = 2048;

        scene.add(directionalLight1)

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ 
                color: 0x142B34, 
                transparent: true,
            })
        );

        floor.rotation.x = -Math.PI / 2;
        floor.castShadow = true;
        floor.receiveShadow = true;
        floor.position.set(0, -1.5, 0)
        scene.add(floor);

        const loader = new GLTFLoader()
        loader.load('/src/Lib/Three/surge2.glb', (gltf) => {
            console.log(gltf)

            model = gltf.scene;

            model.scale.set(0.7, 0.7, 0.7);
            model.position.set(0, -1.5, 0);
            model.rotation.y = -3;
            model.castShadow = true;
            model.receiveShadow = true;

            model.traverse((o) => {
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


        }, undefined, (error) => {
            console.error(error)
        })
        
        
        const clock = new THREE.Clock();
        const animate = () => {
            mixer?.update(clock.getDelta());
            
            if (model) {
                model.rotation.y += 0.001;
            }

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix()

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            
        };

        animate();
    }

    onMount(() => {
        loadThree(canvasEl)
    })    

</script>

<canvas bind:this={canvasEl}>

</canvas>