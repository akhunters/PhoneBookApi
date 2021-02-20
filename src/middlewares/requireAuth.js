module.exports = (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "Enter a valid authorization in request headers." });
    }

    const apiKey = authorization.replace('apiKey ', '');

    if(apiKey === process.env.API_KEY)
    {
        next();
    }
    else
    {
        return res.status(401).send({ error: "Invalid Api Key." });
    }
};
