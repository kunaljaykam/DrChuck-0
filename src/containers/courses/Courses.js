import React from "react";
import "./Courses.scss";
import {courses} from "../../DrChuck";
import {Fade} from "react-reveal";

export default function Courses() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }


  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="courses">
        <div>
          <h1 className="container-heading">{courses.title}</h1>


          <div className="courses-container">
            {courses.courses.map((course, i) => {
              return (
                <div key={i} className="course-card">
                  {course.image ? (
                    <div className="course-image">
                      <img
                        src={course.image}
                        alt={course.courseName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="course-detail">
                    <h5 className="course-name">{course.courseName}</h5>
                    
                    {course.footerLink ? (
                      <div className="course-card-footer">
                        {course.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className=""
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}


