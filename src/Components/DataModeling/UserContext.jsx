// UserContext.jsx
import { createContext, useContext, useState } from 'react';
import { initialUsers } from './ContextApiModel/constants'; // Ensure this path is correct

// Create a context for users
const UserContext = createContext();

// User provider component
export function UserProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the UserContext
export const useUsers = () => useContext(UserContext);
