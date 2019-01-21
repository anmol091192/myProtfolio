import React, { Component  } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="circular--portrait" style={{marginTop:'3%'}}>
                        <img 
                            src={require('../assests/anmol2.png')}
                            alt="avatar"
                        />
                    </div>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>React | Next | NodeJS | Express | MongoDB | HTML/CSS | JavaScript | Angular</p>
                            <div className="social-links">
                            {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/anmol09k/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                            {/* Github */}
                            <a href="https://github.com/anmol091192" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
               </Grid>
            </div>
        );
    }
}

export default Landing;