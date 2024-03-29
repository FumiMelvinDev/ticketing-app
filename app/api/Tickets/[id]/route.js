import Ticket from "@/lib/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { id } = params;

    const ticket = await Ticket.findOne(id);

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}
