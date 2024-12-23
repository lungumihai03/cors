const corsAnywhere = require('cors-anywhere');

// Configurare server
const host = '0.0.0.0'; // Ascultă pe toate interfețele
const port = process.env.PORT || 8080;

// Creează serverul
corsAnywhere.createServer({
    originWhitelist: [], // Permite toate origin-urile (fără restricții)
    requireHeader: [], // Elimină cerința pentru anteturi (ex. origin, x-requested-with)
    removeHeaders: ['cookie', 'cookie2'], // Opțional: elimină anteturile sensibile
}).listen(port, host, () => {
    console.log(`CORS Proxy server is running on ${host}:${port}`);
});
