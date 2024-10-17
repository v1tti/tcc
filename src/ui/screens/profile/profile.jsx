import { useNavigate } from "react-router-dom";
import { logout } from "../../../api";
import { useGlobalUser } from "../../../context/use-global-user.context";
import { Button } from "../../components";
import { getMe } from "../../../api/user/me.api";
import { useEffect, useState } from "react";

export function ProfileScreen() {
  const [user, setUser] = useGlobalUser();
  const [me, setMe] = useState();
  const navigate = useNavigate();

  async function handleClickLogout() {
    await logout();
    setUser(null);
    navigate("/");
  }

  async function getMeInfo() {
    const foundMe = await getMe();

    setMe(foundMe);
  }

  function handleClickEditarUser() {
    navigate("/edit");
  }

  useEffect(() => {
    getMeInfo();
  }, []);

  return me ? (
    <div className="generic-container">
      <div className="others-profile-detail">
        <div className="flex flex-col">
          <div>{me.nome}</div>
          <div>Email: {me.email}</div>
          <div>Peso (kg) {me.peso}</div>
          <div>Altura (cm) {me.altura}</div>
          <div>Meta de calorias: 2968.4</div>
          <div>Meta de proteinas: 140</div>
          <div>Meta de carboidratos: 446.6</div>
          <div>Meta de gorduras: 70</div>
        </div>
        <Button
          children={"EDITAR PERFIL"}
          onClick={handleClickEditarUser}
        ></Button>
        <Button children={"LOGOUT"} onClick={handleClickLogout}></Button>
      </div>

      <div></div>
    </div>
  ) : null;
}
