const mongoose = require("mongoose");
const db = require("../../db");

const ExperienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
    description: String,
    isCurrent: { type: Boolean, default: false },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

async function initializeExperiences() {
    const experienceData = [
        {
            title: 'Frontend Web Developer',
            company: 'Jency Software',
            location: 'Navsari, IN',
            startDate: new Date('2021-01-01'),
            endDate: new Date('2023-03-31'),
            isCurrent: false,
            description: 'Developed and maintained client websites using modern web technologies.',
        }
    ];

    try {
        await Experience.deleteMany({}); // Clear existing experiences
        const result = await Experience.insertMany(experienceData);
        console.log("Experiences initialized:", result);
    } catch (error) {
        console.error("Error initializing experiences:", error);
        throw error;
    }
}

async function getExperiences() {
    await db.connect();
    return await Experience.find({});
}

async function addExperience(title, company, location, startDate, endDate, description, isCurrent) {
    await db.connect();
    const newExperience = new Experience({
        title,
        company,
        location,
        startDate,
        endDate,
        description,
        isCurrent: endDate ? false : true,
    });
    return await newExperience.save();
}

async function deleteExperience(id) {
    await db.connect();
    return await Experience.deleteOne({ _id: id });
}

// Update an experience in the database
async function updateExperience(expId, title, company, location, startDate, endDate, description, isCurrent) {
    await db.connect();

    try {
        const updatedExperience = await Experience.findByIdAndUpdate(
            expId,
            { title, company, location, startDate, endDate, description, isCurrent },
            { new: true } 
        );

        return updatedExperience;
    } catch (error) {
        console.error("Error updating experience:", error);
        throw error;
    }
}

module.exports = {
    initializeExperiences,
    getExperiences,
    addExperience,
    deleteExperience,
    updateExperience
};