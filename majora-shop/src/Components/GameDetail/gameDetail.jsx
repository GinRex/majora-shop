import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

const sample = {
  title: 'Saya no Uta',
  description: "Fuminori Sakisaka has a traffic accident which kills his parents and leaves him heavily injured. When he has a brain surgery to save his life, his perception of the world changes: everything he sees becomes blood and guts, people's looks and voices seem like monsters, and food that normally appeals to him tastes disgusting.\nAs he contemplates suicide in the hospital, Fuminori meets a beautiful girl among the flesh-covered walls. She introduces herself as Saya, and is apparently looking for her father. Fuminori does not want to be separated from Saya, and asks her to live with him. She agrees.",
  images: [
    { original: 'https://s.vndb.org/sf/64/264.jpg', thumbnail: 'https://s.vndb.org/sf/64/264.jpg' },
    { original: 'https://s.vndb.org/sf/66/266.jpg', thumbnail: 'https://s.vndb.org/sf/66/266.jpg' },
    { original: 'https://s.vndb.org/sf/62/1062.jpg', thumbnail: 'https://s.vndb.org/sf/62/1062.jpg' },
    { original: 'https://s.vndb.org/sf/64/1064.jpg', thumbnail: 'https://s.vndb.org/sf/64/1064.jpg' },
  ],
  price: '250000',

}

class GameDetail extends Component {
  state = {
    images: sample.images
  }
  render() {
    const { classes, title, images, description, price } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4" component="h3">
            {title ? title : sample.title}
          </Typography>
          <br />
          <br />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={9}>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ImageGallery items={images ? images : sample.images} useTranslate3D={true} />
              </div>
              <br />
              <br />
              <Typography variant="h6" component="p">
                {description ? description : sample.description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h4" component="h3">
                {price ? price : sample.price}
              </Typography>
            </Grid>

          </Grid>
        </Paper>
      </div>
    );
  }
}


const styles = darkBaseTheme => ({
  root: {
    ...darkBaseTheme.mixins.gutters(),
    paddingTop: darkBaseTheme.spacing.unit * 2,
    paddingBottom: darkBaseTheme.spacing.unit * 2,
    flexGrow: 1,
  },
});

export default withStyles(styles)(GameDetail);
