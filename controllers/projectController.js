const Project = require("../models/project");

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new project
const addProject = async (req, res) => {
  const { title, description, image, link } = req.body;

  try {
    const project = new Project({
      title,
      description,
      image,
      link,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProjects, addProject };
