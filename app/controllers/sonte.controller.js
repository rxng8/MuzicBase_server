const Sonte = require('../models/sonte.model')

exports.create = function(req, res) {

    // console.log("get here");
    // res.status(200).send({
    //     message: "sad;lfkjhsdljf"
    // });
    // const sonte = new Sonte({
    //     songName: req.body.songName,
    //     genres: req.body.genres,
    //     author: req.body.author
    // });

    // if (!sonte || !req.body.songName) {
    //     res.status(401).send({
    //         message: "Lỗi mẹ rồi đéo tạo được object!"
    //     })
    // Ư

    // sonte.save()
    //     .then(data => {
    //         res.send(data)
    //     })
    //     .catch(err => {
    //         res.status(400).send({
    //             message: err.message || "Some error occured while creating this node!"
    //         });
    //     });

    res.send(req.body);

    // console.log(sonte);
}

exports.delete = (req, res) => {
    Sonte.findByIdAndRemove(req.params.sonteId);
}

exports.update = (req, res) => {
    Sonte.findById(req.params.sonteId)
        .then(sonte => {
            if (!sonte) {
                res.status(404).send({
                    message: "404 not found bro!"
                })
            }
            sonte.update({
                songName: req.body.songName,
                author: req.body.title,
                genres: req.body.genres
            });
        })
        .catch(err => {
            res.status(400).send({
                message: err || "Deo biet!"
            });
        })
}

exports.get = (req, res) => {
    const sonte = Sonte.findById(req.params.sonteId);
    res.send(sonte)
        .catch(err => {
            res.status(404).send({
                message: err || "Cannot get that from database."
            })
        });
}

exports.getAll = (req, res) => {
    Sonte.find()
        .then(sontes => {
            res.send(sontes);
        })
        .catch(err => {
            res.status(400).send({
                message : err || "Some error when getting sontes."
            })
        })
}