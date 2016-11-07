

 var bio = {
    "name": "Cherernet Tessema",
    "role": "Front-end Webdeveloper",
    "contact": {
        "email": "cherenetse@gmail.com",
        "github": "cherenetse.github.io",
        "linkedin": "https://www.linkedin.com/in/cherenet-alemu-tessema-33ab647a",
        "location": "Germantown Maryland"
    },
    "welcomeMessage": "welcome to my resume page , I am a self thought developer currently working on Diffrent projects",
    "skills": ["creative", "commited", "hardworking"
    ],
    "biopic": "image/fry.jpg"
};



 var education = {
    "schools": [{
            "name": "Alpha University College",
            "city": "Addis Ababa",
            "degree": "Bachelors",
            "major": ["Marketing Managment", "Information Technology"]
        },

        {
            "name": "Udacity",
            "city": "online",
            "degree": "Nano Degree",
            "major": "Front-end Webdeveloper"
        }
    ]
};

 var work = {
    "employer": "Fedex Office",
    "position" : "center Consultant"
};

 var projects = {
    "projects": [
    {
        "title": "candle shop website",
        "dates": "2016",
        "description" : " This is my first website to build and every time it will be updated to show my current status",
        "images": [
            "https://s3.amazonaws.com/accredible-api-projects/previews/6850/large/1472009673494?1472009443",
            ]
    }]
 };



 if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",
        bio.skills[0]);
    $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data",
            bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data",
            bio.skills[3]);
    $("#skills").append(formattedSkill);
 };

 for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

     };



