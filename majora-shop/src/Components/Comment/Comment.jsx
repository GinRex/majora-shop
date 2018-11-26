import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import _ from 'lodash';


class Comment extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes, comment } = this.props;
    console.log(comment)
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} src={comment.user.avatar} >
                R
            </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={comment.user.name}
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography component="p">
              {comment && comment.content ? _.truncate(comment.content, {'length': 405}) : null}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {comment.content.length > 405 ? <ExpandMoreIcon /> : null}
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {comment && comment.content ? comment.content : null}
              </Typography>
            </CardContent>
          </Collapse>
          {/* <div className={classes.row}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={1}>
              <Avatar
                alt=""
                src={comment && comment.user.avatar ? comment.user.avatar : 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg'}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </Grid>
            <Grid item xs={12} sm={11}>
              <Typography variant="h5" component="h5">{comment && comment.user.name ? comment.user.name : 'Username'}</Typography>
              <Typography variant="h5" component="h5">{comment && comment.comment ? comment.comment : 'test comment'}</Typography>
            </Grid>
          </Grid>
        </div> */}
        </Card>
      </div>
    );
  }
}

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  card: {
    maxWidth: "100%",
    fontSize: '1rem',
    margin: '10px',
    backgroundColor:'#61bafb30'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    margin: 10,
    width: '80px',
    height: '80px'
  }
});


export default withStyles(styles)(Comment);
