import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGlobalUser } from "../../../context/use-global-user.context";
import { login } from "../../../api";
import { Button, Error, Input } from "../../components";
import { useForm, useValidateAuthentication } from "../../../hooks";
import logo from "../../../assets/images/PepeLogo.png"
export function LoginScreen() {
  const navigate = useNavigate();
  const { formData, handleChange, validateForm } = useForm({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      erro: "",
    },
  });
  const { requestError, validateRequestError } = useValidateAuthentication();
  const [user, setUser] = useGlobalUser();


  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function handleRegister() {
    navigate("/register");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    try {
       await login({
        username: formData.username.value,
        password: formData.password.value,
      });
      const globalUser = {...user,
        username: formData.username.value,
      }

      setUser(globalUser);
      navigate("/home")

    } catch (error) {
      validateRequestError(error);
    }
  }

  
 
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
      <img className="" src={logo} alt="Logo"></img>
      <div className="flex flex-col gap-5">
        
      <Error error={requestError} />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <Error error={formData.username.error} />
        <Input
          type={"text"}
          name={"username"}
          label={"Usuário"}
          value={formData.username.value}
          onChange={handleChange}
          onBlur={handleChange}
        />
        <Error error={formData.password.error} />
        <Input
          type={"password"}
          name={"password"}
          label={"Senha"}
          value={formData.password.value}
          onChange={handleChange}
          onBlur={handleChange}
        />
        <Button >Entrar</Button>
      </form>
      <Button onClick={handleRegister}>Criar conta</Button>
    </div>
    </div>
    </div>
  );
}
