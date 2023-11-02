import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { UserIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const DropDownComponent = ({ menuItems = [], popupPosition = "top", user }) => {
  const defaultUser = {
    name: "Tom Hollande",
    picture: UserIcon,
    mail: "tom.hollande@gmail.com",
  };

  const [currentUser] = useState(user || defaultUser);

  return (
    <Menu as="div" className="m-3 relative inline-block text-left w-screen">
      <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-xgreen-999 hover:bg-xgreen-999 hover:text-white">
        <div className="flex justify-between items-center">
          <currentUser.picture className="h-8 w-8" />
          {currentUser.name}
        </div>
        <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Menu.Items
        className={`absolute z-10 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${popupPosition}`}
      >
        <div className="px-4 py-3">
          <p className="text-sm">Signed in as</p>
          <p className="truncate text-sm font-medium text-gray-900">
            {currentUser.mail}
          </p>
        </div>
        <div className="py-1">
          {menuItems.map((menuItem, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href={menuItem.path}
                  className={`group flex w-full items-center rounded-md px-2 py-2 text-sm ${
                    active ? "bg-xgreen-999 text-white" : "text-gray-900"
                  }`}
                >
                  <menuItem.icon
                    className={`mr-2 h-5 w-5 ${
                      active ? "text-white" : "text-xgreen-999"
                    }`}
                  />
                  {menuItem.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default DropDownComponent;
