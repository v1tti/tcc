import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import { MealSuggestion } from "../ui/screens";

export const router = createBrowserRouter([
  {
    path: ROUTES.MEAL_SUGGESTION,
    element: <MealSuggestion />,
  },
]);
