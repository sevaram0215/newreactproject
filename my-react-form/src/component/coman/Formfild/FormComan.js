import { Dropdown } from "primereact/dropdown";

import { InputText } from "primereact/inputtext";

import { Calendar } from "primereact/calendar";

import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";

const Formfildrnd = ({
  forFildArr = [],
  formObj,
  onChangeCb,
  options = {},
}) => {
  const [value3, setValue3] = useState();
  const MobileFiled = (field) => {
    return (
      <div className="card flex justify-content-center" style={{width:"83.5%",}}>
        <InputNumber
          inputId="minmaxfraction"
          value={formObj?.[field.name] ?? ""}
          label={field.label}
          placeholder={field.placeholder}
          onValueChange={(e) => setValue3(e.value)}
         maxLength={13}
         
        />
    
      </div>
    );
  };
  const InputFiled = (field) => {
    return (
      <div className="card flex justify-content-center" style={{width:"88%"}}>
        <InputText
          value={formObj?.[field.name] ?? ""}
          label={field.label}
          placeholder={field.placeholder}
          name={field.name}
          onChange={onChangeCb}
        />
      </div>
    );
  };

  const DateFiled = (field) => {
    return (
      <div className="card flex justify-content-center" style={{width:"88%"}}>
        <Calendar
          value={formObj?.[field.name] ?? ""}
          label={field.label}
          placeholder={field.placeholder}
          name={field.name}
          onChange={onChangeCb}
        />
      </div>
    );
  };
  const RadioFiled = (field) => {
    return (
      <div className="card flex justify-content-center" >
        <div className="d-flex flex-wrap gap-3 p-3">
          {field.options?.map((option, index) => (
            <div className="flex align-items-center" key={index}>
              <RadioButton
                inputId={`${field.name}-${index}`}
                value={option.value}
                name={field.name}
                onChange={onChangeCb}
                checked={formObj?.[field.name] === option.value}
              />
              <label className="ml-2">{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const dropDownField = (field) => {
    return (
      <div className="select  ">
        <Dropdown
          name={field.name}
          id={field.label}
          value={formObj?.[field.name] ?? ""}
          onChange={onChangeCb}
          options={field.options ?? options}
          optionLabel="name"
          placeholder={field.placeholder}
          className="dropdown"
        />
      </div>
    );
  };
  const renderFiled = (field) => {
    return !!field.type ? (
      <div key={field.id} className="d-flex align-items-center font-bold  gap-3" style={{border:"1px solid black "}}>
        <label>{field.label}</label>
        {field.type === "dropdown" ? dropDownField(field) : null}
        {field.type === "input" ? InputFiled(field) : null}
        {field.type === "number" ? MobileFiled(field) : null}
        {field.type === "calender" ? DateFiled(field) : null}
        {field.type === "Radio" ? RadioFiled(field) : null}
      </div>
    ) : (
      <div></div>
    );
  };
  return (
    <div className="form ">
      {forFildArr.map((field) => (
        <div key={field.name}>{renderFiled(field)}</div>
      ))}
    </div>
  );
};
export default Formfildrnd;
