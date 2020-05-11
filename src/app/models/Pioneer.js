const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    create(data, callback) {
        const query = `
            INSERT INTO pioneers (
                avatar_url,
                name,
                birth,
                gender,
                type_blood,
                baptized,
                cpf,
                invested,
                previous_club,
                address,
                neighborhood,
                uf,
                cep,
                cell_phone,
                telephone,
                job,
                email,
                weekends_parents,
                father_name,
                father_baptized,
                father_telephone,
                father_cellphone,
                father_email,
                father_profession,
                father_cpf,
                father_warn_emergency,
                mother_name,
                mother_baptized,
                mother_telephone,
                mother_cellphone,
                mother_email,
                mother_profession,
                mother_cpf,
                mother_warn_emergency,
                created_at
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34, $35)
            RETURNING id
        `

        const values = [
                data.avatar_url,
                data.name,
                date(data.birth).iso,
                data.gender,
                data.type_blood,
                data.baptized,
                data.cpf,
                data.invested,
                data.previous_club,
                data.address,
                data.neighborhood,
                data.uf,
                data.cep,
                data.cell_phone,
                data.telephone,
                data.job,
                data.email,
                data.weekends_parents,
                data.father_name,
                data.father_baptized,
                data.father_telephone,
                data.father_cellphone,
                data.father_email,
                data.father_profession,
                data.father_cpf,
                data.father_warn_emergency,
                data.mother_name,
                data.mother_baptized,
                data.mother_telephone,
                data.mother_cellphone,
                data.mother_email,
                data.mother_profession,
                data.mother_cpf,
                data.mother_warn_emergency,
                date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if (err) return res.send("Database Error!")

            callback(results.rows[0])
        })
    }
}