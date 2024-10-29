import React, { useMemo, useState } from "react";
import Formfildrnd from "./component/coman/Formfild/FormComan";
import './App.css';
// import { InputMask } from 'primereact/inputmask';
        
const FormFild = [
  {
    id: "A",
    name: "A",
    type: "dropdown",
    placeholder: "",
    label: "A",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "yes",
      },
      {
        code: "2",
        name: "no",
      },
    ],
  },
  {
    id: "B",
    name: "B",
    type: "dropdown",
    placeholder: "",
    label: "B",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "major",
      },
      {
        code: "2",
        name: "minor",
      },
    ],
  },
  {},
  {
    id: "C",
    name: "C",
    type: "dropdown",
 
    placeholder: "",
    label: "C",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "yes",
      },
      {
        code: "2",
        name: "no",
      },
    ],
  },
  {
    id: "D",
    name: "D",
    type: "dropdown",
    placeholder: "",
    label: "D",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "major",
      },
      {
        code: "2",
        name: "minor",
      },
      {
        code: "3",
        name: "other",
      },
    ],
  },
  {
    id: "E",
    name: "E",
    type: "dropdown",
    placeholder: "",
    label: "E",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "abc",
      },
      {
        code: "2",
        name: "xyz",
      },
    ],
  },
  {
    id: "F",
    name: "F",
    type: "dropdown",
    placeholder: "",
    label: "F",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "yes",
      },
      {
        code: "2",
        name: "no",
      },
    ],
  },
  {
    id: "G",
    name: "G",
    type: "dropdown",
    placeholder: "",
    label: "G",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "boy",
      },
      {
        code: "2",
        name: "girl",
      },
    ],
  },
  {
    id: "H",
    name: "H",
    type: "dropdown",
    placeholder: "",
    label: "H",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "major(a)",
      },
      {
        code: "2",
        name: "major(b)",
      },
      {
        code: "3",
        name: "major(c)",
      },
      {
        code: "4",
        name: "other",
      },
    ],
  },
  {
    id: "I",
    name: "I",
    type: "dropdown",
    placeholder: "",
    label: "I",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "yes ",
      },
      {
        code: "2",
        name: "no",
      },
    ],
  },
  {
    id: "J",
    name: "J",
    type: "dropdown",
    placeholder: "",
    label: "J",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "boy",
      },
      {
        code: "2",
        name: "girl",
      },
    ],
  },
  {
    id: "K",
    name: "K",
    type: "dropdown",
    placeholder: "",
    label: "K",
    col: "col-4",
    options: [
      {
        code: "1",
        name: "major",
      },
      {
        code: "2",
        name: "minor",
      },
      {
        code: "c",
        name: "other",
      },
      
    ],
  },
  

  {
    id: "L",
    name:"L",
    label:"Name:-",
    type:"input",
    placeholder:"enter your name"
  }
  ,
  {
    id: "M",
    name:"M",
    label:"Mobile no:-",
    type:"number",
    placeholder:"enter your mobile no"
  }
  ,
  {
    id: "N",
    name:"N",
    label:"DOB :-",
    type:"calender",
    placeholder:"enter your date of birth"
  }
  ,
  {
    id: "O",
    name:"O",
    label:"Select your gender",
    type:"Radio",
    placeholder:"",
    options:[
      {
        value:"man",
        label:"man"
      },
      {
        value:"female",
        label:"female"
      },
      {
        value:"other",
        label:"other"
      }
    ]
  }
];

console.log(FormFild);

const ShowFormFieldValdation = () => {

  const [formObject, setFormObject] = useState(null);

  const HandleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormObject((prev) => ({ ...prev, [name]: value }));
  };

  const Form_fields = useMemo(() => {
    let Ff = [...FormFild];
    Ff.forEach((field) => {
      if (!["A", "B", "C", "F", "I","L","M","N", "O"].includes(field.name)) {
        field.type = "";
      }
    });

    if (formObject?.C?.code == 1) {
      Ff[4].type = "dropdown";
    }

    if (formObject?.D?.code == 1 && formObject?.D?.code == 1) {
      Ff[5].type = "dropdown";
    }

    if (formObject?.F?.code == 1) {
      Ff[7].type = "dropdown";
      Ff[8].type = "dropdown";
    }
    if (formObject?.I?.code == 1) {
      Ff[10].type = "dropdown";
      Ff[11].type = "dropdown";
    }
    return Ff;
  }, [formObject]);

  return (
    <div className="p-2 " >
      {
        <Formfildrnd
          forFildArr={Form_fields}
          onChangeCb={HandleChange}
          formObj={formObject}
        />
      }
    </div>
  );
};

export default ShowFormFieldValdation;
