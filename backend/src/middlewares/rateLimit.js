const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 10000,
    handler: function (req, res) {
        res.status(429).json({
            code: -4,
            message: "超出请求限制"
        });
    }
});


module.exports = { limiter };