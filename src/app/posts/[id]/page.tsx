"use client";
import { useCommentsPost, useDetailPost } from "@/app/hooks/api/posts";
import { useSingleUser } from "@/app/hooks/api/users";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const { data } = useDetailPost(params.id);
  const { data: commentData } = useCommentsPost(params.id);
  const { data: userData, isLoading: isLoadingUser } = useSingleUser(6265146);

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-xl sm:text-2xl mb-2">{data?.data.title}</h1>
      {isLoadingUser && <span>Loading...</span>}
      {!isLoadingUser && userData?.data.length > 1 && (
        <>
          <h2 className="text-xs sm:text-sm text-gray-600 mb-1">
            Name: {userData?.data?.name}
          </h2>
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">
            Email: {userData?.data?.email}
          </h3>
          <h4 className="text-xs sm:text-sm text-gray-500">
            Status: {userData?.data?.status}
          </h4>
        </>
      )}

      <p className="mt-5 text-gray-700 mb-5 text-lg">{data?.data.body}</p>
      <hr />
      <h5>Comments</h5>
      {commentData?.data.length > 0 ? (
        <section>
          {commentData?.data.map(
            (comment: {
              id: number;
              body: string;
              name: string;
              email: string;
            }) => (
              <div key={comment.id}>
                <p>{comment.body}</p>
                <p>{comment?.name}</p>
                <p>{comment?.email}</p>
              </div>
            )
          )}
        </section>
      ) : (
        <p className="text-center text-sm">there is no comment</p>
      )}
    </div>
  );
};

export default Page;
