"use client";
import Form, { IFormData } from "@/app/_components/form/Form";
import { usePostUser } from "@/app/hooks/api/users";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const Page = () => {
  const { mutate: postMutate } = usePostUser();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    postMutate(data, {
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
      <h1>Create new user</h1>
      <Form onSubmit={onSubmit} errorMessage={errorMessage} />
    </div>
  );
};

export default Page;
