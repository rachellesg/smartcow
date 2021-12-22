import { InputFieldWrapper } from "./styles";

export default function InputField({
  fieldName,
  fieldValue,
  fieldId,
  fieldType,
}) {
  const handleSubmit = () => {
    console.log(fieldValue);
  };
  return (
    <InputFieldWrapper className="input-field">
      <label htmlFor={fieldId}>{fieldName}</label>
      <input
        id={fieldId}
        value={fieldValue || " "}
        type={fieldType || "text"}
        className="validate"
        onChange={handleSubmit}
      />
    </InputFieldWrapper>
  );
}
