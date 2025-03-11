"use client"

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground({ className }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className={`${className} w-full h-full absolute top-0 left-0`}
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            grab: {
              distance: 150,
              links: {
                opacity: 0.5
              }
            }
          },
        },
        particles: {
          color: {
            value: ["#FFD700", "#FFA500", "#FF8C00"], // Gold and amber colors
          },
          links: {
            color: "#FFD700",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: false,
              opacity: 0.1
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200
              }
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
            limit: 0
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "star"],
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
}