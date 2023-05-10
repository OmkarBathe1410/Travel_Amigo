import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 10px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', textAlign: 'end', fontFamily: 'Trebuchet MS', color: '#060071',
  },
  spacing: {
    marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'Trebuchet MS', color: '#060071',
  },
  openBtn: {
    fontFamily:'Trebuchet MS', width: 130, backgroundColor: 'rgba(108, 39, 255, 1)', color:'#ffffff',
    '&:hover':{backgroundColor:'rgba(54, 19, 129, 1)'}
  }
}));
