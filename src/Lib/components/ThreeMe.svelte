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
        renderer.shadowMap.enabled = false
        renderer.shadowMap.type = THREE.BasicShadowMap
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap
        
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        camera.position.y = 1;
        const cameratarget = new THREE.Vector3(10, 100, 10)
        camera.lookAt(cameratarget);
        

        controls = new OrbitControls( camera, renderer.domElement );        

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5)
        hemisphereLight.position.set(1, 1, 1)
        scene.add(hemisphereLight)

        const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        directionalLight1.position.set(-20, 100, -10)
        directionalLight1.target.position.set(0, 0, 0)
        directionalLight1.castShadow = true;
        directionalLight1.shadow.mapSize.width = 2048;
        directionalLight1.shadow.mapSize.height = 2048;

        scene.add(directionalLight1)

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ 
                color: 0xffffff, 
                transparent: true,
            })
        );

        floor.rotation.x = -Math.PI / 2;
        floor.castShadow = false;
        floor.receiveShadow = true;
        // scene.add(floor);

        const loader = new GLTFLoader()
        loader.load('/src/Lib/Three/surge.glb', (gltf) => {
            console.log(gltf)

            model = gltf.scene;

            model.scale.set(0.7, 0.7, 0.7);
            model.position.set(0, -1.5, 0);
            model.rotation.y = -3;
            model.castShadow = true;
            model.receiveShadow = true;
            


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