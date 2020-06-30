const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const ong_id = request.headers.authorization;
            const incident = await connection('incidents').where('ong_id', ong_id).select('*');

            return response.json( incident );
        } catch (error) {
            return response.json({ error });
        }
    },
}