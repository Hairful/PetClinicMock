const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    handler: function (req, res) {
        res.status(429).json({
            code: -4,
            message: "超出请求限制"
        });
    }
});


module.exports = { limiter };