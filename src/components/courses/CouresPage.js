import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props);

    this.state = {
      course: {
        title: ''
      }
    };
    // in es6 class, we must bind our methods manually.
    // this keyword context is the input on render(), thus undefined
    // explicitly bind this keyword to the class
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave (event) {
    event.preventDefault();
    // this.props.createCourse(this.state.course);
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map((course, index) => {
          return (
            <div key={index}>
              {course.title}
            </div>
          );
        })}
        <h2>Add Courses</h2>
        <form>
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.onTitleChange} value={this.state.course.title} />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary" value="Save" onClick={this.onClickSave}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired // replaces createCourse
};

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses // comes from reducers/index.js
  };
}

function mapDispatchToProps (dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

