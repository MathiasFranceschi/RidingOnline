// Middleware de l'erreur 404 (page non trouvé)
exports.notFound = (req, res, next) => {
    const error = new Error('Not found');

    error.status = 404;

    next(error);
};

// on fait une fonction qui prend une promesse en paramètre et qui exécute un middleware qui appelle la promesse (fn) qui renvoie le résultat de celle-ci ou qui attrape l'erreur pour passer au prochain middleWare .

// comment ça affiche l'erreur interceptée si dans showErrors on a pas catchErrors ?

exports.catchErrors = (fn) => {
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    };
};

// function catchErrors(fn) {
//     return function (req, res, next) {
//         return fn(req, res, next).catch((err) => next(err));
//     };
// }

// On créée un middleware d'erreurs avec 4 paramètres donc le premier est l'erreur,  dans ce middleware on créée une constante qui va récupérer le code http et renvoyer un fichier 'erreur' avec un message d'erreur.
// * le premier argument est une instance de Error
exports.showErrors = (err, req, res, next) => {
    const statusCode = err.status || 500;

    res.status(statusCode).render('error', { error: err });
};

