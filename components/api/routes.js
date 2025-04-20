const express = require("express");
const router = express.Router();
const skillModel = require("../skills/model");
const projectModel = require("../projects/model");
const experienceModel = require("../experience/model");

// Get all skills
router.get("/skills", async (req, res) => {
    try {
        const skills = await skillModel.getSkills();
        res.json(skills);
    } catch (error) {
        console.error("Error fetching skills:", error);
        res.status(500).json({ error: "Failed to fetch skills" });
    }
});

// Get all projects
router.get("/projects", async (req, res) => {
    try {
        const projects = await projectModel.getProject();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

// Get all experiences
router.get("/experiences", async (req, res) => {
    try {
        const experiences = await experienceModel.getExperiences();
        res.json(experiences);
    } catch (error) {
        console.error("Error fetching experiences:", error);
        res.status(500).json({ error: "Failed to fetch experiences" });
    }
});

router.get("/educations", (req, res) => {
    const educationInfo = [
        {
            degree: "Computer Application Development",
            institution: "Conestoga College",
            location: "Guelph, ON",
            startDate: "2024-01-08",
            endDate: "2024-08-18",
            description: "Pursuing a comprehensive program in Computer Application Development, with a focus on building scalable applications, understanding system architectures, and mastering modern programming languages. Key areas of study include algorithms, data structures, database management, and software engineering principles. The program also provides opportunities to engage in hackathons and real-world research projects that hone both technical and problem-solving skills."
        },
        {
            degree: "Web Development",
            institution: "Humber College",
            location: "Toronto, ON",
            startDate: "2024-09-07",
            endDate: "",
            description: "Enrolled in the Web Development program, which emphasizes front-end and back-end technologies, responsive design, and full-stack development. Students gain hands-on experience with HTML, CSS, JavaScript, and frameworks like React and Node.js. The program promotes teamwork and collaboration through coding clubs, hackathons, and robotics competitions, allowing students to develop both technical expertise and soft skills required for the industry."
        }
    ];
    res.json(educationInfo);
});



router.get("/my-info", (req, res) => {
    const portfolioInfo = {
        name: "Jinal Patel",
        role: "Frontend Web Developer",
        info: "Passionate web developer with expertise in building modern, responsive web applications using the latest technologies.",
        bio: "I am a passionate web developer with a strong foundation in frontend technologies. I enjoy creating user-friendly interfaces and have a keen eye for design. My goal is to build applications that not only function well but also provide an exceptional user experience. I am always eager to learn new technologies and improve my skills. In my free time, I enjoy contributing to open-source projects and exploring the latest trends in web development.",
        tagline: "Crafting beautiful and functional web applications.",
        location: "Toronto, ON",
        email: "jnlpatel@gmail.com",
        github: "https://github.com/Jnlpatel",
        linkedin: "https://www.linkedin.com/in/jinal-patel-a26852192/"
    };
    res.json(portfolioInfo);
});

module.exports = router;