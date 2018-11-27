import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';
import Comment from '../Comment/Comment';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ReactDOM from 'react-dom';


//data
import data from '../../data.js';

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
  price: '250.000 VND',
  comments: [
    { user: { name: 'nanami', avatar: 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg' }, content: 'this game is worth the price' },
    { user: { name: 'nanami', avatar: 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg' }, content: 'For all the old D&D players out there: Darkest Dungeon is a digitally enhanced and massively prolonged interpretation of Tomb of Horrors. For anyone else: Darkest Dungeon is a soulcrushingly deadly dungeon crawler with absolutely fantastic gameplay, depressing art design, massive content and very polished turn-based party-of-four battles. One of the most (not) fun games I have played in a long while. Prepare to die a lot. Prepare to lose your most favourite characters every few missions. Prepare to watch your characters lose their minds. Prepare to abandon quests regularly. Prepare to suffer chronically from a lack of supplies, lack of equipment, lack of torches and pretty much lack of anything you would ever need to succeed in your missions. This game is pure bliss and at the same time the most depressing piece of software I have ever laid eyes upon. I pull my hat towards the developers for making this masterpiece.' },
    { user: { name: 'nanami', avatar: 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg' }, content: 'this game is worth the price' },
    { user: { name: 'nanami', avatar: 'https://myanimelist.cdn-dena.com/images/characters/14/310999.jpg' }, content: "I noticed a lot of reviews citing the game as ‘too hard’ or ‘all about rng’ and I can tell you exactly why: those players were expecting a generic dungeon crawler where you can kerbstomp every boss with high level and super gear, and the managerial risk mitigation required in Darkest Dungeon (DD) is foreign and alien to them. All the RPG nowadays features the player as this, omnipotent chosen one who is out to save the world single handly, DD subverts that 100%. Your team sports heros with mortal characteristics of strength and weakness, vices and fears that is nothing like the “chosen one out to save the world”. That is fine, we have seen that in lores before but here is the kicker - You got to manage those flaws in DD! In fact, if you have worked in a corporate environment DD will be a piece of cake for you, since it is all about risk assessment and human resource (HR) management. What about the rng? Let's cover the risk assessment: to put it simply, you look at the LIKELIHOOD (rng) and CONSEQUENCE of a RISK to get a risk score, and you assign CONTROLS to reduce the two aforementioned factors. Say if my vestel is highly prone to stress in dark due to quirks, we have “RISK” of her getting psyched out and become incapable to heal. The “CONSEQUENCE” of that would be wiping and losing the juicy trinkets your squad has (catastrophic) and the chance of me having no torch may occur in long dungeons (possible). So now, the typical gamers have two response : Vestel heal is weak, or negative quirks are too strong. They look at problems NOT solutions. To a thinking gamer, a CONTROL will be applied. I can reduce the likelihood (rng) by -Curing the quirk (if time permits) -Bring more torches -Have a man of arms to guard her -Have ranged damage that can wipe out stressors on round 1, IE dogs and highwayman To reduce the consequence by -Strict retreat protocol- if the healer is not coping, escape combat -Have a crusader that can reduce stress -Have stress reduction camping skills -Have self heal on dps to reduce healer workload Now we have applied control, we have reduced the likelihood (rng) of healer getting psyched out from possible to unlikely level. And even if the healer does get psyched out we have controls to reduce the consequences from catastrophic to minor (if they retreat they go to town have a break no biggie). It is understandable that risk management skill do not exist in the immature adults or children who have been fed with hero complex and unable to accept compromise, it is easier to just blame it on rng. While the game does have certain shortfalls like slow combat animation, overall it has pioneered a new type of dungeon crawler that's a fresh breeze compared to the old and outdated ‘grind to max level and save the world’ model. In Conclusion: Not saying you have to like the game or agree to the review, but this is just not the typical game where god gear will win you 100% of the games, and if challenging games isn't your thing, you may need to reconsider purchasing it. However if you do enjoy real challenges like me, you are in for helluva treat!" }
  ],
  tags: [
    'bookmarks', 'built-in', 'hints', 'ClubFloyd', 'transcript', 'collaboration commercial', 'cover art', 'CYOA', 'desktop', 'dragon', 'Eamon', 'fantasy', 'female protagonist', 'first person', 'foreign language', 'gender-neutral', 'protagonist', 'german', 'graphics', 'horror', 'humor']
}

class GameDetail extends Component {
  state = {
    images: sample.images,
    id: null,
    age: '',
    name: 'hai',
    labelWidth: 0,
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.setState({ id: id });
    sample.images.unshift({ original: data[id].image, thumbnail: data[id].thumbnail })
    console.log(id)
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  

  render() {
    console.log(data);
    function handleDelete() {
      alert('You clicked the delete icon.'); // eslint-disable-line no-alert
    }



    function handleClick() {
      alert('You clicked the Chip.'); // eslint-disable-line no-alert
    }
    const { classes } = this.props;
    const { reference, producer, year_release, price, thumbnail, image, description, stock } = this.state.id ? data[this.state.id] : this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4" component="h3">
            {reference ? reference : sample.title}
          </Typography>
          <br />
          <br />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={8}>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ImageGallery items={image ? sample.images : sample.images} useTranslate3D={true} />
              </div>
              <br />
              <br />
              <Card className={classes.card}>
                <Typography variant="h6" component="p">
                  {description ? description : sample.description}
                </Typography>
                <br />
              </Card>
              <br/>
              <Typography variant="h4" component="h3">Reviews</Typography><br /><br />
              {Object.keys(sample.comments).map((key, value) =>
                <Comment comment={sample.comments[key]} />
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <Typography variant="h4" component="h3" style={{margin: 10}}>
                  {price ? price : sample.price} $
                </Typography>
                <Chip
                  label={producer}
                  className={classes.chip}
                  component="a"
                  color="primary"
                  // href="#chip"
                  clickable
                />
                <Chip
                  label={year_release}
                  className={classes.chip}
                  component="a"
                  color="secondary"
                  // href="#chip"
                  clickable
                />

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-age-native-simple"
                  >
                    Quantity
          </InputLabel>
                  <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={
                      <OutlinedInput
                        name="Quantity"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                      />
                    }
                  >
                    <option value="" />
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    {}
                  </Select>
                  
                </FormControl><br/>
                <Typography variant="h5" component="h2" style={{margin: 10}}>{stock} left in stock</Typography>
                <br />
                <Button variant="contained" color="secondary" className={classes.button}>
                  Add to cart
        <ShoppingCart className={classes.rightIcon} />

                </Button>
                <br />
                <Button variant="contained" color="primary" className={classes.button}>
                  Add to WhishList
        <Icon className={classes.rightIcon}>send</Icon>
                </Button>
                <br /><br />
                <Card className={classes.chipCard} >
                <div className={classes.chipContainer}>
                  {Object.keys(sample.tags).map((key, value) => (
                    <Chip
                      label={sample.tags[key]}
                      className={classes.chip}
                      component="a"
                      color={key % 2 == 0 ? "primary" : "secondary"}
                      // href="#chip"
                      clickable
                    />
                  ))}

                </div>
                </Card>
              </Card>
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
  card: {
    maxWidth: "100%",
    fontSize: '1rem',
    // margin: '10px',
    backgroundColor: '#61bafb30',
    padding: '20px'
  },
  chipCard: {
    maxWidth: "100%",
    fontSize: '1rem',
    // margin: '10px',
    backgroundColor: '#0b0b0bc7',
    // padding: '20px'
  },
  button: {
    margin: darkBaseTheme.spacing.unit,
    width: "100%"
  },
  leftIcon: {
    marginRight: darkBaseTheme.spacing.unit,
  },
  rightIcon: {
    marginLeft: darkBaseTheme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  chip: {
    margin: darkBaseTheme.spacing.unit,
    fontSize: '1rem'
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: darkBaseTheme.spacing.unit,
    minWidth: "100%",
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  selectEmpty: {
    marginTop: darkBaseTheme.spacing.unit * 2,
  },
});

export default withStyles(styles)(GameDetail);
