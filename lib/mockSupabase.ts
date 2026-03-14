// This module provides a lightweight in-memory "mock" replacement for Supabase
// that can be enabled via environment variables (e.g. USE_MOCK_DB=true).
//
// It is intentionally simple: it supports the subset of Supabase client methods
// used by this project (from().select/insert/update/delete, auth.getUser, auth.signInWithPassword).
//
// The goal is to allow the app to run without a real Supabase database.

type MockRow = Record<string, any>;

type TableName =
  | 'admin_users'
  | 'adminuser'
  | 'course'
  | 'classgroup'
  | 'student'
  | 'teacher'
  | 'studentgroup'
  | 'teachercourse';

const mockData: Record<TableName, MockRow[]> = {
  admin_users: [{ user_id: 'mock-admin' }],
  adminuser: [{ userid: 1, username: 'admin', fullname: 'Admin Mock' }],
  course: [
    { courseid: 1, coursename: 'Matemáticas' },
    { courseid: 2, coursename: 'Lenguaje' },
    { courseid: 3, coursename: 'Ciencias' },
  ],
  teacher: [
    { teacherid: 1, firstname: 'Juan', lastname: 'Pérez', email: 'juan.perez@example.com' },
    { teacherid: 2, firstname: 'María', lastname: 'Gómez', email: 'maria.gomez@example.com' },
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
      course: [{ coursename: 'Matemáticas' }],
      teacher: [{ firstname: 'Juan', lastname: 'Pérez' }],
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
      course: [{ coursename: 'Lenguaje' }],
      teacher: [{ firstname: 'María', lastname: 'Gómez' }],
    },
  ],
  student: [
    { studentid: 1, firstname: 'Carlos', lastname: 'Sánchez', email: 'carlos@example.com', phone: null, academicrating: 8, biblicalrating: 7, status: true },
    { studentid: 2, firstname: 'Ana', lastname: 'Rodríguez', email: 'ana@example.com', phone: '555-1234', academicrating: 9, biblicalrating: 8, status: true },
    { studentid: 3, firstname: 'Pedro', lastname: 'Molina', email: 'pedro@example.com', phone: null, academicrating: 6, biblicalrating: 5, status: false },
  ],
  studentgroup: [
    { studentgroupid: 1, studentid: 1, groupid: 1 },
    { studentgroupid: 2, studentid: 2, groupid: 1 },
  ],
  teachercourse: [
    { teachercourseid: 1, teacherid: 1, courseid: 1 },
    { teachercourseid: 2, teacherid: 2, courseid: 2 },
  ],
};

const autoIncrementColumn: Record<TableName, string | null> = {
  admin_users: null,
  adminuser: 'userid',
  course: 'courseid',
  teacher: 'teacherid',
  classgroup: 'groupid',
  student: 'studentid',
  studentgroup: 'studentgroupid',
  teachercourse: 'teachercourseid',
};

function cloneDeep<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function applyFilters(rows: MockRow[], filters: Record<string, any>): MockRow[] {
  if (!filters || Object.keys(filters).length === 0) return rows;
  return rows.filter((row) => {
    return Object.entries(filters).every(([key, value]) => {
      // Support deep match for cases like row[key] being number/string
      return row[key] === value;
    });
  });
}

class MockQuery {
  private table: TableName;
  private filters: Record<string, any> = {};
  private selector?: string;
  private operation: 'select' | 'insert' | 'update' | 'delete' | null = null;
  private insertRows: MockRow[] = [];
  private updatePayload: MockRow | null = null;

  constructor(table: TableName) {
    this.table = table;
  }

  private execute() {
    const table = mockData[this.table];
    if (!table) {
      return { data: null, error: new Error(`Table not found: ${this.table}`) };
    }

    const apply = () => applyFilters(table, this.filters);

    switch (this.operation) {
      case 'insert': {
        const nextIdField = autoIncrementColumn[this.table];
        const insertedRows = (this.insertRows || []).map((row) => {
          const clone = cloneDeep(row);
          if (nextIdField && clone[nextIdField] == null) {
            const existingIds = table.map((r) => Number(r[nextIdField] ?? 0));
            const maxId = existingIds.length ? Math.max(...existingIds) : 0;
            clone[nextIdField] = maxId + 1;
          }
          table.push(clone);
          return clone;
        });
        return { data: cloneDeep(insertedRows), error: null };
      }
      case 'update': {
        const matches = apply();
        matches.forEach((row) => {
          if (this.updatePayload) {
            Object.assign(row, this.updatePayload);
          }
        });
        return { data: cloneDeep(matches), error: null };
      }
      case 'delete': {
        const deleted = apply();
        mockData[this.table] = table.filter((row) => !deleted.includes(row));
        return { data: cloneDeep(deleted), error: null };
      }
      case 'select':
      default: {
        const selected = apply();
        return { data: cloneDeep(selected), error: null };
      }
    }
  }

  public select(selector: string | null = '*') {
    this.operation = 'select';
    this.selector = selector ?? '*';
    return this;
  }

  public insert(rows: MockRow[]) {
    this.operation = 'insert';
    this.insertRows = rows;
    return this;
  }

  public update(payload: MockRow) {
    this.operation = 'update';
    this.updatePayload = payload;
    return this;
  }

  public delete() {
    this.operation = 'delete';
    return this;
  }

  public eq(field: string, value: any) {
    this.filters[field] = value;
    return this;
  }

  public maybeSingle() {
    const result = this.execute();
    if (result.error) return { data: null, error: result.error };
    return { data: (result.data?.length ? result.data[0] : null), error: null };
  }

  public single() {
    const result = this.execute();
    if (result.error) return { data: null, error: result.error };
    if (!result.data || result.data.length !== 1) {
      return { data: null, error: new Error('Expected exactly one row') };
    }
    return { data: result.data[0], error: null };
  }

  public then(onFulfilled: any, onRejected: any) {
    const result = this.execute();
    return Promise.resolve(result).then(onFulfilled, onRejected);
  }
}

const MOCK_USER_EMAIL = process.env.MOCK_USER_EMAIL ?? 'admin@mock.local';
const MOCK_USER_PASSWORD = process.env.MOCK_USER_PASSWORD ?? 'mockpass123';

const mockUser = {
  id: 'mock-admin',
  email: MOCK_USER_EMAIL,
  user_metadata: {} as Record<string, any>,
};

function createAuthError(message: string) {
  return { data: null, error: { message } };
}

export function createMockSupabaseClient() {
  return {
    from: (table: string) => {
      return new MockQuery(table as TableName);
    },
    auth: {
      getUser: async () => {
        return { data: { user: mockUser }, error: null };
      },
      signInWithPassword: async (opts: { email: string; password: string }) => {
        if (opts.email !== MOCK_USER_EMAIL || opts.password !== MOCK_USER_PASSWORD) {
          return createAuthError('Invalid email or password');
        }
        return { data: { user: mockUser }, error: null };
      },
      signOut: async () => {
        return { data: null, error: null };
      },
    },
  };
}
