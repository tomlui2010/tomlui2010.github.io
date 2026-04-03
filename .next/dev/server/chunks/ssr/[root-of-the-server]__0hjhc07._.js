module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/legacy-script-loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegacyScriptLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    "/js/theme.js"
];
let legacyScriptsPromise = null;
function loadScript(src) {
    return new Promise((resolve, reject)=>{
        const selector = `script[data-legacy-src="${src}"]`;
        const existing = document.querySelector(selector);
        if (existing) {
            if (existing.dataset.loaded === "true") {
                resolve();
                return;
            }
            existing.addEventListener("load", ()=>resolve(), {
                once: true
            });
            existing.addEventListener("error", ()=>reject(new Error(`Failed to load ${src}`)), {
                once: true
            });
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.dataset.legacySrc = src;
        script.addEventListener("load", ()=>{
            script.dataset.loaded = "true";
            resolve();
        }, {
            once: true
        });
        script.addEventListener("error", ()=>reject(new Error(`Failed to load ${src}`)), {
            once: true
        });
        document.body.appendChild(script);
    });
}
async function loadLegacyScripts() {
    if (!legacyScriptsPromise) {
        legacyScriptsPromise = (async ()=>{
            for (const src of LEGACY_SCRIPT_SOURCES){
                await loadScript(src);
            }
            const $ = window.jQuery;
            if (document.readyState === "complete" && $) {
                $(window).triggerHandler("load");
            }
        })().catch((error)=>{
            legacyScriptsPromise = null;
            throw error;
        });
    }
    return legacyScriptsPromise;
}
function LegacyScriptLoader() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadLegacyScripts().catch((error)=>{
            console.error("Failed to load legacy scripts.", error);
        });
    }, []);
    return null;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hjhc07._.js.map