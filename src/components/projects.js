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
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is MongoDB</h1>
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
                    <Tab>MongoDB</Tab>
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