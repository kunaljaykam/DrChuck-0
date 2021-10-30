/* Change this file to update/change */

// To change DrChuck colors globally go to the  _globalColor.scss file


// Summary And Greeting Section


// change logo
const logo = {
  img: require("./assets/images/CHARLES-SEVERANCE.svg")
}


// update image-slider

// const imageSlider = [
//   {
//     name: "tsugi",
//     original: require("./assets/images/tsugi-cover.jpeg"),
//     caption: "caption"
//   },
//   {
//     name: "tsugi",
//     original: require("./assets/images/sakai-cover.jpeg"),
//     caption: "caption"
//   },
//   {
//     name: "tsugi",
//     original: require("./assets/images/learner-privacy-cover.jpeg"),
//     caption: "caption"
//   }
// ];


const imageSlider = {
  tsugi: "https://res.cloudinary.com/dpmohmxdf/image/upload/v1635621819/tsugi-cover_cvkcnd.jpg", // for better result use media query
  learner: "https://res.cloudinary.com/dpmohmxdf/image/upload/v1635621837/learner-privacy-cover_guoqdf.jpg",

  sakai: "https://res.cloudinary.com/dpmohmxdf/image/upload/v1635621827/sakai-cover_vclbvw.jpg", // need to re-do sakai logo(edges)
};




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




// Books Section

const books = {
  title: "Books",

}

// const videos = {
//   url: [
//     "https://vimeo.com/17207620",             // will map out the video url
//     "https://vimeo.com/17207620",        

//   ]
// };


const videos = {
  urlOne: "https://vimeo.com/17207620",
  urlTwo: "https://www.youtube.com/watch?v=BVKpW02hsrU",
  urlThree: "https://www.youtube.com/watch?v=sa2WsgCvn7c",
  urlFour: "https://vimeo.com/17213019"
};
  


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/csev",
  linkedin: "https://www.linkedin.com/in/csev/",
  gmail: "csev@gmail.com",
  gitlab: "https://gitlab.com/csev",
  facebook: "https://www.facebook.com/csev",
  medium: "https://medium.com/@csev",
  stackoverflow: "https://stackoverflow.com/users/csev",
 
  display: true // Set true to display this section, defaults to false
};


// Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//      
//       ]
//     },
//     {
//      
//     }
//   ]
// };


// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
// 
// 
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
//     
//     {
//      
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: 
//     ""
//   ,

//   talks: [
//     {

//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: "Podcast ",
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     ""
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// const contactInfo = {
//   title:",
//   subtitle:
//     "",
//   number: "",
//   email_address: ""
// };

// Twitter Section

const twitterDetails = {
  userName: "drchuck", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  logo,
  imageSlider,
  books,
  videos,
  socialMediaLinks,
  openSource,
  courses,
  twitterDetails
};
