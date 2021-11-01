import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import {
  HTMLCourses,
  CSSCourses,
  JSCourses
} from '../data/courses';
import Course from './courses/Course';

const Courses = ({match}) => (
  <BrowserRouter>
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2> 
        <ul className="course-nav">
          <li><NavLink to={`${match.url}/HTML`}>HTML</NavLink></li>
          <li><NavLink to={`${match.url}/CSS`}>CSS</NavLink></li>
          <li><NavLink to={`${match.url}/JavaScript`}>JavaScript</NavLink></li>
        </ul>
      </div>
      <Route exact path={`${match.path}`} render={ () => <Redirect to={`${match.url}/html`} /> } />
      <Route path={`${match.path}/CSS`} render={ () => <CourseContainer data={CSSCourses} /> } />
      <Route path={`${match.path}/HTML`} render={ () => <CourseContainer data={HTMLCourses} /> } />
      <Route path={`${match.path}/JavaScript`} render={ () => <CourseContainer data={JSCourses} /> } />
    </div>
  </BrowserRouter>
);

export default Courses;