import { useState, useEffect } from "react";
import { createUser, updateUser } from "../services/userService";
import { User } from "../types";

interface Props {
  userToEdit?: User | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const UserForm: React.FC<Props> = ({ userToEdit, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<User>({
    nombres: "",
    apellidos: "",
    rut: 0,
    dv: "",
    fechaNacimiento: "",
    correoElectronico: "",
    contrasena: "",
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userToEdit) {
      await updateUser(userToEdit.id!, formData);
    } else {
      const newUser = { ...formData };
      delete newUser.id;
      await createUser(newUser);
    }
    onSuccess();
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <h2 className="mb-3">{userToEdit ? "Editar Usuario" : "Crear Usuario"}</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} placeholder="Nombres" className="form-control"/>
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Apellidos" className="form-control"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="number" name="rut" value={formData.rut} onChange={handleChange} placeholder="RUT" className="form-control"/>
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="dv" value={formData.dv} onChange={handleChange} placeholder="DV" className="form-control"/>
          </div>
        </div>

        <div className="mb-3">
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="form-control"/>
        </div>
        <div className="mb-3">
          <input type="email" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} placeholder="Correo Electrónico" className="form-control"/>
        </div>
        <div className="mb-3">
          <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} placeholder="Contraseña" className="form-control"/>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            {userToEdit ? "Actualizar" : "Crear"}
          </button>
          {userToEdit && (
            <button onClick={onCancel} className="btn btn-secondary ms-2">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
