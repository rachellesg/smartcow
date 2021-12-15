import InputField from "../../../elements/InputField";
import { PrimaryButton } from "../../../elements/Button";

function Profile() {
  return (
    <form className="row">
      <div className="col s12">this is profile content yeh</div>
      <div className="col s6">
        <InputField
          value=""
          fieldName="First Name"
          fieldId="first_name"
          fieldType="text"
        />
      </div>
      <div className="col s6">
        <InputField
          value=""
          fieldName="Last Name"
          fieldId="last_name"
          fieldType="text"
        />
      </div>
      <div className="col s12">
        <InputField
          value=""
          fieldName="Password"
          fieldId="password"
          fieldType="password"
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
