"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface IFormData {
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface IFormProps {
  defaultValues?: IFormData;
  onSubmit: (data: IFormData) => void;
  errorMessage: string;
}

const Form = ({ defaultValues, onSubmit, errorMessage }: IFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      setValue("email", defaultValues.email);
      setValue("name", defaultValues.name);
      setValue("gender", defaultValues.gender);
      setValue("status", defaultValues.status);
    }
  }, [defaultValues, setValue]);
  console.log("defaultValues", defaultValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          className="border border-black rounded-md"
        />
        {errors.name && <span>nama required</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          className="border border-black rounded-md"
        />
        {errors.email && <span>email required</span>}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select {...register("gender", { required: true })}>
          <option hidden>Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          {...register("status", { required: true })}
          className="border border-black rounded-md block"
        >
          <option hidden>Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;
