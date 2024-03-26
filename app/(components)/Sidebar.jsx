"use client";

import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {
  Squares2X2Icon,
  BellIcon,
  TicketIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Tickets",
    icon: <TicketIcon className="w-4 h-4 text-gray-500" />,
    href: "#",
    current: true,
  },
  {
    name: "Teams",
    icon: <TicketIcon className="w-4 h-4 text-gray-500" />,
    href: "#",
    current: false,
  },
  {
    name: "Chats",
    icon: <TicketIcon className="w-4 h-4 text-gray-500" />,
    href: "#",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <Disclosure as="nav" className="bg-gray-0 w-60 h-screen hidden sm:block">
      {({ open }) => (
        <>
          <div className="relative flex flex-col justify-between h-screen px-4 border-r">
            <div className="flex flex-col space-y-4">
              <div className="flex mx-auto py-6">Logo</div>
              <div className="flex space-x-2 text-base items-center">
                <Squares2X2Icon className="w-5 h-5" />
                <h1>Overview</h1>
              </div>
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-primary-main text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button type="button">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button>
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <ArrowRightStartOnRectangleIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
