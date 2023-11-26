import './sidebar.css'
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Users } from '../../dummyData'
import CloseFriend from '../closefriend/CloseFriend';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <FeedIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <ChatIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <OndemandVideoIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <GroupIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <BookIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <WorkIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <EventIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <SchoolIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
    </div>
  </div>
  )
}

export default Sidebar