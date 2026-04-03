(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/legacy-script-loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegacyScriptLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacyScriptLoader.useEffect": ()=>{
            void loadLegacyScripts().catch({
                "LegacyScriptLoader.useEffect": (error)=>{
                    console.error("Failed to load legacy scripts.", error);
                }
            }["LegacyScriptLoader.useEffect"]);
        }
    }["LegacyScriptLoader.useEffect"], []);
    return null;
}
_s(LegacyScriptLoader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LegacyScriptLoader;
var _c;
__turbopack_context__.k.register(_c, "LegacyScriptLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_legacy-script-loader_tsx_044k614._.js.map