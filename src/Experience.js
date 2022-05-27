import React from 'react';
import styles from './Experience.module.css';

function Experience({ experience }) {
    return (
       <div className={styles.border}>
         <h2>{experience.jobTitle}, {experience.companyName}</h2>
         <p>{experience.description}</p>
       </div>
    )
    
}

export default Experience;





