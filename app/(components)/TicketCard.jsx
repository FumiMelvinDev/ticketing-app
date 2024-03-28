import React from "react";

function TicketCard() {
  return (
    <div className="p-4 rounded-md shadow-md flex flex-col gap-y-2">
      <div className="flex items-center justify-between text-gray-900">
        <h1 className="text-lg sm:text-2xl font-medium">Ticket Title</h1>
        <h1 className="text-md sm:text-xl">20 Oct</h1>
      </div>
      <p className="text-sm sm:text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        iusto accusamus sit pariatur sequi vitae itaque excepturi, enim quas.
      </p>
      <div className="flex items-center-justify-start space-x-2 text-xs">
        <h1 className="bg-danger-second text-danger-main rounded-full font-medium uppercase px-1.5 border border-danger-border">
          urgent
        </h1>
        <h1 className="bg-gray-100 text-gray-900 rounded-full px-1.5 border border-gray-500">
          #564546
        </h1>
      </div>
    </div>
  );
}

export default TicketCard;
