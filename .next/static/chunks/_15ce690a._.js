(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/TextBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TextBox(param) {
    let { label, value, type, className, onChange, onKeyDown, name, id, placeholder, iconUrl, helperText, large } = param;
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(label);
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFocus = ()=>{
        setFocus(true);
        if (label.includes("*")) {
            setText((prevText)=>prevText.slice(0, -1));
        }
    };
    const handleBlur = ()=>{
        setFocus(false);
        if (label.includes("*")) {
            setTimeout(()=>{
                setText(label);
            }, 100);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.3
        },
        className: "w-full flex flex-wrap justify-start content-start " + className,
        children: [
            large ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].textarea, {
                    whileFocus: {
                        scale: 1.01
                    },
                    transition: {
                        duration: 0.2
                    },
                    id: id,
                    name: name,
                    value: value,
                    onChange: onChange,
                    onKeyDown: onKeyDown,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    placeholder: placeholder,
                    className: " flex flex-1 border ".concat(large ? " h-full justify-start content-start items-start " : "", " flex-grow bg-tangaroa-50 placeholder:italic placeholder:text-tangaroa-600/60 border-tangaroa-950 peer  p-2 focus:outline-none text-tangaroa-950 focus:ring-1  focus:ring-tangaroa-600/60 order-34 rounded-sm transition-all ")
                }, void 0, false, {
                    fileName: "[project]/src/app/components/TextBox.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                        whileFocus: {
                            scale: 1.01
                        },
                        transition: {
                            duration: 0.2
                        },
                        id: id,
                        name: name,
                        type: type,
                        value: value,
                        onChange: onChange,
                        onKeyDown: onKeyDown,
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        placeholder: placeholder,
                        className: " flex flex-1 border ".concat(large ? " h-full justify-start content-start items-start " : "", " flex-grow bg-tangaroa-50 placeholder:italic placeholder:text-tangaroa-600/60 border-tangaroa-950 peer  p-2 focus:outline-none text-tangaroa-950 focus:ring-1  focus:ring-tangaroa-600/60 order-34 ").concat(iconUrl || helperText ? " rounded-r-sm " : "rounded-sm", " transition-all ")
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TextBox.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    (iconUrl || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex  justify-center content-center bg-tangaroa-800  order-2 rounded-l-sm  ",
                        children: [
                            helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " flex justify-center items-center px-3 ",
                                children: helperText
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TextBox.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this),
                            iconUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " flex justify-center items-center p-2 ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: iconUrl,
                                    alt: " ",
                                    width: 100,
                                    height: 100,
                                    className: " w-6 h-auto  aspect-square"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/TextBox.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TextBox.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/TextBox.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: " w-full  h-fit m-0  text-left text-sm text-tangaroa-950 top-0 peer-focus:top-1 relative order-1 transition-all peer-focus:ml-1 peer-focus:text-tangaroa-950 peer-focus:font-medium   ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: " bg-putty-100 transition-all  ".concat(focus ? "shadow-sm px-1 rounded-sm" : ""),
                    children: [
                        " ",
                        text
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/TextBox.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TextBox.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TextBox.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(TextBox, "fA5jnJXwPLnfZ+o5XxyHTj4VIXs=");
_c = TextBox;
var _c;
__turbopack_context__.k.register(_c, "TextBox");
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
"[project]/lib/mockSupabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This module provides a lightweight in-memory "mock" replacement for Supabase
// that can be enabled via environment variables (e.g. USE_MOCK_DB=true).
//
// It is intentionally simple: it supports the subset of Supabase client methods
// used by this project (from().select/insert/update/delete, auth.getUser, auth.signInWithPassword).
//
// The goal is to allow the app to run without a real Supabase database.
__turbopack_context__.s([
    "createMockSupabaseClient",
    ()=>createMockSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
const mockData = {
    admin_users: [
        {
            user_id: 'mock-admin'
        }
    ],
    adminuser: [
        {
            userid: 1,
            username: 'admin',
            fullname: 'Admin Mock'
        }
    ],
    course: [
        {
            courseid: 1,
            coursename: 'Matemáticas'
        },
        {
            courseid: 2,
            coursename: 'Lenguaje'
        },
        {
            courseid: 3,
            coursename: 'Ciencias'
        }
    ],
    teacher: [
        {
            teacherid: 1,
            firstname: 'Juan',
            lastname: 'Pérez',
            email: 'juan.perez@example.com'
        },
        {
            teacherid: 2,
            firstname: 'María',
            lastname: 'Gómez',
            email: 'maria.gomez@example.com'
        }
    ],
    classgroup: [
        {
            groupid: 1,
            courseid: 1,
            teacherid: 1,
            numberofstudents: 20,
            classdays: 'Lunes y Miércoles',
            classtime: '18:00 - 19:30',
            status: 'activo',
            start_deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
            // Preload joined data so that the existing `.select(...)` calls return something useful
            course: [
                {
                    coursename: 'Matemáticas'
                }
            ],
            teacher: [
                {
                    firstname: 'Juan',
                    lastname: 'Pérez'
                }
            ]
        },
        {
            groupid: 2,
            courseid: 2,
            teacherid: 2,
            numberofstudents: 15,
            classdays: 'Martes y Jueves',
            classtime: '17:00 - 18:30',
            status: 'inactivo',
            start_deadline: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
            course: [
                {
                    coursename: 'Lenguaje'
                }
            ],
            teacher: [
                {
                    firstname: 'María',
                    lastname: 'Gómez'
                }
            ]
        }
    ],
    student: [
        {
            studentid: 1,
            firstname: 'Carlos',
            lastname: 'Sánchez',
            email: 'carlos@example.com',
            phone: null,
            academicrating: 8,
            biblicalrating: 7,
            status: true
        },
        {
            studentid: 2,
            firstname: 'Ana',
            lastname: 'Rodríguez',
            email: 'ana@example.com',
            phone: '555-1234',
            academicrating: 9,
            biblicalrating: 8,
            status: true
        },
        {
            studentid: 3,
            firstname: 'Pedro',
            lastname: 'Molina',
            email: 'pedro@example.com',
            phone: null,
            academicrating: 6,
            biblicalrating: 5,
            status: false
        }
    ],
    studentgroup: [
        {
            studentgroupid: 1,
            studentid: 1,
            groupid: 1
        },
        {
            studentgroupid: 2,
            studentid: 2,
            groupid: 1
        }
    ],
    teachercourse: [
        {
            teachercourseid: 1,
            teacherid: 1,
            courseid: 1
        },
        {
            teachercourseid: 2,
            teacherid: 2,
            courseid: 2
        }
    ]
};
const autoIncrementColumn = {
    admin_users: null,
    adminuser: 'userid',
    course: 'courseid',
    teacher: 'teacherid',
    classgroup: 'groupid',
    student: 'studentid',
    studentgroup: 'studentgroupid',
    teachercourse: 'teachercourseid'
};
function cloneDeep(value) {
    return JSON.parse(JSON.stringify(value));
}
function applyFilters(rows, filters) {
    if (!filters || Object.keys(filters).length === 0) return rows;
    return rows.filter((row)=>{
        return Object.entries(filters).every((param)=>{
            let [key, value] = param;
            // Support deep match for cases like row[key] being number/string
            return row[key] === value;
        });
    });
}
class MockQuery {
    execute() {
        const table = mockData[this.table];
        if (!table) {
            return {
                data: null,
                error: new Error("Table not found: ".concat(this.table))
            };
        }
        const apply = ()=>applyFilters(table, this.filters);
        switch(this.operation){
            case 'insert':
                {
                    const nextIdField = autoIncrementColumn[this.table];
                    const insertedRows = (this.insertRows || []).map((row)=>{
                        const clone = cloneDeep(row);
                        if (nextIdField && clone[nextIdField] == null) {
                            const existingIds = table.map((r)=>{
                                var _r_nextIdField;
                                return Number((_r_nextIdField = r[nextIdField]) !== null && _r_nextIdField !== void 0 ? _r_nextIdField : 0);
                            });
                            const maxId = existingIds.length ? Math.max(...existingIds) : 0;
                            clone[nextIdField] = maxId + 1;
                        }
                        table.push(clone);
                        return clone;
                    });
                    return {
                        data: cloneDeep(insertedRows),
                        error: null
                    };
                }
            case 'update':
                {
                    const matches = apply();
                    matches.forEach((row)=>{
                        if (this.updatePayload) {
                            Object.assign(row, this.updatePayload);
                        }
                    });
                    return {
                        data: cloneDeep(matches),
                        error: null
                    };
                }
            case 'delete':
                {
                    const deleted = apply();
                    mockData[this.table] = table.filter((row)=>!deleted.includes(row));
                    return {
                        data: cloneDeep(deleted),
                        error: null
                    };
                }
            case 'select':
            default:
                {
                    const selected = apply();
                    return {
                        data: cloneDeep(selected),
                        error: null
                    };
                }
        }
    }
    select() {
        let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '*';
        this.operation = 'select';
        this.selector = selector !== null && selector !== void 0 ? selector : '*';
        return this;
    }
    insert(rows) {
        this.operation = 'insert';
        this.insertRows = rows;
        return this;
    }
    update(payload) {
        this.operation = 'update';
        this.updatePayload = payload;
        return this;
    }
    delete() {
        this.operation = 'delete';
        return this;
    }
    eq(field, value) {
        this.filters[field] = value;
        return this;
    }
    maybeSingle() {
        var _result_data;
        const result = this.execute();
        if (result.error) return {
            data: null,
            error: result.error
        };
        return {
            data: ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.length) ? result.data[0] : null,
            error: null
        };
    }
    single() {
        const result = this.execute();
        if (result.error) return {
            data: null,
            error: result.error
        };
        if (!result.data || result.data.length !== 1) {
            return {
                data: null,
                error: new Error('Expected exactly one row')
            };
        }
        return {
            data: result.data[0],
            error: null
        };
    }
    then(onFulfilled, onRejected) {
        const result = this.execute();
        return Promise.resolve(result).then(onFulfilled, onRejected);
    }
    constructor(table){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "table", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "filters", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "selector", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "operation", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "insertRows", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "updatePayload", null);
        this.table = table;
    }
}
var _process_env_MOCK_USER_EMAIL;
const MOCK_USER_EMAIL = (_process_env_MOCK_USER_EMAIL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MOCK_USER_EMAIL) !== null && _process_env_MOCK_USER_EMAIL !== void 0 ? _process_env_MOCK_USER_EMAIL : 'admin@mock.local';
var _process_env_MOCK_USER_PASSWORD;
const MOCK_USER_PASSWORD = (_process_env_MOCK_USER_PASSWORD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MOCK_USER_PASSWORD) !== null && _process_env_MOCK_USER_PASSWORD !== void 0 ? _process_env_MOCK_USER_PASSWORD : 'mockpass123';
const mockUser = {
    id: 'mock-admin',
    email: MOCK_USER_EMAIL,
    user_metadata: {}
};
function createAuthError(message) {
    return {
        data: null,
        error: {
            message
        }
    };
}
function createMockSupabaseClient() {
    return {
        from: (table)=>{
            return new MockQuery(table);
        },
        auth: {
            getUser: async ()=>{
                return {
                    data: {
                        user: mockUser
                    },
                    error: null
                };
            },
            signInWithPassword: async (opts)=>{
                if (opts.email !== MOCK_USER_EMAIL || opts.password !== MOCK_USER_PASSWORD) {
                    return createAuthError('Invalid email or password');
                }
                return {
                    data: {
                        user: mockUser
                    },
                    error: null
                };
            },
            signOut: async ()=>{
                return {
                    data: null,
                    error: null
                };
            }
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabaseBrowser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseBrowser",
    ()=>supabaseBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockSupabase.ts [app-client] (ecmascript)");
;
const supabaseBrowser = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMockSupabaseClient"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TextBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseBrowser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseBrowser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
function Home() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async ()=>{
        if (!email || !password) {
            setError("Por favor ingresa email y contraseña");
            return;
        }
        setLoading(true);
        setError(null);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseBrowser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseBrowser"])();
        const { error: authError } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        setLoading(false);
        if (authError) {
            setError("Email o contraseña incorrectos");
            return;
        }
        router.push("/main/dashboard");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex justify-center content-center items-center w-full h-screen bg-putty-50 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5
            },
            className: "w-120 p-10 bg-putty-100 shadow-lg rounded-xl flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2,
                        duration: 0.4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/login/logo.png",
                        alt: "Logo",
                        width: 1000,
                        height: 1000,
                        className: "w-34 mx-auto "
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.4,
                        duration: 0.4
                    },
                    className: "flex flex-col mt-6  w-70   items-center ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-26 border-l-tangaroa-950 ",
                            label: "Email*",
                            type: "email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-26 mt-5 ",
                            label: "Contraseña*",
                            type: "password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') handleLogin();
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "text-red-600 text-sm mt-2 text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "!mt-9 mb-1",
                            label: loading ? "Ingresando..." : "Iniciar sesión",
                            onClick: handleLogin
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Home, "+f/D1AVPDDlDWR0xbXZPGIOw1iA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_15ce690a._.js.map