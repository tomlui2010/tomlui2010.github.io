"use client";

import { useEffect } from "react";

const LEGACY_SCRIPT_SOURCES = [
  "/js/jquery-3.2.1.min.js",
  "/js/popper.js",
  "/js/bootstrap.min.js",
  "/js/stellar.js",
  "/js/jquery.magnific-popup.min.js",
  "/vendors/nice-select/js/jquery.nice-select.min.js",
  "/vendors/isotope/imagesloaded.pkgd.min.js",
  "/vendors/isotope/isotope-min.js",
  "/vendors/owl-carousel/owl.carousel.min.js",
  "/js/jquery.ajaxchimp.min.js",
  "/js/mail-script.js",
  "/js/theme.js",
] as const;

let legacyScriptsPromise: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const selector = `script[data-legacy-src="${src}"]`;
    const existing = document.querySelector<HTMLScriptElement>(selector);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.legacySrc = src;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      { once: true }
    );
    document.body.appendChild(script);
  });
}

async function loadLegacyScripts() {
  if (!legacyScriptsPromise) {
    legacyScriptsPromise = (async () => {
      for (const src of LEGACY_SCRIPT_SOURCES) {
        await loadScript(src);
      }

      const $ = (window as Window & { jQuery?: (target: Window) => { triggerHandler: (event: string) => void } }).jQuery;
      if (document.readyState === "complete" && $) {
        $(window).triggerHandler("load");
      }
    })().catch((error) => {
      legacyScriptsPromise = null;
      throw error;
    });
  }

  return legacyScriptsPromise;
}

export default function LegacyScriptLoader() {
  useEffect(() => {
    void loadLegacyScripts().catch((error) => {
      console.error("Failed to load legacy scripts.", error);
    });
  }, []);

  return null;
}
