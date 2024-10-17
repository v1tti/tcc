import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../context/use-global-user.context";


export function useValidateAuthentication() {

  const [requestError, setRequestError] = useState();

  const navigate = useNavigate();

  function validateAuthenticationError(error) {
    const NOT_AUTHORIZED = 401;
    if (error.response.status === NOT_AUTHORIZED) {

      navigate("/");
    }
  }

  function validateRequestError(error) {
    if (!error) {
      setRequestError("");
      return;
    }

    const statusErrorMessage = "Algum erro ocorreu";
    const apiCustomMessage = error.response?.data.message;
    const DEFAULT_ERROR_MESSAGE = "Um erro inesperado ocorreu, tente novamente";

    if (statusErrorMessage) {
      setRequestError(statusErrorMessage);
    } else if (apiCustomMessage) {
      setRequestError(apiCustomMessage);
    } else {
      setRequestError(DEFAULT_ERROR_MESSAGE);
    }
  }

  return { requestError, validateRequestError, validateAuthenticationError };
}
