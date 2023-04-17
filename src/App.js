import "./App.css";
import Profile from "./Profile";
import Input from "./Input";
import { profileList } from "./Data";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState(profileList);

  const getInputValue = (input) => {
    let users = [...profileList];

    const newProfile = users.filter((user) =>
      user.firstName.toLowerCase().startsWith(input.toLowerCase()) ||
      user.lastName.toLowerCase().startsWith(input.toLowerCase())
    );
    setProfile(newProfile);
  };

  return (
    <div className="App">
      <Input getInputValue={getInputValue} />
      <Profile peopleProfile={profile} />
    </div>
  );
}

export default App;
