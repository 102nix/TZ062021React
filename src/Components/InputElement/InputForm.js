import React from 'react'
import { useField } from 'formik'
import './InputForm.scss'

export const InputForm = ({label, ...props}) => {

  const [field, meta] = useField(props)

  return (
    <>
      <div className="container-input">
        <label 
          htmlFor={props.id || props.name}
          className={(props.required) ? 'label label_required' : 'label' }
        >
          {label}
        </label>
        <input
          className="form-input"
          {...field}
          {...props}
        />
      </div >
      {
        meta.touched && meta.error ? <div className="error">{meta.error}</div> : null
      }
    </>
  )
}
