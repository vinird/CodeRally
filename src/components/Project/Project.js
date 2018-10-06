import React, { Component } from 'react';
import './Project.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppService from '../../services/AppService';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  componentDidMount() {
    this.getProjectData();
  }

  async getProjectData() {
    const { match } = this.props;
    const { name } = match.params;
    const project = await AppService.getProjectByName(name);
    this.setState({ project });
  }

  render() {
    const { project } = this.state;
    const bull = <span className="bullet">• </span>;

    return (
      <Grid container spacing={0}>
        <Grid item container xs={12} spacing={0}>
          <Card className="card">
            <CardContent>
              <Typography className="title" variant="headline" component="h1">
                {project ? project.name : ''}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Description: </b>
                {project ? project.description : ''}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Tech Stack: </b>
                {project ? project.tech : ''}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Website: </b>
                {project && project.link ? <a href={project.link}>{project.link}</a> : 'none'}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Chat Link: </b>
                {project && project.chatLink ? <a href={project.chatLink}>{project.chatLink}</a> : 'none'}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Repo Link: </b>
                {project && project.repoLink ? <a href={project.repoLink}>{project.repoLink}</a> : 'none'}
              </Typography>
              <Typography className="description" component="p">
                {bull}
                <b>Looking for partners: </b>
                {project ? project.partners : ''}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
