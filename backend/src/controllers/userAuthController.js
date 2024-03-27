const { registerUser, loginUser } = require('../services/userAuthService');

exports.registerUser = async (req, res) => {
    const { userName, password } = req.body;
    const result = await registerUser(userName, password);
    res.status(200).json(result);
}

exports.loginUser = async (req, res) => {
    const { userName, password } = req.body;
    const result = await loginUser(userName, password);
    res.status(200).json(result);
}

