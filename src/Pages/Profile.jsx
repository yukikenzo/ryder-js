import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Login() {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    isAuthenticated && (
      <article className="profile-container">
        {user?.picture && (
          <img className="profile-image" src={user.picture} alt={user?.name} />
        )}
        <h2>{user?.name}</h2>
        <ul>
          <li className="profile-listitem">Name: {user.name}</li>
          <li className="profile-listitem">Nickname: {user.nickname}</li>
          <li className="profile-listitem">Email: {user.email}</li>
        </ul>
        <button onClick={logout} className="sub-button">
          Sign Out
        </button>
      </article>
    )
  );
}
