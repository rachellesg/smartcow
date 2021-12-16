import { InputFieldWrapper } from "./styles";

export default function InputField({
  fieldName,
  fieldValue,
  fieldId,
  fieldType,
}) {
  return (
    <InputFieldWrapper className="input-field">
      <label htmlFor={fieldId}>{fieldName}</label>
      <input
        id={fieldId}
        value={fieldValue || undefined}
        type={fieldType || "text"}
        className="validate"
      />
    </InputFieldWrapper>
  );
}
