import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormStyled, Label, Input, BtnAdd, Error } from './ContactForm.styled';

const SingupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format 000-00-00')
    .required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <FormStyled>
        <Label htmlFor="">
          Name
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </Label>

        <Label htmlFor="">
          Number
          <Input type="tel" name="number" />
          <Error name="number" component="div" />
        </Label>

        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormStyled>
    </Formik>
  );
};
