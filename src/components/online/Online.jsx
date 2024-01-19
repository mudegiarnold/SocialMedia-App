import "./online.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} alt=""/>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
}