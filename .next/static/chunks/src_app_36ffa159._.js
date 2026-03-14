(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchBar(param) {
    let { className = "", placeholder = "", value, onChange, data, onFilter } = param;
    _s();
    const [internalSearch, setInternalSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Use external value if provided, otherwise use internal state
    const searchValue = value !== undefined ? value : internalSearch;
    const handleChange = onChange || ((e)=>setInternalSearch(e.target.value));
    // Filter data when search changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            if (data && onFilter) {
                if (searchValue.trim() === "") {
                    onFilter(data);
                } else {
                    const filtered = data.filter({
                        "SearchBar.useEffect.filtered": (item)=>{
                            // Verificar que item es un objeto válido
                            if (!item || typeof item !== 'object') return false;
                            // Convertir todos los valores a string, incluyendo valores null/undefined
                            const searchableText = Object.values(item).map({
                                "SearchBar.useEffect.filtered.searchableText": (value)=>{
                                    if (value === null || value === undefined) return '';
                                    if (typeof value === 'object') return JSON.stringify(value);
                                    return String(value);
                                }
                            }["SearchBar.useEffect.filtered.searchableText"]).join(" ").toLowerCase();
                            return searchableText.includes(searchValue.toLowerCase());
                        }
                    }["SearchBar.useEffect.filtered"]);
                    onFilter(filtered);
                }
            }
        }
    }["SearchBar.useEffect"], [
        searchValue,
        data,
        onFilter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.4
        },
        className: "flex items-center border border-tangaroa-950 rounded-md bg-tangaroa-50 px-3 py-2 w-150 " + className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: placeholder,
                value: searchValue,
                onChange: handleChange,
                className: "flex-1 bg-transparent outline-none placeholder-[rgba(43,44,44,1)] text-tangaroa-950"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SearchBar.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "text-[rgba(43,44,44,1)] w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SearchBar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SearchBar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "NkiDFe0C7hQ0HlcPR8AWvvEJ+7E=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function GroupTable(param) {
    let { headers, rows, OpenOnDeletetModal, OpenOnEditModal, onEditButton, onCopyButton, onManageStudents } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "table-auto w-full border-collapse border border-tangaroa-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: headers.map((header, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].th, {
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: index * 0.05,
                                        duration: 0.3
                                    },
                                    className: "border bg-[rgba(229,229,229,1)] text-blue-950 border-tangaroa-950 px-2 py-2",
                                    children: header
                                }, header, false, {
                                    fileName: "[project]/src/app/components/Table.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Table.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Table.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: index * 0.05,
                                    duration: 0.3
                                },
                                whileHover: {
                                    backgroundColor: "rgba(219, 234, 254, 0.5)"
                                },
                                className: "text-center text-tangaroa-950",
                                children: [
                                    Object.values(row).map((value, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-tangaroa-950 px-2 py-1",
                                            children: value
                                        }, i, false, {
                                            fileName: "[project]/src/app/components/Table.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border border-tangaroa-950 px-2 py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-2",
                                            children: [
                                                onManageStudents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.2
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    onClick: ()=>onManageStudents(row),
                                                    title: "Gestionar estudiantes del grupo",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        size: 16,
                                                        className: "text-[#0C2340] transition-all hover:text-[#B15B29]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Table.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Table.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.2
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    onClick: ()=>{
                                                        onEditButton(row);
                                                        OpenOnEditModal();
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        size: 16,
                                                        className: "text-tangaroa-950 transition-all hover:text-putty-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Table.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Table.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.2
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    onClick: ()=>{
                                                        onEditButton(row);
                                                        OpenOnDeletetModal();
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16,
                                                        className: "text-tangaroa-950 transition-all hover:text-putty-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Table.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Table.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 25
                                                }, this),
                                                onCopyButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.2
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    onClick: ()=>onCopyButton(row),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        size: 16,
                                                        className: "text-tangaroa-950 transition-all hover:text-putty-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Table.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Table.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Table.tsx",
                                            lineNumber: 65,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Table.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Table.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Table.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Table.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Table.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Table.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = GroupTable;
var _c;
__turbopack_context__.k.register(_c, "GroupTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ReloadButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReloadButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ReloadButton(param) {
    let { className, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9,
            rotate: -180
        },
        transition: {
            duration: 0.3
        },
        onClick: onClick,
        className: "flex bg-tangaroa-900 rounded-xl justify-center p-2 hover:bg-tangaroa-800 transition-all " + className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {}, void 0, false, {
            fileName: "[project]/src/app/components/ReloadButton.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ReloadButton.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ReloadButton;
var _c;
__turbopack_context__.k.register(_c, "ReloadButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/PlusButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlusButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function PlusButton(param) {
    let { className, OpenOnPlusModal } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.1,
                rotate: 90
            },
            whileTap: {
                scale: 0.9
            },
            transition: {
                duration: 0.2
            },
            onClick: OpenOnPlusModal,
            className: "flex bg-tangaroa-900 rounded-xl justify-center p-2 hover:bg-tangaroa-950 transition-all " + className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                fileName: "[project]/src/app/components/PlusButton.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/PlusButton.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c = PlusButton;
var _c;
__turbopack_context__.k.register(_c, "PlusButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpdateGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function UpdateGroupModal(param) {
    let { children, isOpen, onClose } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            className: "fixed inset-0 bg-black/40 flex justify-center items-center z-50",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.9,
                    opacity: 0
                },
                transition: {
                    duration: 0.2
                },
                className: "bg-putty-50 rounded-lg p-10 w-[810px] max-w-full  relative",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-amber-700 hover:text-amber-500 transition-colors",
                        "aria-label": "Cerrar modal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Modal.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Modal.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Modal.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Modal.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Modal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = UpdateGroupModal;
var _c;
__turbopack_context__.k.register(_c, "UpdateGroupModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Button(param) {
    let { label, className, onClick, disabled } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        whileHover: {
            scale: disabled ? 1 : 1.02,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        },
        whileTap: {
            scale: disabled ? 1 : 0.98
        },
        transition: {
            duration: 0.2
        },
        onClick: onClick,
        disabled: disabled,
        className: "bg-putty-600 rounded-sm py-2 px-4 min-w-55 w-fit mt-15 transition-colors " + className,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/components/Button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/FormGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupFormEdit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GroupFormEdit(param) {
    let { data, type, onChange, functionToExecute, coursesOptions = [], teachersOptions = [] } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        groupid: 0,
        courseid: 0,
        teacherid: 0,
        kangaroo_teacherid: null,
        observer_teacherid: null,
        numberofstudents: 0,
        classdays: "",
        classtime: "",
        start_deadline: null,
        status: ""
    });
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDays, setSelectedDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const weekDays = [
        {
            value: "lunes",
            label: "Lun"
        },
        {
            value: "martes",
            label: "Mar"
        },
        {
            value: "miércoles",
            label: "Mié"
        },
        {
            value: "jueves",
            label: "Jue"
        },
        {
            value: "viernes",
            label: "Vie"
        },
        {
            value: "sábado",
            label: "Sáb"
        },
        {
            value: "domingo",
            label: "Dom"
        }
    ];
    // Efecto para cambiar el label cuando cambia el tipo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupFormEdit.useEffect": ()=>{
            switch(type){
                case "new":
                    setLabel("Crear");
                    setFormData({
                        groupid: 0,
                        courseid: 0,
                        teacherid: 0,
                        kangaroo_teacherid: null,
                        observer_teacherid: null,
                        numberofstudents: 0,
                        classdays: "",
                        classtime: "",
                        start_deadline: null,
                        status: ""
                    });
                    setSelectedDays([]);
                    break;
                case "edit":
                    setLabel("Actualizar");
                    break;
                case "delete":
                    setLabel("Eliminar");
                    break;
            }
        }
    }["GroupFormEdit.useEffect"], [
        type
    ]);
    // Efecto separado para cargar data cuando está en modo edit o delete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupFormEdit.useEffect": ()=>{
            if ((type === "edit" || type === "delete") && data != null) {
                setFormData(data);
                // Parsear días seleccionados si vienen como string separado por comas
                if (data.classdays) {
                    setSelectedDays(data.classdays.split(',').map({
                        "GroupFormEdit.useEffect": (d)=>d.trim()
                    }["GroupFormEdit.useEffect"]));
                }
            }
        }
    }["GroupFormEdit.useEffect"], [
        data,
        type
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const numericFields = [
            "numberofstudents",
            "courseid",
            "teacherid",
            "kangaroo_teacherid",
            "observer_teacherid"
        ];
        let processedValue = value;
        if (numericFields.includes(name)) {
            if (value === "" || value === "0") {
                processedValue = name === "numberofstudents" ? 0 : null;
            } else {
                const numValue = parseInt(value, 10);
                // Evitar números negativos en numberofstudents
                if (name === "numberofstudents" && numValue < 0) {
                    processedValue = 0;
                } else {
                    processedValue = numValue;
                }
            }
        }
        const updatedData = {
            ...formData,
            [name]: processedValue
        };
        setFormData(updatedData);
        onChange === null || onChange === void 0 ? void 0 : onChange(updatedData); // notificar cambios
    };
    const handleDayToggle = (day)=>{
        if (type === "delete") return;
        const newSelectedDays = selectedDays.includes(day) ? selectedDays.filter((d)=>d !== day) : [
            ...selectedDays,
            day
        ];
        setSelectedDays(newSelectedDays);
        const updated = {
            ...formData,
            classdays: newSelectedDays.join(', ')
        };
        setFormData(updated);
        onChange === null || onChange === void 0 ? void 0 : onChange(updated);
    };
    const incrementStudents = ()=>{
        if (type === "delete") return;
        const updated = {
            ...formData,
            numberofstudents: formData.numberofstudents + 1
        };
        setFormData(updated);
        onChange === null || onChange === void 0 ? void 0 : onChange(updated);
    };
    const decrementStudents = ()=>{
        if (type === "delete") return;
        const updated = {
            ...formData,
            numberofstudents: Math.max(0, formData.numberofstudents - 1)
        };
        setFormData(updated);
        onChange === null || onChange === void 0 ? void 0 : onChange(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-x-10 gap-y-6 text-[#0C2340] text-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-x-4 gap-y-4",
            children: [
                type != "new" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "groupid",
                            className: "mb-1 font-semibold",
                            children: "Id grupo (Autogenerado)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "groupid",
                            name: "groupid",
                            disabled: true,
                            value: formData.groupid,
                            onChange: handleChange,
                            readOnly: true,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mb-1 font-semibold",
                            children: "Días de clase*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 flex-wrap",
                            children: weekDays.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: type === "delete",
                                    onClick: ()=>handleDayToggle(day.value),
                                    className: "px-3 py-2 rounded-md border transition-colors ".concat(selectedDays.includes(day.value) ? 'bg-[#B15B29] text-white border-[#B15B29]' : 'bg-[#F0F4F8] text-[#0C2340] border-[#0C2340]', " ").concat(type === "delete" ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#944a20] hover:text-white'),
                                    children: day.label
                                }, day.value, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "classtime",
                            className: "mb-1 font-semibold",
                            children: "Hora de clase*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "time",
                            id: "classtime",
                            name: "classtime",
                            value: formData.classtime,
                            disabled: type === "delete",
                            onChange: handleChange,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "courseid",
                            className: "mb-1 font-semibold",
                            children: "Curso*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "courseid",
                            name: "courseid",
                            value: formData.courseid || 0,
                            disabled: type === "delete",
                            onChange: handleChange,
                            required: true,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    disabled: true,
                                    children: "Selecciona un curso"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                coursesOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/src/app/components/FormGroup.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "status",
                            className: "mb-1 font-semibold",
                            children: "Estado*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "status",
                            name: "status",
                            value: formData.status,
                            disabled: type === "delete",
                            onChange: handleChange,
                            required: true,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    disabled: true,
                                    children: "Selecciona un estado"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "activo",
                                    children: "Activo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "inactivo",
                                    children: "Inactivo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "teacherid",
                            className: "mb-1 font-semibold",
                            children: "Maestro Principal*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "teacherid",
                            name: "teacherid",
                            value: formData.teacherid || 0,
                            disabled: type === "delete",
                            onChange: handleChange,
                            required: true,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    disabled: true,
                                    children: "Selecciona un maestro"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                teachersOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/src/app/components/FormGroup.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "kangaroo_teacherid",
                            className: "mb-1 font-semibold",
                            children: "Maestro Kanguro"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "kangaroo_teacherid",
                            name: "kangaroo_teacherid",
                            value: formData.kangaroo_teacherid || 0,
                            disabled: type === "delete",
                            onChange: handleChange,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    children: "Sin asignar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                teachersOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/src/app/components/FormGroup.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "observer_teacherid",
                            className: "mb-1 font-semibold",
                            children: "Maestro Observador"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "observer_teacherid",
                            name: "observer_teacherid",
                            value: formData.observer_teacherid || 0,
                            disabled: type === "delete",
                            onChange: handleChange,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    children: "Sin asignar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                teachersOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/src/app/components/FormGroup.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "start_deadline",
                            className: "mb-1 font-semibold",
                            children: "Fecha de inicio*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            id: "start_deadline",
                            name: "start_deadline",
                            value: formData.start_deadline || "",
                            disabled: type === "delete",
                            onChange: handleChange,
                            required: true,
                            className: "border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8] disabled:opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[350px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "numberofstudents",
                            className: "mb-1 font-semibold",
                            children: "Número de estudiantes*"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center border border-[#0C2340] rounded-md px-3 py-2 bg-[#F0F4F8]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: decrementStudents,
                                    className: "text-[#0C2340] font-bold text-xl px-2 ".concat(type === "delete" ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-[#B15B29]"),
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    id: "numberofstudents",
                                    name: "numberofstudents",
                                    value: formData.numberofstudents,
                                    disabled: type === "delete",
                                    onChange: handleChange,
                                    min: "0",
                                    required: true,
                                    className: "w-full text-center bg-transparent outline-none text-[#0C2340] placeholder:italic disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: incrementStudents,
                                    className: "text-[#0C2340] font-bold text-xl px-2 ".concat(type === "delete" ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-[#B15B29]"),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FormGroup.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FormGroup.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex col-span-2 justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: label,
                        onClick: ()=>{
                            // Validar que se hayan seleccionado días (solo para new y edit)
                            if (type !== "delete" && selectedDays.length === 0) {
                                alert("Por favor, selecciona al menos un día de clase");
                                return;
                            }
                            // Validar que classtime no esté vacío
                            if (type !== "delete" && !formData.classtime) {
                                alert("Por favor, ingresa la hora de clase");
                                return;
                            }
                            // Validar fecha de inicio
                            if (type !== "delete" && !formData.start_deadline) {
                                alert("Por favor, selecciona la fecha de inicio");
                                return;
                            }
                            functionToExecute === null || functionToExecute === void 0 ? void 0 : functionToExecute(formData);
                        },
                        className: "bg-[#B15B29] h-15 text-2xl text-white font-semibold hover:bg-[#944a20] transition-colors !mt-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FormGroup.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FormGroup.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/FormGroup.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/FormGroup.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(GroupFormEdit, "xUkgj4O3TUnvhKhs+i1YEPX26J0=");
_c = GroupFormEdit;
var _c;
__turbopack_context__.k.register(_c, "GroupFormEdit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ManageGroupStudentsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManageGroupStudentsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserMinus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-minus.js [app-client] (ecmascript) <export default as UserMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ManageGroupStudentsModal(param) {
    let { isOpen, onClose, groupId, groupName } = param;
    _s();
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [removing, setRemoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManageGroupStudentsModal.useEffect": ()=>{
            if (isOpen && groupId) {
                loadStudents();
            }
        }
    }["ManageGroupStudentsModal.useEffect"], [
        isOpen,
        groupId
    ]);
    const loadStudents = async ()=>{
        setLoading(true);
        try {
            const { fetchGroupDetails } = await (()=>{
                const e = new Error("Cannot find module '@/app/supabase/dashboardActions'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const groupDetails = await fetchGroupDetails(groupId);
            if (groupDetails && groupDetails.students) {
                setStudents(groupDetails.students);
            }
        } catch (error) {
            console.error('Error loading students:', error);
            alert('Error al cargar estudiantes del grupo');
        } finally{
            setLoading(false);
        }
    };
    const handleRemoveStudent = async (studentId)=>{
        if (!confirm('¿Estás seguro de desvincular este estudiante del grupo?')) {
            return;
        }
        setRemoving(studentId);
        try {
            const { supabaseAdmin } = await __turbopack_context__.A("[project]/lib/supabaseAdmin.ts [app-client] (ecmascript, async loader)");
            const { error } = await supabaseAdmin.from('studentgroup').delete().eq('groupid', groupId).eq('studentid', studentId);
            if (error) throw error;
            // Actualizar lista local
            setStudents((prev)=>prev.filter((s)=>s.studentid !== studentId));
            alert('✅ Estudiante desvinculado exitosamente');
        } catch (error) {
            console.error('Error removing student:', error);
            alert('❌ Error al desvincular estudiante');
        } finally{
            setRemoving(null);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0.9
                },
                className: "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#0C2340] text-white p-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold",
                                                children: "Estudiantes del Grupo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-90",
                                                children: groupName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "hover:bg-white/20 p-2 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#0C2340]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this) : students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 48,
                                    className: "mx-auto text-gray-300 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-lg",
                                    children: "No hay estudiantes inscritos en este grupo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 text-sm text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: students.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this),
                                        " estudiante",
                                        students.length !== 1 ? 's' : '',
                                        " inscrito",
                                        students.length !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: students.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-[#0C2340] text-lg",
                                                            children: [
                                                                student.firstname,
                                                                " ",
                                                                student.lastname
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600 mt-1 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "📧 ",
                                                                        student.email
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 27
                                                                }, this),
                                                                student.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "📱 ",
                                                                        student.phone
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block px-2 py-1 text-xs rounded-full ".concat(student.status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'),
                                                                children: student.status ? '✓ Activo' : 'Inactivo'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveStudent(student.studentid),
                                                    disabled: removing === student.studentid,
                                                    className: "\n                          ml-4 px-4 py-2 rounded-lg font-semibold\n                          flex items-center gap-2 transition-colors\n                          ".concat(removing === student.studentid ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600', "\n                        "),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserMinus$3e$__["UserMinus"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, this),
                                                        removing === student.studentid ? 'Desvinculando...' : 'Desvincular'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, student.studentid, true, {
                                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 p-4 flex justify-end border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2 bg-[#0C2340] text-white rounded-lg hover:bg-[#1a3a5f] transition-colors font-semibold",
                            children: "Cerrar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ManageGroupStudentsModal.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(ManageGroupStudentsModal, "m4tf/8jw9sqNgS2RUkaOaYQc2wk=");
_c = ManageGroupStudentsModal;
var _c;
__turbopack_context__.k.register(_c, "ManageGroupStudentsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/main/groups/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ReloadButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ReloadButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PlusButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PlusButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FormGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/FormGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ManageGroupStudentsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ManageGroupStudentsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/supabase/classGroupActions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app/supabase/courseActions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app/supabase/teacherActions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isModalOpenEdit, setIsModalOpenEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStudentsModalOpen, setIsStudentsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedGroupForStudents, setSelectedGroupForStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [typeOfModal, setTypeOfModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [functionToExecute, setFunctionToExecute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>({
                "Home.useState": ()=>{}
            })["Home.useState"]
    }["Home.useState"]);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRows, setFilteredRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teachers, setTeachers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [actualInfo, setActualInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        groupid: 0,
        courseid: 0,
        teacherid: 0,
        kangaroo_teacherid: null,
        observer_teacherid: null,
        numberofstudents: 0,
        classdays: "",
        classtime: "",
        start_deadline: null,
        status: ""
    });
    const handleInfoToModal = (info)=>{
        setActualInfo(info);
    };
    const handleOpenModal = (action, type)=>{
        setTypeOfModal(type);
        setIsModalOpenEdit(action);
        // Reset actualInfo when creating new
        if (type === "new") {
            setActualInfo({
                groupid: 0,
                courseid: 0,
                teacherid: 0,
                kangaroo_teacherid: null,
                observer_teacherid: null,
                numberofstudents: 0,
                classdays: "",
                classtime: "",
                start_deadline: null,
                status: ""
            });
        }
        switch(type){
            case "new":
                setFunctionToExecute(()=>async (info)=>{
                        try {
                            await addClassGroup(info);
                            const classGroups = await fetchClassGroups();
                            setRows(classGroups);
                            setFilteredRows(classGroups);
                            setIsModalOpenEdit(false);
                        } catch (error) {
                            console.error('Error al crear grupo:', error);
                            alert('Error al crear el grupo. Verifica los datos.');
                        }
                    });
                break;
            case "edit":
                setFunctionToExecute(()=>async (info)=>{
                        try {
                            await updateClassGroup(info);
                            const classGroups = await fetchClassGroups();
                            setRows(classGroups);
                            setFilteredRows(classGroups);
                            setIsModalOpenEdit(false);
                        } catch (error) {
                            console.error('Error al actualizar grupo:', error);
                            alert('Error al actualizar el grupo. Verifica los datos.');
                        }
                    });
                break;
            case "delete":
                setFunctionToExecute(()=>async (info)=>{
                        try {
                            await deleteClassGroup(info.groupid);
                            const classGroups = await fetchClassGroups();
                            setRows(classGroups);
                            setFilteredRows(classGroups);
                            setIsModalOpenEdit(false);
                        } catch (error) {
                            console.error('Error al eliminar grupo:', error);
                            let errorString = '';
                            if (error instanceof Error) {
                                errorString = error.message;
                            } else if (typeof error === 'string') {
                                errorString = error;
                            }
                            if (errorString.includes('23503') || errorString.includes('foreign key') || errorString.includes('violates')) {
                                alert('❌ No se puede eliminar este grupo\n\n' + '📋 Razón: El grupo tiene estudiantes inscritos\n\n' + '✅ Solución:\n' + '1. Usa el ícono 👥 para desvincular estudiantes del grupo\n' + '2. Una vez sin estudiantes, podrás eliminar el grupo\n\n' + '💡 Alternativa: Marca el grupo como "inactivo" en lugar de eliminarlo');
                            } else {
                                alert('Error al eliminar el grupo.');
                            }
                        }
                    });
                break;
            case "copy":
                setFunctionToExecute(()=>async (info)=>{
                        try {
                            // Note: Groups don't have a name field to modify with "(Copia)" suffix
                            // The new group will be distinguished by its auto-generated ID
                            const newGroup = {
                                ...info,
                                groupid: 0
                            };
                            await addClassGroup(newGroup);
                            const classGroups = await fetchClassGroups();
                            setRows(classGroups);
                            setFilteredRows(classGroups);
                            setIsModalOpenEdit(false);
                        } catch (error) {
                            console.error('Error al copiar grupo:', error);
                            alert('Error al copiar el grupo. Verifica los datos.');
                        }
                    });
                break;
        }
    };
    const headers = [
        "Id grupo",
        "Curso",
        "Maestro Principal",
        "Maestro Kanguro",
        "Observador",
        "Días",
        "Hora",
        "Fecha Inicio",
        "Estudiantes",
        "Estado",
        "Acciones"
    ];
    const loadClassGroups = async ()=>{
        setRows([]); // Clear previous rows
        const classGroups = await fetchClassGroups();
        setRows(classGroups);
        setFilteredRows(classGroups);
    };
    const loadCoursesAndTeachers = async ()=>{
        const [c, t] = await Promise.all([
            fetchCourses(),
            fetchTeachers()
        ]);
        setCourses(c);
        setTeachers(t);
    };
    // Función para obtener el nombre del curso por ID
    const getCourseName = (courseid)=>{
        const course = courses.find((c)=>c.courseid === courseid);
        return course ? course.coursename : "ID: ".concat(courseid);
    };
    // Función para obtener el nombre completo del maestro por ID
    const getTeacherName = (teacherid)=>{
        if (!teacherid) return '-';
        const teacher = teachers.find((t)=>t.teacherid === teacherid);
        return teacher ? "".concat(teacher.firstname, " ").concat(teacher.lastname) : "ID: ".concat(teacherid);
    };
    // Función para formatear la fecha
    const formatDate = (date)=>{
        if (!date) return '-';
        const d = new Date(date);
        return d.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };
    // Preparar los datos formateados para la tabla
    const formattedRows = filteredRows.map((group)=>({
            groupid: group.groupid,
            coursename: getCourseName(group.courseid),
            teachername: getTeacherName(group.teacherid),
            kangaroo: getTeacherName(group.kangaroo_teacherid),
            observer: getTeacherName(group.observer_teacherid),
            classdays: group.classdays || '-',
            classtime: group.classtime || '-',
            start_deadline: formatDate(group.start_deadline),
            numberofstudents: group.numberofstudents,
            status: group.status || '-'
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loadClassGroups();
            loadCoursesAndTeachers();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex h-fit justify-between ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "",
                        placeholder: "Buscar grupo",
                        data: rows,
                        onFilter: setFilteredRows
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 230,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-2 items-center ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " text-tangaroa-950 font-bold  ",
                                children: "Nuevo Grupo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/groups/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PlusButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                OpenOnPlusModal: ()=>handleOpenModal(true, "new"),
                                className: " "
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/groups/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ReloadButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>loadClassGroups()
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/groups/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/groups/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    filteredRows.length === 0 ? // Skeleton loader
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse bg-gray-200 rounded-lg space-y-4 mt-10 h-22 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        headers: headers,
                        rows: formattedRows,
                        OpenOnEditModal: ()=>{
                            handleOpenModal(true, "edit");
                        },
                        onEditButton: (formattedRow)=>{
                            // Encontrar el grupo original usando el groupid
                            const originalGroup = filteredRows.find((g)=>g.groupid === formattedRow.groupid);
                            if (originalGroup) {
                                handleInfoToModal(originalGroup);
                            }
                        },
                        OpenOnDeletetModal: ()=>{
                            handleOpenModal(true, "delete");
                        },
                        onCopyButton: (formattedRow)=>{
                            const originalGroup = filteredRows.find((g)=>g.groupid === formattedRow.groupid);
                            if (originalGroup) {
                                handleInfoToModal(originalGroup);
                                handleOpenModal(true, "copy");
                            }
                        },
                        onManageStudents: (formattedRow)=>{
                            setSelectedGroupForStudents({
                                id: formattedRow.groupid,
                                name: formattedRow.coursename
                            });
                            setIsStudentsModalOpen(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isModalOpenEdit,
                        onClose: ()=>handleOpenModal(false, "edit"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FormGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: actualInfo,
                            onChange: setActualInfo,
                            type: typeOfModal,
                            functionToExecute: functionToExecute,
                            coursesOptions: courses.map((c)=>{
                                var _c_courseid;
                                return {
                                    value: (_c_courseid = c.courseid) !== null && _c_courseid !== void 0 ? _c_courseid : 0,
                                    label: c.coursename
                                };
                            }),
                            teachersOptions: teachers.map((t)=>({
                                    value: t.teacherid,
                                    label: "".concat(t.firstname, " ").concat(t.lastname)
                                }))
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/groups/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    selectedGroupForStudents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ManageGroupStudentsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isStudentsModalOpen,
                        onClose: ()=>{
                            setIsStudentsModalOpen(false);
                            setSelectedGroupForStudents(null);
                            loadClassGroups(); // Recargar para actualizar conteos
                        },
                        groupId: selectedGroupForStudents.id,
                        groupName: selectedGroupForStudents.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/groups/page.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/groups/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "XCsCCwvSORz3KEsi33QBZ6teSzw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_36ffa159._.js.map