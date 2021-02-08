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
                        <div style={{textAlign: 'center'}} className="circular--portrait">
                            <img 
                                src={require('../assests/anmol2.png')}
                                alt="avatar"
                            />
                        </div>
                            <h2 style={{paddingTop: '2em'}}>Anmol Khandekar</h2>
                            <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        I am a software developer working at Grainger. I have done my masters in Computer Science from Texas A&M University- Kingsville.I have also worked on many personal projects apart from Industrial Experience which is around 2 years using web-based technologies like NodeJs ,React , Angular 4. I have also done a thesis related to Java called "Extending SOOT in Visualization of Control Flow Graphs along with Data Flow".
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1511 Westminster Dr, Naperville, IL - 60563</p>
                        <h5>Phone</h5>
                        <p>(646) 520-8122</p>
                        <h5>Email</h5>
                        <p>anmol.khandekar92@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Experience</h2>
                        <Experience 
                            startYear="August 2019"
                            endYear="Present"
                            jobName="Software Developer"
                            jobDescription={
                            <div>
                                <h4>Grainger</h4>
                                <p>Technologies: React, Node, Express, HandleBars, Svelte.</p>
                                <p>Working on migrating from single page application to a component based app using React, handlebars and jQuery.<br/>
                                Working on middleware for rendering frontend which uses node and express.<br/>
                                Working on Svelte to develop a debugging tool for Grainger.</p>
                            </div>
                            }
                        
                        />
                        <Experience 
                            startYear="May 2019"
                            endYear="August 2019"
                            jobName="Software Developer"
                            jobDescription={
                            <div>
                                <h4>Tempus</h4>
                                <p>Technologies: React, React Native, Redux, NestJs</p>
                                <p>Worked on creating frontend for making orders and viewing status of the order using react and redux.<br/>
                                Worked on creating the frontend for mobile for same functionality as above using react native and redux.<br/>
                                Worked on generating report based on the orders received using react and redux.<br/>
                                Worked on creating new endpoints for retrieving specific data using NestJs.</p>
                            </div>
                            }
                        
                        />
                        <Experience 
                            startYear="March 2019"
                            endYear="May 2019"
                            jobName="Software Developer"
                            jobDescription={
                            <div>
                                <h4>Egen Solutions</h4>
                                <p>Technologies: ReactJS, Redux, NodeJS, Express, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Material-UI.</p>
                                <p>Created Frontend using ReactJS, Redux and Material-UI.<br/>
                                Worked on integrating the frontend and backend using Express/NodeJS and MongoDB.<br/>
                                Used hls.js to live stream security camera footage on frontend.<br/>
                                Created frontend to operate these security cameras.<br/>
                                Developed the project from scratch including deciding the technology stack necessary for this type of project.<br/>
                                Also worked on creating the backend and deploying it using Docker, Kubernetes, AWS.</p>
                            </div>
                            }
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

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
                        <h2>Skills</h2>

                        <Skills 
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={70}
                        />
                        <Skills 
                            skill="React"
                            progress={70}
                        />
                        <Skills 
                            skill="GraphQL"
                            progress={40}
                        />
                        <Skills 
                            skill="VueJS"
                            progress={40}
                        />
                        <Skills 
                            skill="Svelte"
                            progress={40}
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