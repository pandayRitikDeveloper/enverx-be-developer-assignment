const Model = require('../models/blogPostModel');

// it is use the create new block
module.exports.getAllBlog = async function (req, res) {
    console.log("get block called")
        try {
          const result = await Model.find().sort({ title: 1 }); 
          res.json(result);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
  };

// it is use the create new block
module.exports.createBlog = async function (req, res, next) {
  let  data = new Model({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
      });
      try {
        const dataToSave = data.save();
        dataToSave.then(function (result) {
          res.json(result);
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

module.exports.seachBlogById = async function (req, res, next) {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
//delete a blog by Id 
module.exports.deleteBlogById = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`${data.title} blog has been deleted..`);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
//update a blog by id
module.exports.updateBlogById = async function (req, res, next) {
    try {
        if (!req.body) {
          return res.status(400).send({
            message: 'Data to update can not be empty!',
          });
        }
        const id = req.params.id;
        const data = await Model.findByIdAndUpdate(id, req.body, {
          useFindAndModify: false,
        });
        if (!data) {
          res.status(404).send({
            message: `Cannot update model with id=${id}. Maybe model was not found!`,
          });
        } else res.send({ message: 'Blog was updated successfully.',
        data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
