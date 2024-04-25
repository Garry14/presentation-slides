import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  title: string;
  platform: string;
}

const Form = ({ onSubmit }: { onSubmit: SubmitHandler<FormValues> }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="text-black"
          type="text"
          {...register("title", { required: true })}
        />
        <input
          className="text-black"
          type="text"
          {...register("platform", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
