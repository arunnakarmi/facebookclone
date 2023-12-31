import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
const Rightbar = () => {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="brithdayContainer">
        <img src="assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Kailas shrestha</b> and <b>3 others friends</b> have a birthday today
        </span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    </div>
  </div>
  )
}

export default Rightbar