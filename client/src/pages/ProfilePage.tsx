import React from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div>
      ProfilePage

      <div>
        {JSON.stringify(profile)}
      </div>
      <button
        onClick={() => {
          logout();
          navigate("/login")
        }}>
        Log out
      </button>
    </div>
  );
}

export default ProfilePage;
