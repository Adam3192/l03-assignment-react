import React from 'react';

class Experience extends React.Component {
 render() {
  let { experience } = this.props;
      return (
       <div>
         <h2>{experience.jobTitle}, {experience.companyName}</h2>
         <p>{experience.description}</p>
       </div>
      )
    }
}

export default Experience;


