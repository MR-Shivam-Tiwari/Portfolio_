const mongoose = require('mongoose');
const User = require('./models/Data'); // Import your User model

mongoose.connect('mongodb+srv://shivamt2023:ft123shivam123@cluster0.nasml5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        seedDatabase();
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

async function seedDatabase() {
    try {
        const userData = {
            "user": {
                "about": {
                    "name": "Shivam Tiwari",
                    "title": "Full Stack Developer",
                    "subTitle": "I develop 3D visuals, user interfaces and web applications",
                    "description": "As a Full Stack developer with 1 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.",
                    "quote": "Live the Life as you want",
                    "exp_year": "1",
                    "address": "Delhi , India",
                    "phoneNumber": "+91-8726490079",
                    "avatar": {
                        "public_id": "1706283290608-n4hq7k",
                        "url": "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?w=740&t=st=1711363141~exp=1711363741~hmac=5d95ba1738fb24821dee671bd086be9445a3fb5b7d1c4498a2860065b867dd32",
                        "_id": "65b3f54feb20546ae6d4ea79"
                    },
                    "alternateAvatars": []
                },
                "_id": "65b3a22c01d900e96c4219ae",
                "email": "shivamt2023@gmail.com",
                "timeline": [
                    {
                        "company_name": "Govardhan Learning Cloud",
                        "summary": "Engineered  full-scale Q&A and JOB Portal platform integrating RESTful API  that handled many users within the first year while maintaining 99.9% uptime.",
                        "startDate": "2023-04-13T00:00:00.000Z",
                        "endDate": "2024-11-13T00:00:00.000Z",
                        "jobTitle": "Full Stack Developer",
                        "jobLocation": " Lajpat Nagar , Delhi",
                        "forEducation": true,
                        "enabled": true,
                        "_id": "65f1fe900556c3f887e9db94"
                    },
                    {
                        "company_name": " AVORISE TECH SOLUTIONS",
                        "summary": "Engineered a highly scalable e-commerce Storecode Generator utilizing React and Node.js, resulting in a remarkable 50% increase in efficiency.",
                        "startDate": "2023-11-13T00:00:00.000Z",
                        "endDate": "2024-04-13T00:00:00.000Z",
                        "jobTitle": "Full Stack Developer",
                        "jobLocation": " Delhi",
                        "forEducation": true,
                        "enabled": true,
                        "_id": "65f1fe900556c3f887e9db94"
                    }
                ],
                "skills": [
                    {
                        "enabled": true,
                        "name": "Figma",
                        "sequence": 15,
                        "percentage": 95,
                        "image": {
                            "public_id": "1706287138776-slfc3e",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287138776-slfc3e",
                            "_id": "65b3e023b48589dfcae18289"
                        },
                        "_id": "65b3e023b48589dfcae18288"
                    },
                    {
                        "enabled": true,
                        "name": "TypeScript",
                        "sequence": 6,
                        "percentage": 90,
                        "image": {
                            "public_id": "1706287104739-pm8en",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en",
                            "_id": "65b3e001b48589dfcae18246"
                        },
                        "_id": "65b3e001b48589dfcae18245"
                    },
                    {
                        "enabled": true,
                        "name": "Node.js",
                        "sequence": 7,
                        "percentage": 92,
                        "image": {
                            "public_id": "1706286990341-tznh4",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4",
                            "_id": "65b3df8fb48589dfcae18205"
                        },
                        "_id": "65b3df8fb48589dfcae18204"
                    },
                    {
                        "enabled": true,
                        "name": "MongoDB",
                        "sequence": 13,
                        "percentage": 70,
                        "image": {
                            "public_id": "1706286966065-p2yrx9",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9",
                            "_id": "65b3df76b48589dfcae181c6"
                        },
                        "_id": "65b3df76b48589dfcae181c5"
                    },
                    {
                        "enabled": true,
                        "name": "Three.js",
                        "sequence": 9,
                        "percentage": 70,
                        "image": {
                            "public_id": "1706286941212-chpzl",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286941212-chpzl",
                            "_id": "65b3df5db48589dfcae18189"
                        },
                        "_id": "65b3df5db48589dfcae18188"
                    },
                    {
                        "enabled": true,
                        "name": "Redux",
                        "sequence": 7,
                        "percentage": 95,
                        "image": {
                            "public_id": "1706286913147-nwiky8",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286913147-nwiky8",
                            "_id": "65b3df41b48589dfcae1814e"
                        },
                        "_id": "65b3df41b48589dfcae1814d"
                    },
                    {
                        "enabled": true,
                        "name": "Javascript",
                        "sequence": 3,
                        "percentage": 95,
                        "image": {
                            "public_id": "1706288679775-y4qwn3",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3",
                            "_id": "65b3e628b48589dfcae18750"
                        },
                        "_id": "65b3df24b48589dfcae18114"
                    },
                    {
                        "enabled": true,
                        "name": "Git",
                        "sequence": 12,
                        "percentage": 95,
                        "image": {
                            "public_id": "1706286842731-r0eyn",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286842731-r0eyn",
                            "_id": "65b3defbb48589dfcae180de"
                        },
                        "_id": "65b3defbb48589dfcae180dd"
                    },
                    {
                        "enabled": true,
                        "name": "Github",
                        "sequence": 11,
                        "percentage": 95,
                        "image": {
                            "public_id": "1706286821409-21cuqs",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286821409-21cuqs",
                            "_id": "65b3dee5b48589dfcae180a9"
                        },
                        "_id": "65b3dee5b48589dfcae180a8"
                    },
                    {
                        "enabled": true,
                        "name": "Vercel",
                        "sequence": 7,
                        "percentage": 90,
                        "image": {
                            "public_id": "1706286729467-rbblgb",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286729467-rbblgb",
                            "_id": "65b3de89b48589dfcae18016"
                        },
                        "_id": "65b3de89b48589dfcae18015"
                    },
                    {
                        "enabled": true,
                        "name": "Next.js",
                        "sequence": 6,
                        "percentage": 90,
                        "image": {
                            "public_id": "1706286682511-rgp96r",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286682511-rgp96r",
                            "_id": "65b3de5bb48589dfcae17fe9"
                        },
                        "_id": "65b3de5bb48589dfcae17fe8"
                    },
                    {
                        "enabled": true,
                        "name": "React",
                        "sequence": 5,
                        "percentage": 90,
                        "image": {
                            "public_id": "1706291833080-0loo09",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09",
                            "_id": "65b3f27aeb20546ae6d49e76"
                        },
                        "_id": "65b3de41b48589dfcae17fbd"
                    },
                    {
                        "enabled": true,
                        "name": "Tailwind",
                        "sequence": 4,
                        "percentage": 99,
                        "image": {
                            "public_id": "1706286616701-2jka3q",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286616701-2jka3q",
                            "_id": "65b3de19b48589dfcae17f95"
                        },
                        "_id": "65b3de19b48589dfcae17f94"
                    },
                    {
                        "enabled": true,
                        "name": "CSS",
                        "sequence": 2,
                        "percentage": 97,
                        "image": {
                            "public_id": "1706286273084-romle",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle"
                        },
                        "_id": "65b3dcc1b48589dfcae17e4d"
                    },
                    {
                        "name": "HTML",
                        "sequence": 1,
                        "percentage": 98,
                        "image": {
                            "public_id": "1706286058630-v3ax0a",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a"
                        },
                        "_id": "65b3dbeba5c8d2db7b6164bc",
                        "enabled": true
                    }
                ],
                "projects": [
                    {
                        "liveurl": "https://www.eksathi.com/",
                        "githuburl": "",
                        "title": "Eksathi",
                        "sequence": 12,
                        "image": {
                            "public_id": "1706285416017-wra7swm",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285416017-wra7swm"
                        },
                        "description": "",
                        "techStack": ["Reactjs ", " Node ", " Mern ", " CSS"],
                        "_id": "65b3d969d017f6b49c778c4a"
                    },
                    {
                        "liveurl": "https://store-code-day-4.vercel.app/",
                        "githuburl": "",
                        "title": "Store Code",
                        "sequence": 11,
                        "image": {
                            "public_id": "1706285405228-98liol",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285405228-98liol"
                        },
                        "techStack": ["Reactjs ", " Nextjs ", " Mern ", " CSS"],
                        "_id": "65b3d95dd017f6b49c778c2f"
                    },
                    {
                        "liveurl": "https://github.com/MR-Shivam-Tiwari/FoodWave",
                        "githuburl": "",
                        "title": "FoodWave",
                        "sequence": 10,
                        "image": {
                            "public_id": "1706285393568-zl9mcc",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285393568-zl9mcc"
                        },
                        "description": "",
                        "techStack": ["Reactjs "],
                        "_id": "65b3d952d017f6b49c778c16"
                    }
                ],
                "social_handles": [
                    {
                        "platform": "LinkedIn",
                        "url": "https://www.linkedin.com/in/mr-shivam-tiwari/",
                        "image": {
                            "public_id": "1708718263294-2lfj67.webp",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp"
                        },
                        "enabled": true,
                        "_id": "65b3e99beb20546ae6d463c2"
                    },
                    {
                        "enabled": true,
                        "platform": "Github",
                        "url": "https://github.com/MR-Shivam-Tiwari",
                        "image": {
                            "public_id": "1708718328750-d4jsq.webp",
                            "url": "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                        },
                        "_id": "65b3e47cb48589dfcae185bd"
                    },
                    {
                        "enabled": true,
                        "platform": "Facebook",
                        "url": "#",
                        "image": {
                            "public_id": "1708718346601-xldm.webp",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp"
                        },
                        "_id": "65b3e43cb48589dfcae1856c"
                    }
                ],
                "services": [
                    {
                        "name": "App Development",
                        "charge": "$300",
                        "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
                        "enabled": true,
                        "_id": "65f1fd690556c3f887e9d94a",
                        "image": {
                            "public_id": "portfolio3/1710364293287-4q1ngo.webp",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp"
                        }
                    },
                    {
                        "name": "Web & App ",
                        "charge": "$600",
                        "desc": "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
                        "image": {
                            "public_id": "portfolio3/1710357775748-9vwq4q.jpeg",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg"
                        },
                        "enabled": true,
                        "_id": "65f1fd100556c3f887e9d87b"
                    },
                    {
                        "name": "UI/UX Solutions",
                        "charge": "$399",
                        "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
                        "image": {
                            "public_id": "1706290914024-725ytf",
                            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf",
                            "_id": "65b3eee8eb20546ae6d467fe"
                        },
                        "_id": "65b3e33db48589dfcae1851d",
                        "enabled": true
                    }
                ],
                "blog": [
                    {
                        title: "Diversification of digital marketing stategies",
                        date: "02 June, 2022",
                        author: "John Smith",
                        img: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp",
                        description: [
                            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
                            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
                            "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
                        ],
                    },
                    {
                        title: "Diversification of digital marketing stategies",
                        date: "02 June, 2022",
                        author: "John Smith",
                        img: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg",
                        description: [
                            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
                            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
                            "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
                        ],
                    },
                    {
                        title: "Diversification of digital marketing stategies",
                        date: "02 June, 2022",
                        author: "John Smith",
                        img: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf",
                        description: [
                            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
                            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
                            "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
                        ],
                    },
                    {
                        title: "Diversification of digital marketing stategies",
                        date: "02 June, 2022",
                        author: "John Smith",
                        img: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg",
                        description: [
                            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
                            "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
                            "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
                        ],
                    },
                ]
            }
        }

        // Create user document
        const newUser = await User.create(userData);
        console.log('User data seeded successfully:', newUser);
        process.exit(); // Exit the script after seeding
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1); // Exit with error
    }
}
