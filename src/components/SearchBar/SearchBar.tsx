import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (
    values: { query: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!values.query) {
      toast("Please enter your search!", {
        position: "top-right",
      });
      return;
    }
    onSearch(values.query);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <header className={css.header}>
        <Form className={css.headerForm}>
          <button className={css.headerFormBtn} type="submit">
            <BiSearchAlt className={css.formSvg} />
          </button>
          <Field
            className={css.headerInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
        </Form>
        <Toaster />
      </header>
    </Formik>
  );
};

export default SearchBar;