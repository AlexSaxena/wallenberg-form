import { useState } from "react";

const ProfileSelection = () => {
  const [selectedProfiles, setSelectedProfiles] = useState({
    first: "",
    second: "",
  });
  const profiles = ["Idrott", "Språk", "Äventyr", "Lek"];

  const handleProfileChange = (event, step) => {
    setSelectedProfiles({
      ...selectedProfiles,
      [step]: event.target.value,
    });
  };

  const getOptions = (step) => {
    return profiles.filter(
      (profile) =>
        !Object.values(selectedProfiles).includes(profile) ||
        selectedProfiles[step] === profile
    );
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        Som profilval vill eleven välja:
      </label>

      <select
        id="profile_one"
        name="profile_one"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => handleProfileChange(e, "first")}
        value={selectedProfiles.first}
      >
        <option value="">Alternativ 1</option>
        {getOptions("first").map((profile) => (
          <option key={profile} value={profile}>
            {profile}
          </option>
        ))}
      </select>

      <select
        id="profile_two"
        name="profile_two"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => handleProfileChange(e, "second")}
        value={selectedProfiles.second}
      >
        <option value="">Alternativ 2</option>
        {getOptions("second").map((profile) => (
          <option key={profile} value={profile}>
            {profile}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileSelection;
