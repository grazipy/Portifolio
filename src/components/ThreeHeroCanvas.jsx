import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeHeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4fd1c5,
      metalness: 0.6,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    const directional = new THREE.DirectionalLight(0x87ceeb, 1.3);
    directional.position.set(3, 3, 2);

    scene.add(ambient, directional);

    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      mesh.rotation.x = t * 0.25;
      mesh.rotation.y = t * 0.4;
      group.position.y = Math.sin(t * 0.9) * 0.12;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="three-canvas" ref={containerRef} aria-hidden="true" />;
}

export default ThreeHeroCanvas;
