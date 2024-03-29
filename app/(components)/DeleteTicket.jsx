"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

function DeleteTicket({ id }) {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <XMarkIcon
      className="w-5 h-5 text-red-600 cursor-pointer"
      onClick={deleteTicket}
    />
  );
}

export default DeleteTicket;
