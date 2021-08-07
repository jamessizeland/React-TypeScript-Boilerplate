import React, { Fragment } from 'react';
import { useField, FieldHookConfig } from 'formik';

/**
  - name: string - The name of the field
  - validate?: (value: any) => undefined | string | Promise<any> - See the documentation for <Field>
  - type?: string - The type of the HTML input (text, number and etc.)
  - multiple?: boolean - Whether or not the multiple values can be selected.
  - value?: string- Works only for inputs of type checkbox and radio. When a form is submitted, checkboxes and radios are submitted with the provided value. Read more about it on MDN.
 */
type InputType =  // https://www.w3schools.com/tags/tag_input.asp
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

const FormikInput = (
  props: {
    label: string;
    name: string;
    type: InputType;
  } & FieldHookConfig<string>,
) => {
  /**
    useField() returns [formik.getFieldProps(), formik.getFieldMeta()] which we can spread on <input>. We can use field meta to show an error message if the field is invalid and it has been touched (i.e. visited).
    */
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      {/* no need to pass the name field because Formik will accept
        that prop internally and pass it to the field variable */}
      <input
        {...field}
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Fragment>
  );
};

export default FormikInput;
