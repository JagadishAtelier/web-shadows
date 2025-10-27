import React, { useEffect, useRef } from "react";

export default function MouseTrail() {
  const NUM_TRAILS = 15; // Number of tail dots
  const trails = useRef([]);
  const positions = useRef(
    Array.from({ length: NUM_TRAILS }, () => ({ x: 0, y: 0 }))
  );
  const mouse = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const timeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      isMoving.current = true;

      // If mouse stops moving for a while, mark as static
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const speed = 0.25;

      // Smoothly update first trail position
      positions.current[0].x += (mouse.current.x - positions.current[0].x) * speed;
      positions.current[0].y += (mouse.current.y - positions.current[0].y) * speed;

      // Make other trails follow the previous one
      for (let i = 1; i < NUM_TRAILS; i++) {
        positions.current[i].x +=
          (positions.current[i - 1].x - positions.current[i].x) * speed;
        positions.current[i].y +=
          (positions.current[i - 1].y - positions.current[i].y) * speed;
      }

      // Update trail elements
      positions.current.forEach((pos, i) => {
        const el = trails.current[i];
        if (el) {
          const scale = isMoving.current ? 1 - i / NUM_TRAILS : 0.6; // smaller when static
          const opacity = isMoving.current ? 1 - i / NUM_TRAILS : 0.8;
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`;
          el.style.opacity = opacity;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      {Array.from({ length: NUM_TRAILS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trails.current[i] = el)}
          className="absolute w-4 h-4 bg-gradient-to-r from-red-500 to-red-100 rounded-full"
          style={{
            transform: "translate3d(0,0,0)",
            transition: "opacity 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}
