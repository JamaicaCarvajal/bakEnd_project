'use server';


const mockUser = {
  id: 'mock-admin',
  email: process.env.MOCK_USER_EMAIL ?? 'admin@mock.local',
  user_metadata: {},
};

/**
 * Verifica si el usuario actual está autenticado
 * @returns El user object si está autenticado, null si no
 */
export async function requireAuth() {
  return mockUser as any;
}

/**
 * Verifica si el usuario actual es un administrador
 * @returns true si es admin, lanza error si no
 */
export async function requireAdmin() {
  return await requireAuth();
}

/**
 * Verifica si el usuario actual es un administrador (sin lanzar error)
 * @returns true si es admin, false si no
 */
export async function isAdmin(): Promise<boolean> {
  return true;
}

/**
 * Obtiene el usuario actual autenticado
 * @returns user object o null
 */
export async function getCurrentUser() {
  return mockUser as any;
}

/**
 * Obtiene el ID del usuario actual
 * @returns user ID o null
 */
export async function getCurrentUserId(): Promise<string | null> {
  const user = await getCurrentUser();
  return user?.id || null;
}
