import TicketCard from "./(components)/TicketCard";

export default function Home() {
  return (
    <main className="w-full md:px-16 px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-4xl font-medium">Tickets</h1>
        <button className="bg-primary-main text-primary-second font-medium px-4 py-1 rounded-lg border-2 border-primary-border">
          New Ticket
        </button>
      </div>
      <div className="py-6 flex flex-col space-y-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </main>
  );
}
