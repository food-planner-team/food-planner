import { createBrowserRouter } from "react-router-dom";
import system from "../../app/System/routes";
import recipe from "../../app/Recipe/routes";

export const router = createBrowserRouter([...system, ...recipe]);
