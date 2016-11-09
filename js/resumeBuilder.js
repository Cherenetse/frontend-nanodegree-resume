var bio = {
    "name": "Cherenet Tessema",
    "role": "Front-End Engineer",
    "contacts": {
        "email": "cherenetse@gmail.com",
        "github": "cherenetse@github.io",
        "linkedin": "https://www.linkedin.com/in/cherenet-alemu-tessema-33ab647a",
        "location": "Germantown , Maryland, U.S.A"
    },
    "picture": "images/bio.jpg",
    "welcomeMessage": "I'm currently working as a Software Developer in Edmonton, Alberta, Canada.  Thanks for stopping by!",
    "skills": ["Html", "CSS", "Javascript", "Responsive Webdevelopment"]
};

var work = {
    "jobs": [
        {
            "employer": "FedEx",
            "title": "Center Consultant",
            "location": "Germantown , Maryland",
            "datesWorked": "October 2016",
            "description": "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "asdfadg asdgasdgaset asdgasdgasdgasdg asdgasdgasgagasg" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag"
        },
        {
            "employer": "Safeway",
            "title": "Cashier",
            "location": "Germantown, Maryland",
            "datesWorked": "March 2016 - Jun 2016",
            "description": "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "asdfadg asdgasdgaset asdgasdgasdgasdg asdgasdgasgagasg" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag" +
            "awfaefas asdgfqfaf sadgfageaf asdgasdgagafgaegadfg adfgag"
        }

    ]
};

var education = {
    "schools": [
        { "name": "Alpha University",
            "datesAttended": "2009 - 2013",
            "location": "Addis Ababa, Ethiopia",
            "degree": "Bachelors Degree",
            "major": "Marketing Managment",
            "url": "www.alphauniversitycollege.edu.et"
        }
    ],
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Html and CSS",
            "completed": "September 2016",
            "url": "https://www.udacity.com/nanodegree/nd015"
        },
        { "school": "Linkedin Learning",
            "title": "Javascript",
            "completed": "November 2016",
            "url": "https://www.linkedin.com/learning"
        }

    ]
};

var projects = {
    "projects": [

        {
            "title": "Online Portfolio",
            "datesWorked": "September 2016",
            "description": "Created an online portfolio as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
            "images": ["images/portfolio.png"],
            "url": "http://cherenetse.github.io/"
        },
        {
            "title": "Candle Shop website",
            "datesWorked": "March 2016 - May 2016",
            "description": "Created this Website as a progress for my Front-End development goal",
            "images": ["images/capture2.png"],
            "url": "http://sccandles.x10host.com/"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);


var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);


if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();


projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();
$("#mapDiv").append(googleMap);




