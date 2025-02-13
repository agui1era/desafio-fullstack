import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { User } from "../types";

interface Props {
  onEdit: (user: User) => void;
}

const UserList: React.FC<Props> = ({ onEdit }) => {
  const [users, setUsers] = useState<User[]>([]); // Asegurar que es un array

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(Array.isArray(data) ? data : []); // Asegurar que `data` es un array
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setUsers([]); // Si hay error, se asigna un array vacío
    }
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Usuarios</h2>
      <div className="list-group">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center shadow-sm">
              <span>
                <strong>{user.nombres} {user.apellidos}</strong> - RUT: {user.rut}-{user.dv} - {user.correoElectronico}
              </span>
              <div>
                <button onClick={() => onEdit(user)} className="btn btn-warning btn-sm me-2">Editar</button>
                <button onClick={() => handleDelete(user.id!)} className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No hay usuarios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
