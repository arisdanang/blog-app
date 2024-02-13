"use client";
import { usePosts } from "@/app/hooks/api/posts";
import React, { useState } from "react";
import Button from "../button/Button";

interface DataInterface {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

const CardList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isFetching, isLoading } = usePosts(page);

  return (
    <div>
      {isFetching || isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-center text-2xl">loading...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {data?.map((d: DataInterface) => (
            <article
              key={d.id}
              className="mb-4 border border-gray-500 p-3 rounded-md flex flex-col justify-between"
            >
              <h2 className="font-bold">{d.title}</h2>
              <p className="mb-4 text-gray-600">
                {d.body.split(" ").slice(0, 10).join(" ")}
              </p>
              <Button href={`/posts/${d.id}`} className="mb-3">
                <span className="text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 mb-2 ">
                  Read More
                </span>
              </Button>
            </article>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <Button
          className="text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
        >
          prev
        </Button>
        <button
          className="text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default CardList;
