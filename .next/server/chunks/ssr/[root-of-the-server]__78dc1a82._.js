module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mockSupabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        return Object.entries(filters).every(([key, value])=>{
            // Support deep match for cases like row[key] being number/string
            return row[key] === value;
        });
    });
}
class MockQuery {
    table;
    filters = {};
    selector;
    operation = null;
    insertRows = [];
    updatePayload = null;
    constructor(table){
        this.table = table;
    }
    execute() {
        const table = mockData[this.table];
        if (!table) {
            return {
                data: null,
                error: new Error(`Table not found: ${this.table}`)
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
                            const existingIds = table.map((r)=>Number(r[nextIdField] ?? 0));
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
    select(selector = '*') {
        this.operation = 'select';
        this.selector = selector ?? '*';
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
        const result = this.execute();
        if (result.error) return {
            data: null,
            error: result.error
        };
        return {
            data: result.data?.length ? result.data[0] : null,
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
}
const MOCK_USER_EMAIL = process.env.MOCK_USER_EMAIL ?? 'admin@mock.local';
const MOCK_USER_PASSWORD = process.env.MOCK_USER_PASSWORD ?? 'mockpass123';
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
}),
"[project]/lib/supabaseBrowser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseBrowser",
    ()=>supabaseBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockSupabase.ts [app-ssr] (ecmascript)");
;
const supabaseBrowser = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMockSupabaseClient"])();
}),
"[project]/src/app/components/Menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu,
    "navItems",
    ()=>navItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderDot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-dot.js [app-ssr] (ecmascript) <export default as FolderDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseBrowser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseBrowser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
;
;
const navItems = [
    {
        name: "Dashboard",
        href: "dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Grupos",
        href: "groups",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsersRound"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 37,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Gestion de cursos",
        href: "curseManagement",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderDot$3e$__["FolderDot"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Alumnos",
        href: "Students",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 47,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Maestros",
        href: "Teacher",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["School"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 53,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Usuario Admin",
        href: "ManagerUsers",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserCog"], {}, void 0, false, {
            fileName: "[project]/src/app/components/Menu.tsx",
            lineNumber: 59,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Menu({ className, navItems }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleLogout = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseBrowser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabaseBrowser"])();
        await supabase.auth.signOut();
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        className: "w-90 h-screen bg-tangaroa-950 flex flex-col flex-shrink-0  overflow-hidden " + className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b-1 mb-3 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Menu/LogoMenu.png",
                        alt: "Logo",
                        width: 1000,
                        height: 1000,
                        className: "w-50 mx-auto pt-5 pb-5 "
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Menu.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Menu.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Menu.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "w-full flex-col flex justify-start items-start gap-y-1 flex-1 overflow-y-auto",
                children: navItems.map((item, index)=>{
                    const isActive = pathname.includes(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `flex hover:text-putty-300 w-full gap-5 items-center hover:bg-tangaroa-900 hover:font-bold pt-2 pb-2 pl-5 transition-all duration-300 ${isActive ? 'bg-tangaroa-900 text-putty-300 font-bold border-l-4 border-putty-400' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 5
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Menu.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[20px]  ",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Menu.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Menu.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, item.name, false, {
                        fileName: "[project]/src/app/components/Menu.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/Menu.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t-1 border-gray-600 mt-auto ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.02,
                        backgroundColor: "rgba(15, 23, 42, 0.8)"
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    onClick: handleLogout,
                    className: "flex hover:text-putty-300 cursor-pointer w-full gap-5 items-center hover:bg-tangaroa-900 hover:font-bold pt-3 pb-3 pl-5 transition-all duration-300 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogOut"], {}, void 0, false, {
                            fileName: "[project]/src/app/components/Menu.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[20px]",
                            children: "Cerrar Sesión"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Menu.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Menu.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Menu.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Menu.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__78dc1a82._.js.map