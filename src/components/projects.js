import React, { Component  } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black'}}>
                        Github Job protal
                    </CardTitle>
                    <CardText>
                    <h5>Technologies using Github job Api, React hooks: useContext,useReducer.</h5>
                    <p>
                        About:<br/>
                        <li>
                           Developed a UI for searching jobs using React and Github Jobs Api.
                        </li>
                        <br/>
                        <p>
                            Details about how the app was deployed are give below:<br/>
                            <li>Ability to seacrh jobs using location, title, company, skill, full-time role.</li>
                            <li>Ability to default the location to the user's current geolocation.</li>
                            <li>Infinite scroll</li>
                            <li>Light and Dark theme toggle implemented.</li>
                            <li>Responsive design that works for mobile and browser.</li>
                        </p>
                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/githubjobportal"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://awesome-jepsen-4193f3.netlify.app/"  rel="noopener noreferrer" target="_blank">
                            <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black'}}>
                        React Apollo GraphQl Project
                    </CardTitle>
                    <CardText>
                    <h5>Technologies using React, Apollo and GraphQl.</h5>
                    <p>
                        About:<br/>
                        <li>
                           Developed A UI for seeing SpaceX Launches using the SpaceX API.
                        </li>
                        <li>
                            Used React for FrontEnd, GraphQl for Backend where the data is first collected via hitting the SpaceX API and
                            Apollo to connect React with GraphQl.
                        </li>
                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/spacex_demo"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://thawing-savannah-46924.herokuapp.com/"  rel="noopener noreferrer" target="_blank">
                            <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black'}}>
                        Email Feedback Application
                    </CardTitle>
                    <CardText>
                    <h5>Technologies used MongoDB, React, NodeJS, Express, RabbitMQ, ES6 JavaScript, Materialize-CSS.</h5>
                    <p>
                        This project is more of a BackEnd project then a FrontEnd as it involves the following process:<br/>
                        <li>Authentication using google Auth : Using PassportJS and Google-Auth </li>
                        <li>Payment method using StripeJS</li>
                        <li>Email delivery using SendGrid</li>
                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/Email-Notification-system"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://glacial-inlet-35669.herokuapp.com/"  rel="noopener noreferrer" target="_blank">
                        <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
                
            )
        } else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black'}}>
                        Twitter Content Lab
                    </CardTitle>
                    <CardText>
                    <h5>Technologies: ReactJS , Twitter Api.</h5>
                    <p>
                        Details about how the app was deployed are give below:<br/>
                        <li>Create-react-app is used to setup the boilerplate for the app.</li>
                        <li>I have declared the react components via a function.</li>
                        <li>I have used hooks instead of component lifecycles to set the states as it popular among developers and also it reduces the bundle size.</li>
                        <li>I have tried to use ES6 syntax as much as possible.</li>
                        <li>I have used arrow function to bind this vairable with the function as I am using functions instead of class.</li>
                        <li>I have used Css to style my components because not a lot of styling were changing dynamically for this app.</li>
                        <li>Could have made Utils folder to reuse the logic if there were more components. As for now just kept them in the form.js file as they are not required elsewhere.</li>
                        <li>I have placed each component in it own folder and if that components have sub-components they are placed within that folder itself.</li>
                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/TwitterContentLab"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://fathomless-river-42114.herokuapp.com/"  rel="noopener noreferrer" target="_blank">
                        <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
            )
        }
    }
    

    render() {
        return(
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Github Jobs Portal</Tab>
                    <Tab>React Apollo GraphQl Project</Tab>
                    <Tab>Email Feedback Application</Tab>
                    <Tab>Twitter Content Lab</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;   

