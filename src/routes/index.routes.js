import { Router } from "express"

import rapperRoutes from "./rapper.routes.js";
const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({massage: "Servidor funfando!"})
}) 

routes.use("/rapper", rapperRoutes)

export default routes