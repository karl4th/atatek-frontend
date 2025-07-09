module.exports = {

"[project]/.next-internal/server/app/api/proxy/[...path]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/proxy/[...path]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(request, { params }) {
    const { path } = await params;
    return handleProxyRequest(request, path, 'GET');
}
async function POST(request, { params }) {
    const { path } = await params;
    return handleProxyRequest(request, path, 'POST');
}
async function PUT(request, { params }) {
    const { path } = await params;
    return handleProxyRequest(request, path, 'PUT');
}
async function DELETE(request, { params }) {
    const { path } = await params;
    return handleProxyRequest(request, path, 'DELETE');
}
async function handleProxyRequest(request, pathSegments, method) {
    try {
        const apiPath = pathSegments.join('/');
        const searchParams = request.nextUrl.searchParams.toString();
        const apiUrl = `https://api.atatek.kz/${apiPath}${searchParams ? `?${searchParams}` : ''}`;
        console.log(`🔄 Proxying ${method} request to:`, apiUrl);
        // Prepare headers - copy all relevant headers from the original request
        const headers = {};
        // Copy important headers
        const headersToForward = [
            'content-type',
            'authorization',
            'user-agent',
            'accept',
            'accept-language',
            'accept-encoding',
            'cookie'
        ];
        headersToForward.forEach((headerName)=>{
            const value = request.headers.get(headerName);
            if (value) {
                headers[headerName] = value;
            }
        });
        // Ensure content-type for POST/PUT
        if (method === 'POST' || method === 'PUT') {
            headers['content-type'] = 'application/json';
        }
        console.log('🍪 Request headers:', headers);
        // Prepare request body for POST/PUT requests
        let body;
        if (method === 'POST' || method === 'PUT') {
            try {
                const requestBody = await request.json();
                body = JSON.stringify(requestBody);
                console.log('📝 Request body:', body);
            } catch (error) {
                console.log('❌ No request body or invalid JSON');
                body = undefined;
            }
        }
        // Make the request to the API
        const response = await fetch(apiUrl, {
            method,
            headers,
            body
        });
        console.log(`✅ API response status:`, response.status);
        console.log(`🍪 Response headers:`, Object.fromEntries(response.headers.entries()));
        // Get response data
        const responseData = await response.text();
        let jsonData;
        try {
            jsonData = JSON.parse(responseData);
        } catch  {
            jsonData = responseData;
        }
        // Create response
        const nextResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(jsonData, {
            status: response.status,
            statusText: response.statusText
        });
        // Forward ALL set-cookie headers properly and modify them for development
        const setCookieHeaders = response.headers.getSetCookie();
        if (setCookieHeaders && setCookieHeaders.length > 0) {
            console.log('🍪 Original cookies from API:', setCookieHeaders);
            setCookieHeaders.forEach((cookie)=>{
                // Modify cookie for development environment
                let modifiedCookie = cookie;
                // For development, change SameSite=none to SameSite=lax and remove Secure
                if ("TURBOPACK compile-time truthy", 1) {
                    modifiedCookie = modifiedCookie.replace(/SameSite=none/gi, 'SameSite=lax').replace(/;\s*Secure/gi, '');
                }
                console.log('🍪 Modified cookie:', modifiedCookie);
                nextResponse.headers.append('Set-Cookie', modifiedCookie);
            });
        }
        // Also handle single cookie header as fallback
        const singleSetCookie = response.headers.get('set-cookie');
        if (singleSetCookie && (!setCookieHeaders || setCookieHeaders.length === 0)) {
            console.log('🍪 Single cookie from API:', singleSetCookie);
            let modifiedCookie = singleSetCookie;
            if ("TURBOPACK compile-time truthy", 1) {
                modifiedCookie = modifiedCookie.replace(/SameSite=none/gi, 'SameSite=lax').replace(/;\s*Secure/gi, '');
            }
            console.log('🍪 Modified single cookie:', modifiedCookie);
            nextResponse.headers.set('Set-Cookie', modifiedCookie);
        }
        return nextResponse;
    } catch (error) {
        console.error('❌ Proxy error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Proxy request failed'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__59ec69f9._.js.map