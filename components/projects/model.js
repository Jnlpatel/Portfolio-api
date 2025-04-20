const mongoose = require("mongoose");
const db = require("../../db");

const ProjectSchema = new mongoose.Schema(
    {
    name: String,
    description: String,
    imageData: String,
    imageType: String,
    tags: [String],
    githubLink: String,
    liveLink: String,
    }
);

const Project = mongoose.model("Project", ProjectSchema);

async function initializeProject() {
    const projectData = [
        {
            name: "Movie Review System",
            description: "A platform where user can check list of movies and give reviews to it.",
            tags: ['ASP.NET Core', 'c#', 'SQL Server', 'HTML', 'CSS'],
            imageData: null,
            imageType: '',
            githubLink: 'https://github.com/yourusername/portfolio',
            liveLink: 'https://yourportfolio.com'
        },
        {   
            name: 'E-Learning Platform',
            description: 'Developed a comprehensive e-learning platform featuring both student-facing frontend and an admin panel for content management.',
            tags: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
            imageData: null,
            imageType: '',
            githubLink: 'https://github.com/Jnlpatel/E-Learning-Platform',
            liveLink: 'http://jinalpatel.infinityfreeapp.com/E-Learning-Plateform/index.php'
        }
    ];

    try {
        const result = await Project.insertMany(projectData);
        console.log("Projects initialized:", result);
    } catch (error) {
        console.error("Error initializing projects:", error);
        throw error;
    }
}

async function getProject() {
    try {
        const projects = await Project.find({});
        console.log("Fetched Projects:", projects);
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

async function addProject(name, description, tags, imageData, imageType, githubLink, liveLink) {
    try {
        const newProject = new Project({ name, description, imageData, image, imageType, githubLink, liveLink });
        const result = await newProject.save();
        console.log("New Project Added:", result);
        return result;
    } catch (error) {
        console.error("Error adding project:", error);
        throw error;
    }
}

async function deleteProject(id) {
    try {
        const result = await Project.deleteOne({ _id: id });
        console.log("Delete result:", result);
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
}


module.exports = {
    initializeProject,
    getProject,
    addProject,
    deleteProject,
};
