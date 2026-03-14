'use client';

import Cards from "@/app/components/Cards";
import CardPlusButton from "@/app/components/CardPlusButton";
import React, { useEffect, useState } from 'react';
import FormAuthUsers, { AuthUserData } from "@/app/components/FormAuthUsers";
import Modal from "@/app/components/Modal";
import SearchBar from "@/app/components/SearchBar";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";


export default function Home() {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");
  const [functionToExecute, setFunctionToExecute] = useState<(info: AuthUserData) => void>(() => () => {});
  
  const [actualInfo, setActualInfo] = useState<AuthUserData>({ 
    id: "", 
    email: "", 
    password: "" 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
     
    } catch (err) {
      setError('Error al cargar usuarios');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

 

  const handleOpenModal = (action: boolean, type: string) => {
    setTypeOfModal(type);
    setIsModalOpenEdit(action);
    setError(null);
    
    switch (type) {
      case 'new':
        setActualInfo({ id: "", email: "", password: "" });
        setFunctionToExecute(() => async (info: AuthUserData) => {
          if (!info.email || !info.password) {
            setError('Email y contraseña son requeridos');
            return;
          }
          
          setLoading(true);
        
          setLoading(false);
          
        
        
          }
        );
        break;
        
      case 'edit':
        setFunctionToExecute(() => async (info: AuthUserData) => {
          if (!info.password) {
            setError('La nueva contraseña es requerida');
            return;
          }
          
          setLoading(true);
        
          setLoading(false);
          
        
        });
        break;
        
      case 'delete':
        setFunctionToExecute(() => async (info: AuthUserData) => {
          
        });
        break;
    }
  };

  const handleNew = () => handleOpenModal(true, 'new');

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Nunca";
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusText = () => {
   
  };

  return (
    <div className="p-10 flex flex-col gap-6">
      <div className="w-full flex h-fit justify-between ">
        <SearchBar
          className=""
          placeholder="Buscar usuario por email"
          
        />

         <div className=" flex gap-x-2 items-center ">
        <p className="text-tangaroa-950 font-bold">Nuevo Usuario</p>

        <PlusButton
          OpenOnPlusModal={() => handleOpenModal(true, "new")}
          className=" "
        ></PlusButton>

        <ReloadButton onClick={loadUsers} />
        </div>
       
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-tangaroa-950"></div>
          <p className="mt-2 text-gray-600">Cargando usuarios...</p>
        </div>
      )}

      <div className="flex flex-wrap gap-6">
       
           
       
      </div>

     

      <Modal isOpen={isModalOpenEdit} onClose={() => setIsModalOpenEdit(false)}>
        <FormAuthUsers 
          data={actualInfo} 
          onChange={setActualInfo} 
          type={typeOfModal} 
          functionToExecute={functionToExecute} 
        />
      </Modal>
    </div>
  );
}
