import React from 'react';
import Projects from '../Projects';
import learnMyWayImg from '../../images/learn-myway.png';
import burgEComImg from '../../images/burg-comm.png';
import getaJobImg from '../../images/getajob.PNG';
import emTrackImg from '../../images/em-track.png';
import insomniaImg from '../../images/insomnia.PNG';
import teamGenImg from '../../images/tem-gen.png';
import codeImg from '../../images/codequiz.png';

const projects = [
  {
    id: 1,
    title: 'Burger E-comm',
    description: 'Team built Project, using mern stack and graphql',
    img: burgEComImg,
    git: 'https://github.com/hannahhue/will-b-hangry',
    site: 'https://will-b-hangry.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Get A Job',
    description: 'Team built Project, using express network and find a job!',
    img: getaJobImg,
    git: 'https://github.com/ramosw1993/Get-A-Job',
    site: 'https://get-a-job.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Learn My Way',
    description:
      "Team built Project, using third party API's to create an application that can teach you about anything!",
    img: learnMyWayImg,
    git: 'https://github.com/abedhasan79/Learning-My-Way',
    site: 'https://abedhasan79.github.io/Learning-My-Way/',
  },
  {
    id: 4,
    title: 'Employee Tracker',
    description:
      'Keep track of employees and Update them through your terminal!',
    img: emTrackImg,
    git: 'https://github.com/hannahhue/employee-tracker',
    site: '',
  },
  {
    id: 5,
    title: 'E-Commerce',
    description: 'Mock of a real E-commerce Back end',
    img: insomniaImg,
    git: 'https://github.com/hannahhue/E-Commerce-Back-End',
    site: '',
  },
  {
    id: 6,
    title: 'Team Generator',
    description:
      'Answer the terminal propts and create a HTML file that will produce a team lineup!',
    img: teamGenImg,
    git: 'https://github.com/hannahhue/team-generator',
    site: '',
  },
  {
    id: 7,
    title: 'Code Quiz',
    description: 'Test your skills with a timed quiz all about coding!',
    img: codeImg,
    git: 'https://github.com/hannahhue/code-quiz',
    site: 'https://hannahhue.github.io/code-quiz/',
  },
];

export default function Portfolio() {
  return <Projects projects={projects} />;
}
