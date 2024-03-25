const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: {
        about: {
            name: String,
            title: String,
            subTitle: String,
            description: String,
            quote: String,
            exp_year: String,
            address: String,
            phoneNumber: String,
            avatar: {
                public_id: String,
                url: String
            },
            alternateAvatars: [String]
        },
        _id: String,
        email: String,
        timeline: [{
            company_name: String,
            summary: String,
            startDate: Date,
            endDate: Date,
            jobTitle: String,
            jobLocation: String,
            forEducation: Boolean,
            enabled: Boolean
        }],
        skills: [{
            enabled: Boolean,
            name: String,
            sequence: Number,
            percentage: Number,
            image: {
                public_id: String,
                url: String
            }
        }],
        projects: [{
            liveurl: String,
            githuburl: String,
            title: String,
            sequence: Number,
            image: {
                public_id: String,
                url: String
            },
            description: String,
            techStack: [String]
        }],
        social_handles: [{
            platform: String,
            url: String,
            image: {
                public_id: String,
                url: String
            },
            enabled: Boolean
        }],
        services: [{
            name: String,
            charge: String,
            desc: String,
            enabled: Boolean,
            image: {
                public_id: String,
                url: String
            }
        }],
        blog: [{
            title: String,
            date: String,
            author: String,
            img: String,
            description: [String],
        }],

    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
