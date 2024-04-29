export const miMiddleware = (req, res, next) => {
    console.log("pasaste por un middleware")
    const auth = req.headers.authorization

    if (auth) {
        next()
    } else {
        res.status(401).send("no se permite ver la contraseña")
    }
}

//middleware tiempo 
///desafio tiempo
export const middlewareTiempo = (req, res, next) => {

    const Auth = req.header.authorization;


    if (Auth) {
        next();
    } else {
        res.send("¿Quién es?");
    }
};