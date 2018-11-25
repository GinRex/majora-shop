import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

class Comment extends Component {
  render() {
    const { classes, comment } = this.props;
    console.log(comment)
    return (
      <div>
        <div className={classes.row}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={2}>
              <Avatar
                alt=""
                src={comment && comment.user.avatar ? comment.user.avatar : 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg'}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="h5" component="h5">{comment && comment.user.name ? comment.user.name : 'Username'}</Typography>
              <Typography variant="h5" component="h5">{comment && comment.comment ? comment.comment : 'test comment'}</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};


export default withStyles(styles)(Comment);
