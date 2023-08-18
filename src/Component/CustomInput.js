import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="text-black font-medium leading-4">{label}</label>
      <input
      className="border-[1px]  flex  py-[1.06rem] pl-[1.56rem] xl:py-[0.8rem] max-h-[3.125rem]  max-w-[28.125rem]
      border-[#8A8A8A] rounded-[0.3125rem]"

        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;