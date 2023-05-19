import { React, useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from "@material-ui/core";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdCategory, MdOutlineAttractions } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useSytles from './styles.js';

const List = ({ getPlaces, childClicked, isLoading, type, setType, rating, setRating, weatherData }) => {
  const classes = useSytles();  
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(getPlaces?.length).fill().map((_, i) => elRefs[i] || createRef(i));

    setElRefs(refs);
  }, [getPlaces]);


  return (
    <div className={classes.container}>
      <Typography variant="h5" style={{ fontFamily: 'Trebuchet MS', color: '#7149C6' }}>Restaurants and Attractions around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="4rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel><MdCategory/> Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants"><IoRestaurantOutline style={{marginRight: "2px"}}/> Restaurants</MenuItem>
              <MenuItem value="attractions"><MdOutlineAttractions style={{marginRight: "2px"}}/> Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel><FiBarChart2/> Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}><AiOutlineStar/> All</MenuItem>
              <MenuItem value={3}><AiOutlineStar/> Above 3.0</MenuItem>
              <MenuItem value={4}><AiOutlineStar/> Above 4.0</MenuItem>
              <MenuItem value={4.5}><AiOutlineStar/> Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {getPlaces?.map((place, index) => (
              <Grid
                ref={elRefs[index]}
                item key={index}
                xs={12} >
                <PlaceDetails
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                  getPlace={place}
                  weatherData={weatherData}
                />
              </Grid>
            ))}
          </Grid>
        </>)}
    </div>
  );
};

export default List;