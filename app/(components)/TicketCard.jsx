import { dateFormatter } from "@/lib/utils";
import React from "react";
import DeleteTicket from "./DeleteTicket";

function TicketCard({ ticket }) {
  const priorityBG = (priority) => {
    let color = "bg-slate-100";

    switch (priority.toLowerCase()) {
      case "low":
        color = "bg-gray-100";
        return color;
      case "medium":
        color = "bg-warning-border";
        return color;
      case "urgent":
        color = "bg-danger-border";
        return color;
    }

    return color;
  };

  const statusBG = (status) => {
    let color = "bg-slate-100";

    switch (status.toLowerCase()) {
      case "open":
        color = "bg-green-400";
        return color;
      case "close":
        color = "bg-gray-300";
        return color;
    }

    return color;
  };
  return (
    <div className="pb-4 pl-4 rounded-md shadow-md flex flex-col gap-y-2">
      <div className="flex items-center justify-between text-gray-900">
        <h1 className="text-lg sm:text-2xl font-medium pt-4">{ticket.title}</h1>
        <div className="flex items-center space-x-4">
          <h1 className="text-md sm:text-xl pt-4">
            {dateFormatter(ticket.createdAt)}
          </h1>
          <DeleteTicket id={ticket._id} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700">{ticket.description}</p>
      <div className="flex items-center-justify-start space-x-2 text-xs">
        <h1
          className={`${statusBG(
            ticket.status
          )} text-gray-800 rounded-full font-medium uppercase px-1.5 py-0.5 border border-success-border`}
        >
          {ticket.status}
        </h1>
        <h1
          className={`${priorityBG(
            ticket.priority
          )} text-danger-main rounded-full font-medium uppercase px-1.5 py-0.5 border border-danger-border`}
        >
          {ticket.priority}
        </h1>
        <h1 className="bg-gray-100 text-gray-900 rounded-full px-1.5  py-0.5 border border-gray-500">
          #564546
        </h1>
      </div>
    </div>
  );
}

export default TicketCard;
