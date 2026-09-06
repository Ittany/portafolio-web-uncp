// src/components/FondoBurbujas.jsx
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const FondoBurbujas = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: { value: darkMode ? '#0f172a' : '#f0f9ff' },
    },
    fpsLimit: 60,
    particles: {
      color: { value: darkMode ? '#60a5fa' : '#3b82f6' },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'top',
        outModes: { default: 'out' },
      },
      number: {
        density: { enable: true, area: 800 },
        value: darkMode ? 25 : 15,
      },
      opacity: {
        value: darkMode ? 0.4 : 0.2,
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: darkMode ? 25 : 15, max: darkMode ? 30 : 40 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      bounce: {
        horizontal: { value: 1 },
        vertical: { value: 1 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 50,
          duration: 2,
          opacity: darkMode ? 0.9 : 0.7,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default FondoBurbujas;