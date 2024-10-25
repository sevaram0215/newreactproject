import { Dropdown } from "primereact/dropdown";

const Formfildrnd = ({
  forFildArr = [],
  formObj,
  onChangeCb,
  options = {},
}) => {
  const dropDownField = (field) => {
    return (
      <div className="card d-flex justify-content-center w-100 ">
        <Dropdown
          name={field.name}
          id={field.label}
          value={formObj?.[field.name] ?? ""}
          onChange={onChangeCb}
          options={field.options ?? options}
          optionLabel="name"
          placeholder={field.placeholder}
          className="w-100"
        />
      </div>
    );
  };
  const renderFiled = (field) => {
    return !!field.type ? (
      <div className="ffData_div d-flex" key={field.id}>
        <label>{field.label}</label>

        {field.type === "dropdown" ? dropDownField(field) : null}
      </div>
    ) : (
      <div></div>
    );
  };
  return (
    <div className="form d-gried ">
      <div className="" >
{
  forFildArr.map(field =><div className={field.col} key={field.name}>{
    renderFiled(field)
  }

  </div>)
}
      </div>
      
    
    </div>
  );
};
export default Formfildrnd;
