const corsAnywhere = require('cors-anywhere');

// Configurare server
const host = '0.0.0.0'; // Ascultă pe toate interfețele
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Permite toate origin-urile
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
    console.log(`CORS Proxy server is running on ${host}:${port}`);
});
