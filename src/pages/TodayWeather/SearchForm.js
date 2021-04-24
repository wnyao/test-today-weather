import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "src/components/Inputs";
import { Field } from "src/components/Form";
import { Button } from "src/components/Buttons";

export const SearchForm = (props) => {
  const { onSearch } = props;

  const formik = useFormik({
    initialValues: {
      city: "",
      country: "",
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit: onSearch,
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    resetForm,
    isValid,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-block d-md-flex">
        <Field label="City:" error={touched.city && errors.city}>
          <Input
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>
        <Field label="Country:" error={touched.country && errors.country}>
          <Input
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>
        <div>
          <Button type="submit" label="Search" disabled={!isValid} />
          <Button label="Clear" onClick={resetForm} />
        </div>
      </div>
    </form>
  );
};

const validationSchema = () => {
  return Yup.object().shape({
    city: Yup.string().required("Please input a valid city"),
    country: Yup.string().required("Please input a valid country"),
  });
};
