const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.name === undefined) {
        return res.status(400).json({ message: "o nome não foi enviado para o processamento"});
    }

    
    if (body.name === "") {
        return res.status(400).json({ message: "o nome foi enviado, mas encontra-se vazio"});
    }
    
    if (body.quantity === undefined) {
        return res.status(400).json({ message: "a quantidade não foi enviado para o processamento"});
    }

    if (body.quantity < 0) {
        return res.status(400).json({ message: "a quantidade foi enviada, mas é obrigatória ser maior que 0"});
    }

    next();
};

module.exports = {
    validateBody
};