import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="text-black font-medium leading-4">{label}</label>
      <input
      className="border-[1px]  border-[#8a8a8a] 4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem]  md:min-w-[34rem] sm:min-w-[24rem] sm1:min-w-[18rem]  h-[3.125rem] max-h-[3.125rem] rounded-[0.3125rem]  mt-[0.75rem]"

        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;