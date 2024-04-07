import jwt from 'jsonwebtoken';

const jwtAuthMiddleware = (req, res, next)=> {
    const token = req.header.authorization.split(' ')[1];
    if (!token) return res.status(404).json({error: 'Unauthorized'});
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(404).json({error: 'Invalid token'});
    }
}

module.exports = jwtAuthMiddleware;