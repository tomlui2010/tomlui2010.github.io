"use client";

import { useEffect, useRef, useState } from "react";

const CHARS_FULL = ".:+-=*#@&~<>{}[]|/\\";
const CHARS_MOBILE = "01";
const SPRING = 0.04;
const DAMP = 0.88;
const DESKTOP_PADDING_X = 28;
const MOBILE_PADDING_X = 10;
const DESKTOP_PADDING_Y = 28;
const MOBILE_PADDING_Y = 16;

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  char: string;
  a: number;
  ta: number;
  text: boolean;
  phase: number;
  delay: number;
};

type State = {
  particles: Particle[];
  parentW: number;
  scaledH: number;
  chars: string;
  charSize: number;
  mouseRadius: number;
  mouseForce: number;
  font: string;
  charFont: string;
};

type AsciiParticleHeroProps = {
  text?: string;
};

export default function AsciiParticleHero({
  text = "THOMAS LOUIS",
}: AsciiParticleHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) {
      return;
    }

    const hostElement = canvasElement.parentElement;
    if (!hostElement) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowFallback(true);
      return;
    }

    const renderingContext = canvasElement.getContext("2d");
    if (!renderingContext) {
      setShowFallback(true);
      return;
    }

    setShowFallback(false);

    const canvas = canvasElement;
    const container = hostElement;
    const ctx = renderingContext;

    const state: State = {
      particles: [],
      parentW: 0,
      scaledH: 0,
      chars: CHARS_FULL,
      charSize: 6,
      mouseRadius: 100,
      mouseForce: 3,
      font: "monospace",
      charFont: "500 6px monospace",
    };

    function rebuild() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const isMobile = window.innerWidth <= 600;
      const step = isMobile ? 3 : 4;

      state.chars = isMobile ? CHARS_MOBILE : CHARS_FULL;
      state.charSize = isMobile ? 4 : 7;
      state.mouseRadius = isMobile ? 50 : 100;
      state.mouseForce = isMobile ? 5 : 3;
      state.font = "monospace";
      state.charFont = `500 ${state.charSize}px ${state.font}`;

      state.parentW = container.offsetWidth;
      if (state.parentW === 0) {
        return false;
      }

      const baseFontSize = isMobile ? 92 : 120;
      const tempContext = document.createElement("canvas").getContext("2d");
      if (!tempContext) {
        return false;
      }

      tempContext.font = `700 ${baseFontSize}px ${state.font}`;
      const naturalWidth = tempContext.measureText(text).width;
      const horizontalPadding = isMobile
        ? MOBILE_PADDING_X
        : DESKTOP_PADDING_X;
      const verticalPadding = isMobile ? MOBILE_PADDING_Y : DESKTOP_PADDING_Y;
      const availableWidth = Math.max(
        state.parentW - horizontalPadding * 2,
        baseFontSize
      );
      const scaledSize = Math.floor(
        baseFontSize * (availableWidth / naturalWidth)
      );
      const sampleFont = `700 ${scaledSize}px ${state.font}`;
      tempContext.font = sampleFont;
      const textMetrics = tempContext.measureText(text);
      const textHeight = Math.ceil(
        textMetrics.actualBoundingBoxAscent +
          textMetrics.actualBoundingBoxDescent || scaledSize
      );
      const baselineY =
        verticalPadding + textMetrics.actualBoundingBoxAscent;
      state.scaledH = Math.max(
        isMobile ? 96 : 150,
        textHeight + verticalPadding * 2
      );

      canvas.style.width = `${state.parentW}px`;
      canvas.style.height = `${state.scaledH}px`;
      canvas.width = state.parentW * dpr;
      canvas.height = state.scaledH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const offscreen = document.createElement("canvas");
      offscreen.width = state.parentW;
      offscreen.height = state.scaledH;
      const offscreenContext = offscreen.getContext("2d");
      if (!offscreenContext) {
        return false;
      }

      offscreenContext.font = sampleFont;
      offscreenContext.fillStyle = "#fff";
      offscreenContext.textAlign = "center";
      offscreenContext.textBaseline = "alphabetic";
      offscreenContext.fillText(text, state.parentW / 2, baselineY);

      const imageData = offscreenContext.getImageData(
        0,
        0,
        state.parentW,
        state.scaledH
      );
      const previousParticles = state.particles;
      state.particles = [];

      const newTargets: Array<{ tx: number; ty: number }> = [];
      for (let y = 0; y < state.scaledH; y += step) {
        for (let x = 0; x < state.parentW; x += step) {
          const index = (y * state.parentW + x) * 4;
          if (imageData.data[index + 3] > 100) {
            newTargets.push({ tx: x, ty: y });
          }
        }
      }

      const previousTextParticles = previousParticles.filter(
        (particle) => particle.text
      );

      for (let index = 0; index < newTargets.length; index += 1) {
        const { tx, ty } = newTargets[index];

        if (index < previousTextParticles.length) {
          const particle = previousTextParticles[index];
          particle.tx = tx;
          particle.ty = ty;
          state.particles.push(particle);
          continue;
        }

        state.particles.push({
          x: tx + (Math.random() - 0.5) * state.parentW * 0.5,
          y: ty + (Math.random() - 0.5) * state.scaledH * 2.5,
          tx,
          ty,
          vx: 0,
          vy: 0,
          char: state.chars[Math.floor(Math.random() * state.chars.length)],
          a: 0,
          ta: isMobile
            ? 0.95 + Math.random() * 0.05
            : 0.85 + Math.random() * 0.15,
          text: true,
          phase: Math.random() * Math.PI * 2,
          delay: 0,
        });
      }

      const ambientCount = Math.max(
        30,
        Math.floor(state.particles.length * 0.15)
      );
      const previousAmbientParticles = previousParticles.filter(
        (particle) => !particle.text
      );

      for (let index = 0; index < ambientCount; index += 1) {
        if (index < previousAmbientParticles.length) {
          const particle = previousAmbientParticles[index];
          if (particle.x > state.parentW) {
            particle.x = Math.random() * state.parentW;
            particle.tx = particle.x;
          }
          if (particle.y > state.scaledH) {
            particle.y = Math.random() * state.scaledH;
            particle.ty = particle.y;
          }
          state.particles.push(particle);
          continue;
        }

        const x = Math.random() * state.parentW;
        const y = Math.random() * state.scaledH;
        state.particles.push({
          x,
          y,
          tx: x,
          ty: y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          char: state.chars[Math.floor(Math.random() * state.chars.length)],
          a: 0,
          ta: 0.04 + Math.random() * 0.07,
          text: false,
          phase: Math.random() * Math.PI * 2,
          delay: 0,
        });
      }

      return true;
    }

    let mouseX = -9999;
    let mouseY = -9999;
    let animationFrameId = 0;
    let startupFrameId = 0;
    let started = false;
    let destroyed = false;
    let resizeObserver: ResizeObserver | null = null;

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const onTouchMove = (event: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;
    };

    const onTouchEnd = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    canvas.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", onTouchMove, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() ||
      "#4458dc";

    const startTime = performance.now();

    function frame(now: number) {
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, state.parentW, state.scaledH);
      ctx.font = state.charFont;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = accent;

      for (const particle of state.particles) {
        const time = Math.max(0, elapsed - particle.delay);

        if (particle.text && time < 0.01) {
          ctx.globalAlpha = 0.02;
          ctx.fillText(particle.char, particle.x, particle.y);
          continue;
        }

        particle.vx += (particle.tx - particle.x) * SPRING;
        particle.vy += (particle.ty - particle.y) * SPRING;

        const deltaX = particle.x - mouseX;
        const deltaY = particle.y - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance < state.mouseRadius && distance > 0) {
          const force =
            (1 - distance / state.mouseRadius) ** 2 * state.mouseForce;
          particle.vx += (deltaX / distance) * force;
          particle.vy += (deltaY / distance) * force;
        }

        particle.vx *= DAMP;
        particle.vy *= DAMP;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.text) {
          particle.a =
            particle.ta + Math.sin(elapsed * 0.8 + particle.phase) * 0.08;
          if (time < 0.8 || Math.random() < 0.0008) {
            particle.char =
              state.chars[Math.floor(Math.random() * state.chars.length)];
          }
        } else {
          particle.a += (particle.ta - particle.a) * 0.04;
          particle.tx += (Math.random() - 0.5) * 0.2;
          particle.ty += (Math.random() - 0.5) * 0.2;
          if (particle.x < -20) {
            particle.x = state.parentW + 10;
            particle.tx = particle.x;
          }
          if (particle.x > state.parentW + 20) {
            particle.x = -10;
            particle.tx = particle.x;
          }
          if (particle.y < -20) {
            particle.y = state.scaledH + 10;
            particle.ty = particle.y;
          }
          if (particle.y > state.scaledH + 20) {
            particle.y = -10;
            particle.ty = particle.y;
          }
          if (Math.random() < 0.003) {
            particle.char =
              state.chars[Math.floor(Math.random() * state.chars.length)];
          }
        }

        ctx.globalAlpha = Math.max(0, particle.a);
        ctx.fillText(particle.char, particle.x, particle.y);
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(frame);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (rebuild()) {
          setShowFallback(false);
        }
      }, 150);
    };

    const startAnimation = () => {
      if (destroyed || started) {
        return;
      }

      if (!rebuild()) {
        startupFrameId = requestAnimationFrame(startAnimation);
        return;
      }

      started = true;
      setShowFallback(false);
      animationFrameId = requestAnimationFrame(frame);
      window.addEventListener("resize", onResize);
      resizeObserver = new ResizeObserver(() => {
        onResize();
      });
      resizeObserver.observe(container);
    };

    startAnimation();

    return () => {
      destroyed = true;
      cancelAnimationFrame(startupFrameId);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      resizeObserver?.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchstart", onTouchMove);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [text]);

  return (
    <div className="ascii-hero-mark" aria-label={showFallback ? text : undefined}>
      <canvas ref={canvasRef} className="ascii-hero-canvas" />
      {showFallback ? <span className="ascii-hero-fallback">{text}</span> : null}
    </div>
  );
}
