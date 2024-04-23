const fs = require('fs');
const path = require('path');
const client = require('../config/ossConfig');

const loggerConfigurations = [
    { name: 'info-upOSS', level: 'info' },
    { name: 'error-upOSS', level: 'warn' }
];
const logger = require('./logUtil')(loggerConfigurations);

async function uploadFileToOSS(filePath) {
    try {
        const content = fs.readFileSync(filePath);
        await client.put('backendlog/' + path.basename(filePath), content);
        fs.unlinkSync(filePath);
    } catch (err) {
        logger.error('Error uploading logs: ', err);
    }
}

function watchLogDir() {
    const logDir = './logs';
    fs.watch(logDir, (eventType, filename) => {
        if (eventType === 'rename' && filename.endsWith('.gz')) {
            uploadFileToOSS(path.join(logDir, filename));
        }
    });
}

watchLogDir();

