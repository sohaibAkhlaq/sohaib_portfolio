import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    profile: {
        name: String,
        hero: {
            badge: String,
            titlePrefix: String,
            titleAccent: String,
            subtitleChips: [String],
            description: String
        },
        quickSummary: [String],
        aboutParagraphs: [String],
        focusPills: [{
            icon: String,
            label: String
        }]
    },
    highlights: [{
        title: String,
        subtitle: String,
        image: String,
        tag: String,
        link: {
            label: String,
            url: String
        }
    }],
    careerFocus: [String],
    courses: [{
        title: String,
        provider: String,
        date: String,
        skills: [String],
        image: String,
        url: String
    }],
    achievements: [{
        title: String,
        subtitle: String,
        image: String,
        url: String
    }],
    education: [{
        degree: String,
        institution: String,
        period: String,
        location: String
    }],
    techStack: [{
        title: String,
        icon: String,
        items: [{
            name: String,
            icon: String
        }]
    }],
    github: {
        username: String,
        profileUrl: String
    },
    contact: {
        email: String,
        location: String,
        links: {
            linkedin: String,
            github: String,
            leetcode: String,
            x: String
        }
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
