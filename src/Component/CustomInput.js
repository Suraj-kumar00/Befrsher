import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="text-black font-medium leading-4">{label}</label>
      <input
      className="border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3.125rem]   rounded-[0.3125rem] py-[1.06rem] pl-[1.56rem]"

        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;