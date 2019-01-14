import React, { Component  } from 'react';
import { Grid, Cell ,Button} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div className="aboutme-body"> 
                <Grid className="aboutme-grid">
                    <Cell col={12}>
                        <h2>About Me</h2>
                        <p style={{ width: '75%' , margin: 'auto', paddingTop: '1em'}}>
                        If you want to know more about me please do contact me via refering to the contact page.<br/>
                        And I have made my Protofolio using React and React-MDL, you can click on the github link to see the code.
                        </p>
                        <a href="https://github.com/anmol091192/myProtfolio"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default AboutMe;