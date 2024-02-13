"use client";
import Form, { IFormData } from "@/app/_components/form/Form";
import { useEditUser, useSingleUser } from "@/app/hooks/api/users";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: number } }) => {
  const { data } = useSingleUser(params.id);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const detailData = data?.data;
  const router = useRouter();

  const { mutate: editMutate } = useEditUser(params.id);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    editMutate(data, {
      onSuccess: () => {
        console.log("helllo");
        router.push("/users");
      },
      onError: (error: any) => {
        if (error?.response && error.response.status === 422) {
          setErrorMessage("Email has already been used");
        } else {
          setErrorMessage("An Error Occured");
        }
      },
    });
  };
  return (
    <div className="min-h-[calc(100vh_-_120px)]">
      <h1 className="font-bold text-lg">Edit user</h1>
      <Form
        defaultValues={detailData}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Page;
