import React, { Component  } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
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
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
                
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png) center / cover'}}>
                        Restaurant Website
                    </CardTitle>
                    <CardText>
                    <h5>Technologies: Angular4, NodeJS, Express, Typescript, Materialize-CSS, Docker.</h5>
                    <p>
                        Details about how the app was deployed are give below:<br/>
                        <li>Used Docker to create a container and then deploy it on heroku. To run the docker image on you own local computer run the following commands</li>
                        <ul>
                            <li>docker pull anmol09k/angular:v1 </li>
                            <li>docker run -p 3000:3000 anmol09k/angular:v1 </li>
                        </ul>
                        <li>You can access the docker file via clicking on the "GitHub-JsonServer" link.</li>
                        <li>Used Service oriented architecture to design the system.</li>
                        <span style={{fontWeight: 'bold'}}>Note: The Live Demo is unable to run the full app (CORS -production error) as it involves running a json server as the app doesnt have a backend. But the app runs properly on local computer which can be done by running the above docker commands.</span>

                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/Restaurant-Website"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://github.com/anmol091192/jsonserver"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub-JsonServer</Button>
                        </a>
                        <a href="https://thawing-woodland-35388.herokuapp.com/"  rel="noopener noreferrer" target="_blank">
                        <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(http://pluspng.com/img-png/airbnb-logo-png-png-ico-512.png) center / cover'}}>
                        AirBnb Prototype
                    </CardTitle>
                    <CardText>
                    <h5>Technologies using Angular , NodeJS, Express, MongoDB, RabbitMQ, Redis.</h5>
                    <p>
                        About:<br/>
                        <li>
                            Developing a distributed 3-tier application using REST architecture to offer all functions of Airbnb
                            for renting homes.
                        </li>
                        <li>
                            Built RESTful services using NodeJS and RabbitMQ.
                        </li>
                    </p>
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/anmol091192/Airbnb_prototype"  rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }
    

    render() {
        return(
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>In Production</Tab>
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

