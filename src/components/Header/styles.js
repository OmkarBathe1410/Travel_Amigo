import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    color: '#E7D9EA',
    fontFamily:'Trebuchet MS',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.20) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 1.5), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    fontFamily:'Trebuchet MS',
    color: '#E7D9EA',
  },
  inputInput: {
    fontFamily:'Trebuchet MS',
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));

