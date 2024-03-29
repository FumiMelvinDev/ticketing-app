"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChatBubbleLeftIcon,
  Squares2X2Icon,
  TicketIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Tickets", icon: <TicketIcon />, href: "/", current: true },
  { name: "Teams", icon: <UsersIcon />, href: "/Teams", current: false },
  {
    name: "Chats",
    icon: <ChatBubbleLeftIcon />,
    href: "/Chats",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-0 border-r-2 h-screen fixed top-0 left-0"
    >
      {({ open }) => (
        <>
          <div className="max:w-60 sm:w-60 px-2">
            <div className="relative flex flex-col h-16 items-stretch justify-between">
              <div className="flex flex-col items-stretch">
                <div className="mx-auto pb-10 pt-6">Logo</div>
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-primary-main text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <div className="flex gap-2">
                        <div className="w-5 h-5">{item.icon}</div>
                        <div className="hidden sm:block">{item.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-2"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
