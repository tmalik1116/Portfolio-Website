import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarBackground = () => {
  const containerRef = useRef(null);
  
  // Use ref to maintain animation status across renders
  const stateRef = useRef({
    isInitialized: false,
    scene: null,
    camera: null,
    renderer: null,
    stars: null,
    animationFrameId: null
  });
  
  // Initialize Three.js scene once
  useEffect(() => {
    console.log("StarBackground mounting");
    
    // Skip if already initialized or no container
    if (stateRef.current.isInitialized || !containerRef.current) {
      return;
    }
    
    const state = stateRef.current;
    const container = containerRef.current;
    
    console.log("Initializing Three.js scene");
    
    // Initialize scene
    state.scene = new THREE.Scene();
    
    // Initialize camera
    state.camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      1, 
      1000
    );
    state.camera.position.z = 20;
    
    // Initialize renderer
    try {
      state.renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      state.renderer.setSize(window.innerWidth, window.innerHeight);
      state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      state.renderer.setClearColor(0x000000, 1);
      
      // Clear container and append renderer
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(state.renderer.domElement);
    } catch (error) {
      console.error("Failed to create renderer:", error);
      return;
    }
    
    // Create stars
    try {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        sizeAttenuation: true
      });
      
      // Generate random positions
      const starCount = 6000;
      const positions = new Float32Array(starCount * 3);
      
      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 500;
        positions[i + 1] = (Math.random() - 0.5) * 500;
        positions[i + 2] = (Math.random() - 0.5) * 500;
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      state.stars = new THREE.Points(starGeometry, starMaterial);
      state.scene.add(state.stars);
    } catch (error) {
      console.error("Failed to create stars:", error);
      return;
    }
    
    // Mark as initialized
    state.isInitialized = true;
    
    // Create animation function
    const animate = () => {
      if (!state.isInitialized) return;
      
      state.animationFrameId = requestAnimationFrame(animate);
      
      // Rotate stars
      if (state.stars) {
        state.stars.rotation.x += 0.0002;
        state.stars.rotation.y += 0.0001;
      }
      
      // Render scene
      if (state.renderer && state.scene && state.camera) {
        state.renderer.render(state.scene, state.camera);
      }
    };
    
    // Handle resize
    const handleResize = () => {
      if (!state.isInitialized) return;
      
      state.camera.aspect = window.innerWidth / window.innerHeight;
      state.camera.updateProjectionMatrix();
      state.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Handle scroll
    const handleScroll = () => {
      if (!state.isInitialized) return;
      
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight || 1;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
      // Update camera position
      state.camera.position.z = 20 + (scrollPercentage * 80);
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Start animation
    console.log("Starting animation loop");
    animate();
    
    // Cleanup function
    return () => {
      console.log("StarBackground cleanup");
      
      // Clean up event listeners
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      
      // Cancel animation frame
      if (state.animationFrameId !== null) {
        cancelAnimationFrame(state.animationFrameId);
        state.animationFrameId = null;
      }
      
      // Clean up Three.js resources
      if (state.stars) {
        if (state.stars.geometry) state.stars.geometry.dispose();
        if (state.stars.material) state.stars.material.dispose();
        state.scene.remove(state.stars);
        state.stars = null;
      }
      
      if (state.renderer) {
        state.renderer.dispose();
        if (container.contains(state.renderer.domElement)) {
          container.removeChild(state.renderer.domElement);
        }
        state.renderer = null;
      }
      
      if (state.scene) {
        state.scene.clear();
        state.scene = null;
      }
      
      state.camera = null;
      state.isInitialized = false;
    };
  }, []);
  
  // Ensure animation restarts after hot module replacement
  useEffect(() => {
    const restartAnimation = () => {
      const state = stateRef.current;
      
      if (state.isInitialized && state.animationFrameId === null) {
        console.log("Restarting animation loop");
        
        const animate = () => {
          state.animationFrameId = requestAnimationFrame(animate);
          
          if (state.stars) {
            state.stars.rotation.x += 0.0002;
            state.stars.rotation.y += 0.0001;
          }
          
          if (state.renderer && state.scene && state.camera) {
            state.renderer.render(state.scene, state.camera);
          }
        };
        
        animate();
      }
    };
    
    // Try to restart animation
    restartAnimation();
    
    // Also try after a short delay
    const timeoutId = setTimeout(restartAnimation, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }} 
    />
  );
};

export default StarBackground;