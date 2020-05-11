const Pioneer = require('../models/Pioneer')

module.exports = {
    create(req, res) {
        return res.render("create")
    },
    post(req, res) {
        
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        Pioneer.create(req.body, function(pioneer) {
            return  res.render("sent")
        })
        
    }
}