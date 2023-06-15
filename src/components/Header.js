import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {Link,NavLink} from 'react-router-dom';

const Header = () => {

  const navStyleLink = ({isActive})=>{
    return{
      textDecoration:isActive ? "none" : "none",
      color:isActive?"red":"white"
    }
  }

  return (
    <div className="header">
      <div className="logom">
        <div className="logo">
         <Link to={'/'}> <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Color-Netflix-Logo.jpg"
            alt=""
          /></Link>
        </div>
        <div className="list">
          <ul>
            <NavLink style={navStyleLink} to={'/'}><li>Home</li></NavLink>
            <NavLink style={navStyleLink} to={'/movie'}><li>Movies</li></NavLink>
            <NavLink style={navStyleLink} to={'/tvshows'}><li>Tv Shows</li></NavLink>
            <NavLink style={navStyleLink} to={'/news'}><li>News</li></NavLink>
          </ul>
        </div>
      </div>
    <div className="rightside">
      <Paper
      component="form"
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 280,backgroundColor:"transparent",border:"1px solid rgb(28, 28, 28)"}}
     >
      <InputBase
        sx={{ ml: 1, flex: 1,color:"white" }}
        placeholder="Search here"
        inputProps={{ 'aria-label': 'Search Here' }}
      />
      <IconButton type="button" sx={{ p: '10px',color:"white" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <div className='addMovie'>
    <AddIcon
      sx={{ 
        cursor: "pointer",
        fontSize: 30
      }}
    />
    </div>
   <Link style={{textDecoration: "none"}} to={"/login"}><button className='login'>Login</button></Link>
      </div>
      </div>
  );
};

export default Header;
