import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";

const FormFieldRenderer = ({ fieldArr = [], onChangeCb, formObj, options = [] }) => {   

    const _dropdownField = (field) => {
        return (
            <div className="card flex justify-content-center w-100">
             
                <Dropdown name={field.name} id={field.label} value={formObj?.[field.name] ?? ""} onChange={onChangeCb} options={field.options ?? options} optionLabel="name"
                    placeholder={field.placeholder} className="w-100" />
              
               
            </div>
        )
    }  

    const renderFields = (field) => {
        return (
            !!field.type ? <div key={field.id} >
                <label>{field.label}</label>               
                {field.type === 'dropdown' ? _dropdownField(field) : null}
            </div> : <div></div>
        )
    }

    return (
        <div className="form">
            <div className="row w-100">
                {fieldArr.map(field => <div className={field.col} key={field.name}>{renderFields(field)}</div>)}
            </div>
        </div>
    )
};

export default FormFieldRenderer;import{ useMemo, useState } from 'react'
import FormFieldRenderer from './Data';

const FORM_FIELDS = [
    {
        id: "a",
        name: "a",
        type: "dropdown",
        label: "A",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "XYZ",
                name: "XYZ"
            },
            {
                code: "ABC",
                name: "ABC"
            }
        ]
    },
    {
        id: "b",
        name: "b",
        type: "dropdown",
        label: "B",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Major"
            },
            {
                code: "2",
                name: "Minor"
            }
        ]
    },
    {},
    {
        id: "c",
        name: "c",
        type: "dropdown",
        label: "C",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Yes"
            },
            {
                code: "2",
                name: "No"
            }
        ]
    },
    {
        id: "d",
        name: "d",
        type: "dropdown",
        label: "D",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Major"
            },
            {
                code: "2",
                name: "Minor"
            },
            {
                code: "3",
                name: "Other"
            }
        ]
    },
    {
        id: "e",
        name: "e",
        type: "dropdown",
        label: "E",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "XYZ"
            },
            {
                code: "2",
                name: "ABC"
            }
        ]
    },
    {
        id: "f",
        name: "f",
        type: "dropdown",
        label: "F",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Yes"
            },
            {
                code: "2",
                name: "No"
            }
        ]
    },
    {
        id: "g",
        name: "g",
        type: "dropdown",
        label: "G",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Girl"
            },
            {
                code: "2",
                name: "Boy"
            }
        ]
    },
    {
        id: "h",
        name: "h",
        type: "dropdown",
        label: "H",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Major(A)"
            },
            {
                code: "2",
                name: "Major(B)"
            },
            {
                code: "3",
                name: "Major(C)"
            },
            {
                code: "4",
                name: "Major(D)"
            },
            {
                code: "5",
                name: "Other"
            }
        ]
    },
    {
        id: "i",
        name: "i",
        type: "dropdown",
        label: "I",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Yes"
            },
            {
                code: "2",
                name: "No"
            }
        ]
    },
    {
        id: "j",
        name: "j",
        type: "dropdown",
        label: "J",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Male"
            },
            {
                code: "2",
                name: "Female"
            }
        ]
    },
    {
        id: "k",
        name: "k",
        type: "dropdown",
        label: "K",
        placeholder: "",
        col: "col-4",
        options: [
            {
                code: "1",
                name: "Major"
            },
            {
                code: "2",
                name: "Minor"
            },
            {
                code: "3",
                name: "Other"
            }
        ]
    }
]

const FormValidation = () => {
    const [formObj, setFormObj] = useState(null);

    const _handleChange = (e) => {
        const { name, value } = e.target;
        setFormObj(prev => ({ ...prev, [name]: value }))
    }

    const _form_fields = useMemo(() => {
        let _ff = [...FORM_FIELDS];
        _ff?.forEach(field => {
            if(!['a', 'b', 'c', 'f', 'i'].includes(field.name)){
                field.type = "";
            }
        })
        if (formObj?.c?.code == 1) {
            _ff[4].type = 'dropdown'
        }
        if (formObj?.c?.code == 1 && formObj?.d?.code == 1) {
             _ff[5].type = 'dropdown'
        }
        if (formObj?.f?.code == 1) {
            _ff[7].type = 'dropdown'
            _ff[8].type = 'dropdown'
        }
        if (formObj?.i?.code == 1) {
            _ff[10].type = 'dropdown'
            _ff[11].type = 'dropdown'
        }
        return _ff;
    }, [formObj])
    
    return (
        <div className='p-4'>{<FormFieldRenderer fieldArr={_form_fields} onChangeCb={_handleChange} formObj={formObj} />}</div>
    )
}

export default FormValidation;