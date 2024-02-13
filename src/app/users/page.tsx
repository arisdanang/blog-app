"use client";
import React, { useState } from "react";
import Button from "../_components/button/Button";
import { useAllUsers, useDeleteUser, useSearchUsers } from "../hooks/api/users";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { divide } from "lodash";

type UserProps = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const searchUsers = useSearchUsers();

  const { data, isLoading } = useAllUsers(currentPage);
  const { mutate } = useDeleteUser();
  const queryClient = useQueryClient();

  const handleDelete = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };

  const handleSearch = (searchQuery: string) => {
    searchUsers(searchQuery);
  };

  return (
    <div className="min-h-screen">
      <h1 className="font-bold mb-4 text-lg">List Users</h1>
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          className="max-w-[65%] border px-2 py-1 border-gray-500 rounded-md"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button className="text-sm border border-black px-2 py-1.5 rounded-md">
          Search
        </Button>
      </div>
      <div className="mt-4 mb-4">
        <Link
          href="users/create"
          className="text-sm border border-black px-2 py-1.5 rounded-md"
        >
          Create User
        </Link>
      </div>
      {isLoading && (
        <div className="min-h-[calc(100vh_-_120px)] text-center text-lg">
          Loading
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data?.map((user: UserProps) => (
          <article
            key={user.id}
            className="border border-black rounded-md p-4 flex flex-col justify-between flex-wrap text-wrap gap-3 mb-3"
          >
            <div className="mb-3">
              <h1 className="font-bold text-base">{user.name}</h1>
              <p className="text-base">{user.gender}</p>
              <span className="border border-black px-2 py-1 rounded-full text-xs">
                {user.status}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                className="text-sm border border-black px-2 py-1 rounded-md"
                href={`/users/${user.id}`}
              >
                Update
              </Button>
              <Button
                className="text-sm border border-black px-2 py-1 rounded-md"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          className="text-sm pointer disabled:cursor-not-allowed border border-black px-2 py-1.5 rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
        >
          Prev
        </Button>
        <Button
          className="text-sm pointer border border-black px-2 py-1.5 rounded-md"
          onClick={() => setCurrentPage((old) => old + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page;
