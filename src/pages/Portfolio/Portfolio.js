import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div><h1>This is React</h1>
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                            <CardText>
                                Study Check
                        </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/92til-infinity/Project3.333">GitHub</Button>
                                <Button colored href="http://studycheck.com">Heroku</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                            <CardText>
                                Google Search
                        </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/92til-infinity/Google-Books-Search">GitHub</Button>
                                <Button colored href="https://damp-caverns-98963.herokuapp.com/">Heroku</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Javascript</h1>
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                            <CardText>
                                Happy Hour Project
                                    </CardText>
                            <CardActions border>
                                <Button colored href="https://92til-infinity.github.io/UCDBC-HappyHour/">GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                            <CardText>
                                2Play Project
                                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/92til-infinity/Project2x4">GitHub</Button>

                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <span>

                        </span>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                            <CardText>
                                Fitness Tracker
                                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/92til-infinity/Workout-Tracker-HW">GitHub</Button>

                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                            <CardText>
                                Online-Offline-Budget-Trackers
                                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/92til-infinity/Online-Offline-Budget-Trackers">GitHub</Button>

                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <br></br>


                    </div>
                </div>

            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Python</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Ruby/ On Rails</h1></div>
            )
        }

    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Python</Tab>
                    <Tab>Ruby/ On Rails</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;