import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { useState } from "react";
import { User } from "./types";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mantenedor de Usuarios</h1>

      <UserForm
        userToEdit={userToEdit}
        onSuccess={() => {
          setRefresh(!refresh);
          setUserToEdit(null);
        }}
        onCancel={() => setUserToEdit(null)}
      />

      <UserList key={refresh.toString()} onEdit={setUserToEdit} />
    </div>
  );
}

export default App;
