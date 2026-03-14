"use client";

import { useState, useEffect } from 'react';
import { Users, X, UserMinus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Student {
  studentid: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string | null;
  status: boolean;
}

interface ManageGroupStudentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
  groupName: string;
}

export default function ManageGroupStudentsModal({
  isOpen,
  onClose,
  groupId,
  groupName,
}: ManageGroupStudentsModalProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [removing, setRemoving] = useState<number | null>(null);


    
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#0C2340] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users size={28} />
              <div>
                <h2 className="text-2xl font-bold">Estudiantes del Grupo</h2>
                <p className="text-sm opacity-90">{groupName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0C2340]"></div>
              </div>
            ) : students.length === 0 ? (
              <div className="text-center py-12">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No hay estudiantes inscritos en este grupo</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  <span className="font-semibold">{students.length}</span> estudiante{students.length !== 1 ? 's' : ''} inscrito{students.length !== 1 ? 's' : ''}
                </div>

                <div className="space-y-3">
                  {students.map((student) => (
                    <motion.div
                      key={student.studentid}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#0C2340] text-lg">
                          {student.firstname} {student.lastname}
                        </h3>
                        <div className="text-sm text-gray-600 mt-1 space-y-1">
                          <p>📧 {student.email}</p>
                          {student.phone && <p>📱 {student.phone}</p>}
                        </div>
                        <div className="mt-2">
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              student.status
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {student.status ? '✓ Activo' : 'Inactivo'}
                          </span>
                        </div>
                      </div>

                      <button
                      
                        disabled={removing === student.studentid}
                        className={`
                          ml-4 px-4 py-2 rounded-lg font-semibold
                          flex items-center gap-2 transition-colors
                          ${
                            removing === student.studentid
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-red-500 text-white hover:bg-red-600'
                          }
                        `}
                      >
                        <UserMinus size={18} />
                        {removing === student.studentid ? 'Desvinculando...' : 'Desvincular'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 flex justify-end border-t">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#0C2340] text-white rounded-lg hover:bg-[#1a3a5f] transition-colors font-semibold"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
