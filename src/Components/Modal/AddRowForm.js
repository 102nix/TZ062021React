import React from 'react'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { actions } from '../../redux/AC'
import './AddRowForm.scss'
//components:
import { InputForm } from '../InputElement/InputForm'

export const AddRowForm = ({ toggleModal }) => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  const dispatch = useDispatch()
  const data = useSelector((state) => state.dataReducer.data)

  return(
    <div className="rowform">
      <div className="rowform__body">
        <div className="rowform__title">
          форма добавления ряда
        </div>
        <div className="rowform__form">
        <button className="btn-close" onClick={() => toggleModal(false)}>X</button>
          <Formik
            initialValues={{
              id: '',
              firstName: '',
              lastName: '',
              email: '',
              phone: ''
            }}
            validationSchema={Yup.object({
              id: Yup.string().matches(/^\d+$/, 'The field should have digits only'),
              firstName: Yup.string().matches(/^[aA-zZ\s]|[аА-яЯ\s]+$/, "Only alphabets are allowed for this field "),
              lastName: Yup.string().matches(/^[аАaA-zZяЯ\s]|[аА-яЯ\s]+$/, "Only alphabets are allowed for this field "),
              email: Yup.string().email('Invalid email').required('Required'),
              phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
            })}
            onSubmit = {(dataForm) => {
              const newData = [...data]
              newData.unshift(dataForm)
              dispatch(actions.setData(newData))
              dispatch(actions.setModal(false))
            }}
          >
            {({ isValid, dirty }) => (
              <Form>
                <InputForm
                  label="Id"
                  id="id"
                  type="text"
                  name="id"
                  placeholder="Id"
                  required={true}
                />
                <InputForm
                  label="firstName"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required={true}
                />
                <InputForm
                  label="lastName"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required={true}
                />
                <InputForm
                  label="email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                />
                <InputForm
                  label="phone"
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  required={true}
                />
                <div className="actions">
                  {  isValid && dirty ?  <button className="btn">добавить</button> :
                    <button className="btn-disabled" disabled>добавить</button> 
                  }
                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}