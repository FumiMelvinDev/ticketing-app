import Link from "next/link";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(process.env.URL + "/api/Tickets", {
      cache: "no-store",
    });

    if (res.ok) {
      return res.json();
    }

    return [];
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

export default async function Home() {
  const { tickets } = await getTickets();

  return (
    <main className="w-full md:px-16 px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-4xl font-medium">Tickets</h1>
        <Link
          href={"/Ticket/new"}
          className="bg-primary-main text-primary-second font-medium px-4 py-1 rounded-lg border-2 border-primary-border"
        >
          New Ticket
        </Link>
      </div>
      <div className="py-6 md:grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tickets &&
          tickets?.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))}
      </div>
    </main>
  );
}
