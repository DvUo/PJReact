import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');

      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
      });

      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('roles');
      localStorage.removeItem('permissions');

      navigate('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
    useEffect(() => {
    handleLogout();
  }, []);
  return null; 
};

export default Logout;