import React from 'react'

import { useField } from "formik";


    const MyTextArea = ({label, ...props}) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="border-[0.06rem] rounded-[0.3125rem] border-[#8a8a8a] pl-[1.56rem] pt-[0.63rem]" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
      };
 


export default MyTextArea