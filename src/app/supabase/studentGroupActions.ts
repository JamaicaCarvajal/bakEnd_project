'use server';

import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { requireAdmin } from '../../../lib/authorization';

export interface StudentGroup {
  studentid: number;
  groupid: number;
}

export const fetchStudentGroups = async (): Promise<StudentGroup[]> => {
  // Verificar que el usuario sea administrador
  await requireAdmin();
  
  const { data, error } = await supabaseAdmin.from('studentgroup').select('*');
  if (error) { console.error('Error fetching student groups:', error); return []; }
  return data;
};

export const addStudentGroup = async (sg: StudentGroup): Promise<void> => {
  // Verificar que el usuario sea administrador
  await requireAdmin();
  
  const { error } = await supabaseAdmin.from('studentgroup').insert([sg]);
  if (error) { console.error('Error adding student group:', error); }
};

export const deleteStudentGroup = async (studentid: number, groupid: number): Promise<void> => {
  // Verificar que el usuario sea administrador
  await requireAdmin();
  
  const { error } = await supabaseAdmin.from('studentgroup').delete().eq('studentid', studentid).eq('groupid', groupid);
  if (error) { console.error('Error deleting student group:', error); }
};
