<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    // 대소문자, 파일명 정확히 맞춰서 import
    import Side1 from '../assets/Side_1_Pip.png';
    import Side2 from '../assets/Side_2_Pips.png';
    import Side3 from '../assets/Side_3_Pips.png';
    import Side4 from '../assets/Side_4_Pips.png';
    import Side5 from '../assets/Side_5_Pips.png';
    import Side6 from '../assets/Side_6_Pips.png';

    let container: HTMLDivElement;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let dice: THREE.Mesh;
    let controls: OrbitControls;
    let animationFrameId: number;

    // import 변수명에 맞춰 배열 생성
    const texturePaths = [Side1, Side2, Side3, Side4, Side5, Side6];

    function init() {
        scene = new THREE.Scene();

        const width = container.clientWidth;
        const height = container.clientHeight;

        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 3;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const loader = new THREE.TextureLoader();
        const materials = texturePaths.map(path =>
            new THREE.MeshBasicMaterial({
                map: loader.load(path),
            })
        );

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        dice = new THREE.Mesh(geometry, materials);
        scene.add(dice);

        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        window.addEventListener('resize', onWindowResize);
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        dice.rotation.x += 0.01;
        dice.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    onMount(() => {
        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    });
</script>

<style>
    div {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>

<div bind:this={container}></div>
