// import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants//global";
// import InputField from 'custom-fields/InputField';
// import RandomPhotoField from 'custom-fields/RandomPhotoField';
// import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from "formik";
// import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
// import { Button, FormGroup, Spinner,Label,Input,Form } from
import { Button, FormGroup, Spinner, Label, Input } from "reactstrap";
import Images from "constants/images";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
// import Images from "../../../../constants/images";
// import Label from "reactstrap/lib/Label";
// import * as Yup from 'yup';

// PhotoForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

// PhotoForm.defaultProps = {
//   onSubmit: null,
// };

function PhotoForm(props) {
  // const { initialValues, isAddMode } = props;

  // const validationSchema = Yup.object().shape({
  //   title: Yup.string().required('This field is required.'),

  //   categoryId: Yup.number()
  //     .required('This field is required.')
  //     .nullable(),

  //   photo: Yup.string().when('categoryId', {
  //     is: 1,
  //     then: Yup.string().required('This field is required.'),
  //     otherwise: Yup.string().notRequired(),
  //   })
  // });

  // npm i --save react-select
  const initialValues = {
    title:'',
  }
  return (
    //có Formik này mới sử dụng được đống ở dưới  
    <Formik> 
      {/* ======= */}
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
          {/* Form này này của Formik có thể tự động submit form và handle trường reset */}
            {/* <Field/> này khi bị thay đổi giá trị thì những thằng có tên Field khác đều bị re-render lại luôn */}

            <FastField
            // FastField này khi nó bị thay đổi giá trị thì những thằng khác không bị re-render lại mà chỉ riêng nó thôi
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              // component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" 
              // color={isAddMode ? "primary" : "success"}
              >
                {isSubmitting && <Spinner size="sm" />}
                {/* {isAddMode ? 'Add to album' : 'Update your photo'} */}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
{
  /* <Form
// initialValues={initialValues}
// validationSchema={validationSchema}
// onSubmit={props.onSubmit}
>
  <FormGroup>
    <Label for="titleId">Title</Label>
    <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
  </FormGroup>
  <FormGroup>
    <Label for="categoryId">Category</Label>
    <Select
      id="categoryId"
      Name="categoryId"
      placeholder="What your photo category?"
      options={PHOTO_CATEGORY_OPTIONS}
    />
  </FormGroup>
  <FormGroup>
    <Label for="categoryId">Photo</Label>
    <div>
      <Button type="button" outline color="primary">
        Random a photo
      </Button>
      <div>
        <img
          width="200x"
          height="200px"
          src={Images.COLORFUL_BG}
          alt="colorful"
        />
      </div>
    </div>
  </FormGroup>
  <FormGroup>
    <Button color="primary">Add to album</Button>
  </FormGroup>
</Form> */
}
export default PhotoForm;
