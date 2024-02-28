const db = require("../models/model.js");
const JoinNowForm = db.joinNow;
const { Op } = db.Sequelize;

exports.create = async (req, res) => {
    let {
        name,
        email,
        phoneNumber,
        joinDate,
        membershipType,
        location
    } = req.body;
 
    try {
        const createdJoinform = await JoinNowForm.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            joinDate: joinDate,
            membershipType: membershipType,
            location: location
        });
        res.json({ status: 200, message: "Success", data: createdJoinform });
    } catch (error) {
        console.log("create", error)
        res.status(400).json({ status: 400, message: error.message });
    }
};
 
exports.update = async (req, res) => {
    const id = req.params.id;
 
    try {
        const [updatedCount, updatedForm] = await JoinNowForm.update(req.body, {
            where: { id: id },
            returning: true, // Ensure that the updated row is returned
        });
        
        if (updatedCount === 1) {
            res.send({
                message: "JoinNow form was updated successfully.",
                updatedForm
            });
        } else {
            res.status(404).send({
                message: `Cannot update JoinNow form with id=${id}. Maybe JoinNow form was not found or req.body is empty!`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error updating JoinNow form with id=" + id
        });
    }
};
 
exports.findAll = async (req, res) => {
    const { name } = req.query;
    const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
 
    try {
        const joinNowForms = await JoinNowForm.findAll({ where: condition });
        res.send(joinNowForms);
    } catch (error) {
        res.status(500).send({
            message: "Some error occurred while retrieving JoinNow forms."
        });
    }
};
 
exports.findOne = async (req, res) => {
    const id = req.params.id;
 
    try {
        const joinNowForm = await JoinNowForm.findByPk(id);
        
        if (joinNowForm) {
            res.send(joinNowForm);
        } else {
            res.status(404).send({
                message: `Cannot find JoinNow form with id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving JoinNow form with id=" + id
        });
    }
};
 
exports.delete = async (req, res) => {
    const id = req.params.id;
 
    try {
        const deletedCount = await JoinNowForm.destroy({
            where: { id: id }
        });
        
        if (deletedCount === 1) {
            res.send({
                message: "JoinNow form was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot delete JoinNow form with id=${id}. Maybe JoinNow form was not found!`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Could not delete JoinNow form with id=" + id
        });
    }
};
 
exports.deleteAll = async (req, res) => {
    try {
        const deletedCount = await JoinNowForm.destroy({
            where: {},
            truncate: false
        });
        
        res.send({ message: `${deletedCount} JoinNow forms were deleted successfully!` });
    } catch (error) {
        res.status(500).send({
            message: "Some error occurred while removing all JoinNow forms."
        });
    }
};
 
exports.findAllPublished = async (req, res) => {
    try {
        const joinNowForms = await JoinNowForm.findAll({ where: { published: true } });
        res.send(joinNowForms);
    } catch (error) {
        res.status(500).send({
            message: "Some error occurred while retrieving published JoinNow forms."
        });
    }
};
