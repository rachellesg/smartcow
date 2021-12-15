import InputField from "../../../elements/InputField";
import { PrimaryButton } from "../../../elements/Button";

function Profile() {
  return (
    <div className="form row">
      <div className="col s12">this is profile content yeh</div>
      <div className="col s6">
        <InputField
          fieldName="First Name"
          fieldId="first_name"
          fieldType="text"
        />
      </div>
      <div className="col s6">
        <InputField
          fieldName="Last Name"
          fieldId="last_name"
          fieldType="text"
        />
      </div>
      <div className="col s12">
        <InputField
          fieldName="Password"
          fieldId="password"
          fieldType="password"
        />
      </div>
      <PrimaryButton>Save Changes</PrimaryButton>
    </div>
  );
}

export default Profile;
