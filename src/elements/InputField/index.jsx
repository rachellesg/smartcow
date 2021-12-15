export default function InputField({ fieldName, fieldId, fieldType }) {
  return (
    <div className="input-field">
      <input id={fieldId} type={fieldType || "text"} className="validate" />
      <label htmlFor={fieldId}>{fieldName}</label>
    </div>
  );
}
