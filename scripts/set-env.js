const fs = require('fs');
const path = './src/environments/environment.prod.ts';

const envFileContent = `
    export const environment = {
    production: true,
    tmdbApiKey: '${process.env.TMDB_API_KEY}'
    };
`;

fs.writeFileSync(path, envFileContent);