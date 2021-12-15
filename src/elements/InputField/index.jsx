export default function InputField({
  fieldName,
  fieldValue,
  fieldId,
  fieldType,
}) {
  return (
    <div className="input-field">
      <input
        id={fieldId}
        value={fieldValue || undefined}
        type={fieldType || "text"}
        className="validate"
      />
      <label htmlFor={fieldId}>{fieldName}</label>
    </div>
  );
}
