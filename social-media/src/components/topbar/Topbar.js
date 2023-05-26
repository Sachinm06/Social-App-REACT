import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';



function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialMania</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for connections, post or videos " type="text" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <NotificationImportantIcon />
            <span className="topIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/p1.jpeg" alt=""  className="topbarImg"/>
      </div>

    </div>
  )
}

export default Topbar