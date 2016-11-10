var bio = {
    "name": "Cherenet Tessema",
    "role": "Front-End Engineer",
    "contacts": {
        "email": "cherenetse@gmail.com",
        "mobile": "5857487534",
        "github": "cherenetse@github.io",
        "linkedin": "https://www.linkedin.com/in/cherenet-alemu-tessema-33ab647a",
        "location": "Germantown , Maryland, U.S.A"
    },
    "biopic": "images/bio2.jpg",
    "welcomeMsg": "I'm currently working as center consultant at FedEx office.Thanks for stopping by!",
    "skills": ["Html", "CSS", "Javascript", "Responsive Webdevelopment"]
};

var work = {
    "jobs": [{
            "employer": "FedEx",
            "title": "Center Consultant",
            "location": "Germantown , Maryland",
            "dates": "October 2016",
            "description": "consistently delivering a positive customer experience to all customers," +
                " utilizing consultative skills to anticipate customer needs, suggest alternatives and " +
                "provide solutions. This is a customer service focused job that requires knowledgeable team member " +
                " in all areas of the Center’s business, including print, signs & graphics, and shipping"
        }, {
            "employer": "Panera Bread",
            "title": "Line Associate",
            "location": "Germantown , Maryland",
            "dates": "March 2016 - October 2016",
            "description": " Satisfying customer needs"
        }, {
            "employer": "Safeway",
            "title": "Cashier",
            "location": "Germantown, Maryland",
            "dates": "March 2016 - Jun 2016",
            "description": "Responsible for taking money in the form of cash," +
                " check, or credit card from patrons in exchange for food or services." +
                " Scans items, provides change, balances drawer, and processes card transactions."
        }

    ]
};

var education = {
    "schools": [{
        "name": "Alpha University",
        "dates": "2009 - 2013",
        "location": "Addis Ababa, Ethiopia",
        "degree": "Bachelors Degree",
        "majors": ["Marketing Managment", "Digital Market"],
        "url": "www.alphauniversitycollege.edu.et"
    }],
    "onlineCourses": [{
            "school": "Udacity",
            "title": "Html and CSS",
            "dates": "September 2016",
            "url": "https://www.udacity.com/nanodegree/nd015"
        }, {
            "school": "Linkedin Learning",
            "title": "Javascript",
            "dates": "November 2016",
            "url": "https://www.linkedin.com/learning"
        }

    ]
};

var projects = {
    "projects": [

        {
            "title": "Online Portfolio",
            "dates": "September 2016",
            "description": "Created an online portfolio as part of Udacity's Front-End Web Developer " +
                "Nanodegree.",
            "images": ["images/portfolio.png", "images/port1.png"],
            "url": "http://cherenetse.github.io/"
        }, {
            "title": "Candle Shop website",
            "dates": "March 2016 - May 2016",
            "description": "Created this Website as a progress for my Front-End development goal",
            "images": ["images/capture2.png", "images/capture1.png"],
            "url": "http://sccandles.x10host.com/"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);



var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

bio.display = function() {

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i = 0; i < formattedContactInfo.length; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
};

bio.display();


work.display = function() {
    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

};

work.display();


projects.display = function() {
    if (projects.projects.length > 0) {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var img = 0; img < projects.projects[i].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();
$("#mapDiv").append(googleMap);