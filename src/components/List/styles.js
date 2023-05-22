import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {  
    fontFamily:'Trebuchet MS',
    marginTop: '6px',
    marginLeft: '5px',
    padding: '15px',
    border: '1px solid rgb(0, 0, 0, 0.01)',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgb(0, 0, 0, 0.2)',
  },
  list: {
    height:'63vh', overflow: 'scroll', overflowX: 'hidden', marginTop: '15px',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      webkitBoxShadow: '0px 0px 6px rgba(0,0,0,0.2)',
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '5px',
      backgroundColor: 'rgba(54, 19, 129, 1)',
    }
  },
}));
