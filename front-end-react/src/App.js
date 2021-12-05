import React, { useEffect, useState } from "react";
import RoutesAll from "./routes";
import api from "./services/api";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";

function App() {
  const [authLogin, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if(!token) {
      return;
    }

    api.get(`verifyToken?token=${token}`)
      .then(response => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
      })
  }, []);

  if(setAuthLoading && getToken()){
    return <div className="content">Checando autenticação...</div>
  }

  return (
    <div className="App">      
      <RoutesAll/>
    </div>
  );
}

export default App;
