// Elements
import InputField from "../../../elements/InputField";
import { PrimaryButton } from "../../../elements/Button";

// Assets
import userProfilePhoto from "../../../assets/user_profile-photo.png";
import EditIcon from "../../../assets/Icons/Edit";

// Styles
import { UserProfilePhotoWrapper } from "./styles";

function Profile() {
  return (
    <form className="row">
      <UserProfilePhotoWrapper className="col s12">
        <img
          className="user_profile-photo"
          src={userProfilePhoto}
          alt="User Profile Photo"
        />
        <EditIcon background="#e7edf9" fill="#3860AD" />
      </UserProfilePhotoWrapper>
      <div className="col s12 l4">
        <InputField
          value=""
          fieldName="First Name"
          fieldId="first_name"
          fieldType="text"
        />
      </div>
      <div className="col s12 l4">
        <InputField
          value=""
          fieldName="Last Name"
          fieldId="last_name"
          fieldType="text"
        />
      </div>
      <div className="clearfix col s12 l4">
        <InputField
          value=""
          fieldName="Email"
          fieldId="email"
          fieldType="email"
        />
      </div>
      <div className="col s12">
        <PrimaryButton onClick={() => console.log("clicked")}>
          Save Changes
        </PrimaryButton>
      </div>
    </form>
  );
}

export default Profile;
