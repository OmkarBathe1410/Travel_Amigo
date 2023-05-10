import {React} from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles.js";

const PlaceDetails = ({ getPlace, selected, refProp }) => {
  if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const classes = useStyles();  
    return (
      <Card elevation={6} style={{ borderRadius: '7px' }}>
        <CardMedia
          style={{ height: 300 }}
          image={getPlace.photo ? getPlace.photo.images.large.url : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'}
          title={getPlace.name}
        />
        <CardContent>
          <Typography 
          gutterBottom variant="h5" style={{ fontFamily: 'Trebuchet MS', fontWeight: '600' }}>{getPlace.name}</Typography>
          <Box style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'end' }}>
            <Rating value={Number(getPlace.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1" style={{ color: '#060071', fontFamily: 'Trebuchet MS' }}>Out of {getPlace.num_reviews} reviews</Typography>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'end' }}>
            <Typography variant="subtitle1" style={{ fontFamily: 'Trebuchet MS' }}>Price</Typography>
            <Typography gutterBottom variant="subtitle1" style={{ color: '#060071', fontFamily: 'Trebuchet MS' }}>{getPlace.price_level ? getPlace.price_level : 'Check it online'}</Typography>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'end' }}>
            <Typography variant="subtitle1" style={{ fontFamily: 'Trebuchet MS' }}>Ranking</Typography>
            <Typography gutterBottom variant="subtitle1" style={{ color: '#060071', fontFamily: 'Trebuchet MS' }}>{getPlace.ranking ? getPlace.ranking : 'Check it online'}</Typography>
          </Box>
          {getPlace?.awards?.map((award) => (
            <Box my={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="#060071">{award.display_name}</Typography>
            </Box>
          ))}
          {getPlace?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))
          }
          {getPlace?.address && (
            <Typography gutterBottom variant="subtitle2" className={classes.subtitle}>
              <RoomIcon style={{ color: '#000000' }} />{getPlace.address}
            </Typography>
          )
          }
          {getPlace?.phone && (
            <Typography gutterBottom variant="subtitle2" className={classes.spacing}>
              <PhoneIcon style={{ color: '#000000' }} />{getPlace.phone}
            </Typography>
          )
          }
          <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button size="small" className={classes.openBtn} onClick={() => window.open(getPlace.web_url, '_blank')}>
              Trip Advisor
            </Button>
            {
              getPlace.website ? (
                <Button size="small" className={classes.openBtn} onClick={() => window.open(getPlace.website, '_blank')}>
                  Own Website
                </Button>
              ) : (
                <Button size="small" disabled="true">
                  Own Website
                </Button>
              )
            }
          </CardActions>
        </CardContent>
      </Card>
    );
};

export default PlaceDetails;