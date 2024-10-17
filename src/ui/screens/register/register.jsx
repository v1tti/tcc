import { useNavigate } from "react-router";
import { register } from "../../../api";
import { Button, Error, Input } from "../../components";
import { useForm, useValidateAuthentication } from "../../../hooks";
import logo from "../../../assets/images/PepeLogo.png";

export function RegisterScreen() {
  const navigate = useNavigate();
  const { requestError, validateRequestError } = useValidateAuthentication();
  const { formData, handleChange, validateForm } = useForm({
    nome: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    dataNascimento: {
      value: "",
      error: "",
    },
    atividadeFisica: {
      value: "",
      error: "",
    },
    altura: {
      value: "",
      error: "",
    },
    peso: {
      value: "",
      error: "",
    },
    sexo: {
      value: "",
      error: "",
    },
    senha: {
      value: "",
      error: "",
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;
    try {
      await register({
        nome: formData.nome.value,
        email: formData.email.value,
        dataNascimento: formData.dataNascimento.value,
        altura: formData.altura.value,
        peso: formData.peso.value,
        atividadeFisica: formData.atividadeFisica.value,
        sexo: formData.sexo.value,
        senha: formData.senha.value,
      });
      navigate("/");
    } catch (error) {
      validateRequestError(error);
    }
  }
  function handleReturnPage() {
    navigate("/");
  }

  return (
    <div className="generic-container">
      <div className="flex flex-col justify-center items-center">
        <img className="pepe-logo" src={logo} alt="Logo"></img>
        <div className="flex flex-col">
          <Error error={requestError} />
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Error error={formData.nome.error} />
            <Input
              type={"text"}
              name={"nome"}
              label={"Nome"}
              value={formData.nome.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.email.error} />
            <Input
              type={"email"}
              name={"email"}
              label={"Email"}
              value={formData.email.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.dataNascimento.error} />
            <Input
              type={"date"}
              name={"dataNascimento"}
              label={"Data de Nascimento"}
              value={formData.dataNascimento.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.senha.error} />
            <Input
              type={"password"}
              name={"senha"}
              label={"Escolha sua senha"}
              value={formData.senha.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.sexo.error} />
            <Input
              type={"select"}
              name={"sexo"}
              label={"Informe seu sexo"}
              value={formData.sexo.value}
              onChange={handleChange}
              onBlur={handleChange}
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Input>
            <Error error={formData.peso.error} />
            <Input
              type={"number"}
              name={"peso"}
              label={"Peso (kg)"}
              value={formData.peso.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.altura.error} />
            <Input
              type={"number"}
              name={"altura"}
              label={"Altura (cm)"}
              value={formData.altura.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <Error error={formData.atividadeFisica.error} />
            <Input
              type={"select"}
              name={"atividadeFisica"}
              label={"Nível de Atividade Física"}
              value={formData.atividadeFisica.value}
              onChange={handleChange}
              onBlur={handleChange}
            >
              <option value="">Selecione</option>
              <option value="A">A - Sedentário</option>
              <option value="B">B - Leve</option>
              <option value="C">C - Moderado</option>
              <option value="D">D - Ativo</option>
              <option value="E">E - Muito Ativo</option>
            </Input>
            <Button>Enviar</Button>
            <Button onClick={handleReturnPage}>Voltar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
