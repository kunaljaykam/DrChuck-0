/* Change this file to get your personal Portfolio */

// To change DrChuck colors globally go to the  _globalColor.scss file


// Summary And Greeting Section


// change logo
const logo = {
  img: require("./assets/images/CHARLES-SEVERANCE.svg")
}


// update image-slider

const imageSlider = [
  {
    name: "tsugi",
    original: require("./assets/images/tsugi-cover.jpeg"),
    caption: "caption"
  },
  {
    name: "tsugi",
    original: require("./assets/images/sakai-cover.jpeg"),
    caption: "caption"
  },
  {
    name: "tsugi",
    original: require("./assets/images/learner-privacy-cover.jpeg"),
    caption: "caption"
  }
];



//update courses here

const courses = {
  title: "Free Course",
  subtitle: "",
  courses: [
    {
      image: require("./assets/images/python-white.png"),
      courseName: "Python For Everyone",
      courseDesc: "",
      footerLink: [
        {
          name: "VISIT WEBSITE",
          url: "https://www.py4e.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dj-white.png"),
      courseName: "Django For Everyone",
      courseDesc: "",
      footerLink: [
        {
          name: "VISIT WEBSITE",
          url: "https://www.dj4e.com/"
        }
      ]
    },
    {
      image: require("./assets/images/web-white.png"),
      courseName: "WebApp For Everyone",
      courseDesc: "",
      footerLink: [
        {
          name: "VISIT WEBSITE",
          url: "https://www.wa4e.com/"
        }
      ]
    },
    {
      image: require("./assets/images/postgres-white.png"),
      courseName: "PostgreSQL For Everyone",
      courseDesc: "",
      footerLink: [
        {
          name: "VISIT WEBSITE",
          url: "http://pg4e.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};






// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/csev",
  linkedin: "https://www.linkedin.com/in/csev/",
  gmail: "csev@gmail.com",
  gitlab: "https://gitlab.com/csev",
  facebook: "https://www.facebook.com/csev",
  medium: "https://medium.com/@csev",
  stackoverflow: "https://stackoverflow.com/users/10422806/csev",
 
  display: true // Set true to display this section, defaults to false
};


// Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Harvard University",
//       logo: require("./assets/images/harvardLogo.png"),
//       subHeader: "Master of Science in Computer Science",
//       duration: "September 2017 - April 2019",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };


// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big courses you have worked on



// Blogs Section(Revue Blogs)

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@csev/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     },
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: 
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ,

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/csev-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// const podcastSection = {
//   title: "Podcast ",
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// const contactInfo = {
//   title:"Contact Me ☎️",
//   subtitle:
//     "Discuss a course or just want to say hi? My Inbox is open for all.",
//   number: "+92-3243454077",
//   email_address: "saadpasta70@gmail.com"
// };

// Twitter Section

const twitterDetails = {
  userName: "drchuck", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  logo,
  imageSlider,
  socialMediaLinks,
  openSource,
  courses,
  talkSection,
  twitterDetails
};
