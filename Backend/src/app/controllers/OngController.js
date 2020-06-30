const crypto = require('crypto');
const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const ongs = await connection('ongs').select('*');

            return response.json(ongs);
        } catch (error) {
            return response.json(error);
        }
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        try {
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
        
            console.log("Tabela criada com sucesso");
            return response.json({ id });          
        } catch (error) {
            return response.json({ error });
        }
    }
}