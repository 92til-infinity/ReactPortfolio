import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../../components/Education/index';
import Experience from '../../components/Experience/index';
import Skills from '../../components/Skills/index';
import Avatar from "./assets/avatar profile.jpg";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={Avatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>J. Scott Glover</h2>
                        <h4 style={{ color: 'grey' }}>Full-Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <h5>Phone</h5>
                        <p>(707) 803-6419</p>
                        <h5>Email</h5>
                        <p>glover.scott92@gmail.com</p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName="Chico State"
                            schoolDescription="B.A. Communication Studies with an option in Public Relations from CSU Chico. Class of 2014; Minor in Political Science from CSU Chico"
                        />

                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName="UC Davis, Code Bootcamp"
                            schoolDescription="Full-Stack Development training by the masters"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startMonth={6}
                            startYear={2015}
                            endMonth="Present"
                            endYear={""}
                            jobName="Current Job"
                            jobDescription="Vehicle Repair Coordinator for Enterprise Holdings of Sacramento, CA"
                        />
                        <Experience
                            startMonth={4}
                            startYear={2015}
                            endMonth={7}
                            endYear={2015}
                            jobDescription="Communications Intern for U.S. House of Representatives in Fairfield, CA "
                        />
                        <Experience
                            startMonth={2}
                            startYear={2015}
                            endMonth={4}
                            endYear={2015}
                            jobDescription="Technical Reruiter for Workbridge Associates"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={100}
                        />
                        <Skills
                            skill="React"
                            progress={100}
                        />
                        <Skills
                            skill="Bootstrap"
                            progress={100}
                        />
                        <Skills
                            skill="NodeJs"
                            progress={100}
                        />
                        <Skills
                            skill="Express"
                            progress={100}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={100}
                        />
                        <Skills
                            skill="MySQL"
                            progress={100}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;