"use client";
import { useCommentsPost, useDetailPost } from "@/app/hooks/api/posts";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const { data } = useDetailPost(params.id);
  const { data: commentData } = useCommentsPost(params.id);

  return (
    <div className="min-h-[calc(100vh_-_120px)]">
      <h1 className="font-bold text-xl sm:text-2xl mb-2">{data?.data.title}</h1>
      <p className="mt-5 text-gray-700 mb-5 text-lg">{data?.data.body}</p>
      <hr />
      <h5 className="font-bold text-lg">Comments</h5>
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
                <p className="font-bold">{comment?.name}</p>
                <p>{comment.body}</p>
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
