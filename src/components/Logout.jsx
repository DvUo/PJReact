
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useUser();

  const handleLogout = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const token = localStorage.getItem('token');

      if (token) {
        await axios.post(`${BASE_URL}/api/logout`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
      }

      
      logout();
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      
      
      logout();
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default Logout;