import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.router.js"
import authRoutes from "./router/auth.routers.js"

const app = express();
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("7", (req, res) => res.json({mesaage: "Bienvenidos a mi proyecto"}));
app.use('/api',tareasRoutes);
app.use('/api',authRoutes);

//Manejando errores
app.use((err, req , res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;