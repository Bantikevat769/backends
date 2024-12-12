const express = require("express");
const { getProjects, addProject } = require("../controllers/projectController");
const { saveContact } = require("../controllers/contactController");

const router = express.Router();

// GET all projects
router.get("/", getProjects);

// POST a new project
router.post("/", addProject);

// POST contact form submission
router.post("/contact", saveContact);
module.exports = router;
