(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/lib/supabaseAdmin.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockSupabase.ts [app-client] (ecmascript)");
;
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMockSupabaseClient"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
]);

//# sourceMappingURL=_fcbd5a69._.js.map