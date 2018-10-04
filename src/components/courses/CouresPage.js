import React from 'react';

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
    alert(`Saving ${this.state.course.title}`);
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
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

export default CoursesPage;

