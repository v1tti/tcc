import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import {
  MealSuggestion,
  RegisterScreen,
  LoginScreen,
  ProfileScreen,
  Meals,
} from "../ui/screens";


export const router = createBrowserRouter([
  {
    path: ROUTES.MEAL_SUGGESTION,
    element: <MealSuggestion />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <ProfileScreen />,
  },
  { path: "/meals", element: <Meals/> },
]);
