const Profile = (props) => {

  const profileList = props.peopleProfile.map((person) => {
    const imgUrl = person.picture;
    return <li>
          {<img src={imgUrl} alt="images" />}
          <div>
            {person.id}
            <span>
              {person.title}. {person.firstName} {person.lastName}
            </span>
          </div>
        </li>
  });


  return <div className = 'list-container'>
    <ul>
      {profileList}
    </ul>
    
    </div>;
};

export default Profile;
