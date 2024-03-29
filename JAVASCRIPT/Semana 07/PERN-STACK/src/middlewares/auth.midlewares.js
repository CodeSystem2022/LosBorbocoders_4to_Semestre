import { token } from "morgan";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: 'No estas autorizado'
        });
    }

    jwt.verify(token, "xyz123", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'No estas autorizado'
            });
        }
        req.usuarioid = decoded.id;
        next();
    });
}    
