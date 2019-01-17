import React, { Component  } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={require('../assests/anmol.jpg')}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Anmol Khandekar</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Having Graduated in May 2018 from Texas A&M University Kingsville doing Masters in Computer Science, I have a keen interest in Web development technologies and am looking for roles like Front-End and Back-End development, and Full-Stack development positions. I have also worked on many personal projects apart from Industrial Experience which I have around 2 years using these web-based technologies. Also having done a thesis related to Java called "Extending SOOT in Visualization of Control Flow Graphs along with Data Flow" I am also interested in Java related positions.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>201 Soth 4th Street, CA - 95112</p>
                        <h5>Phone</h5>
                        <p>(646) 520-8122</p>
                        <h5>Email</h5>
                        <p>anmol.khandekar92@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                         startYear={2016}
                         endYear={2018}
                         schoolName="Texas A&M University - Kingsville"
                         schoolDescription={
                         <div>
                            <h6>Master of Science - Computer Science</h6>
                            <h6>GPA: 3.9/4</h6>
                            <h6>Graduation Date: May 2018</h6>
                         </div>
                         }
                        />
                        <Education 
                         startYear={2010}
                         endYear={2014}
                         schoolName="International School of Buisness & Media"
                         schoolDescription={
                            <div>
                               <h6>Bachelor of Engineering - Information Technology</h6>
                               <h6>GPA: 7.2/10</h6>
                               <h6>Graduation Date: May 2014</h6>
                            </div>
                            }
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear="Jan 2015"
                            endYear="July 2015"
                            jobName="Web Developer"
                            jobDescription={
                            <div>
                            <h4>NearFox ( Zip Infosolutions Pvt )</h4>
                            <p>Technologies: AWS, Google Cloud, WordPress, Php, python, Apache, Nginx.</p>
                            <p>Created Cronjobs using shell scripting for server management.<br/>
                            Migrated server form Apache to Nginx to increase responsiveness of the website under load.<br/>
                            Made Web Crawlers using PHP and Python for information gathering from different news and event websites.</p>
                            </div>
                            }
                        
                        />
                        <Experience 
                            startYear="Jan 2014"
                            endYear="Dec 2014"
                            jobName="Web Developer"
                            jobDescription={
                            <div>
                            <h4>Gyaat Inc.</h4>
                            <p>Technologies: Bootstrap, JavaScript, MySQL, Linux, Apache, Php, Ajax.</p>
                            <p>Built a website to provide educational information.<br/>
                            Optimized database by eliminating redundancy.</p>
                            </div>
                            }
                        
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills 
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={70}
                        />
                        <Skills 
                            skill="React"
                            progress={60}
                        />
                        <Skills 
                            skill="Angular4"
                            progress={50}
                        />
                        <Skills 
                            skill="NextJS"
                            progress={50}
                        />
                        <Skills 
                            skill="Java"
                            progress={90}
                        />
                         <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Download Resume</h2>
                        <a href={require('../assests/Resume.pdf')} download>Click to Download</a>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;  