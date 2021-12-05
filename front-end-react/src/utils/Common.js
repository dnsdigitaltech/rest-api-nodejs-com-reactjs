//Pega usuário logado
export const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
}
//pegar o token e coloca em sessão
export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}
//pega o token da sessão
export const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}
//quando faz logoff remove o token da sessão
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}