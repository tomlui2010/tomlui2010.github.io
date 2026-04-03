module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/lib/legacy-html.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readLegacyBodyHtml",
    ()=>readLegacyBodyHtml
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const EXTERNAL_SCRIPT_TAGS = /<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>[\s\S]*?<\/script>/gi;
const INLINE_SCRIPT_TAGS = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const YEAR_SCRIPT_TAG = /<script>\s*document\.write\(new Date\(\)\.getFullYear\(\)\);\s*<\/script>/gi;
const LEGACY_HTML_PATHS = {
    "index.html": __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(/* turbopackIgnore: true */ process.cwd(), "index.html"),
    "portfolio.html": __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(/* turbopackIgnore: true */ process.cwd(), "portfolio.html")
};
function readLegacyBodyHtml(fileName) {
    const htmlPath = LEGACY_HTML_PATHS[fileName];
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(htmlPath, "utf8");
    const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch?.[1] ?? "";
    body = body.replace(YEAR_SCRIPT_TAG, String(new Date().getUTCFullYear())).replace(EXTERNAL_SCRIPT_TAGS, "").replace(INLINE_SCRIPT_TAGS, "").replace(/href="index\.html"/g, 'href="/"').replace(/href="contact\.html"/g, 'href="/contact"').replace(/href="portfolio\.html"/g, 'href="/portfolio"').replace(/href="resume\.pdf"/g, 'href="/resume.pdf"').replace(/src="img\//g, 'src="/img/').replace(/src="fonts\//g, 'src="/fonts/').replace(/src="css\//g, 'src="/css/').replace(/src="js\//g, 'src="/js/').replace(/src="vendors\//g, 'src="/vendors/');
    return body.replace(/\r\n/g, "\n");
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$legacy$2d$html$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/legacy-html.ts [app-rsc] (ecmascript)");
;
;
function HomePage() {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$legacy$2d$html$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readLegacyBodyHtml"])("index.html");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        dangerouslySetInnerHTML: {
            __html: html
        }
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08nadaz._.js.map