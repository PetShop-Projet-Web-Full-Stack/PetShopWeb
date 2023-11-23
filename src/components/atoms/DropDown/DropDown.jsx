import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const DropdownMenu = ({
  menuItems,
  popupPosition,
  user,
  signInAllow,
  clickItem,
}) => {
  return (
    <Menu as="div" className="relative inline-block z-50">
      <div>
        {signInAllow ? (
          <Menu.Button className="gap-x-1.5 rounded-md px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-gray-500 hover:text-white">
            <div className="flex flex-nowrap whitespace-nowrap justify-between items-center">
              {user.name}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-8 w-8"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        ) : (
          <Menu.Button className="inline-flex text-right rounded-md justify-center px-3 py-2 font-semibold text-gray-900 hover:bg-gray-500 hover:text-white">
            <EllipsisVerticalIcon className="w-5 h-5 text-black hover:text-indigo-900" />
          </Menu.Button>
        )}
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-10 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            popupPosition === "top" ? "mb-2 bottom-full" : ""
          } ${popupPosition === "bottom" ? "mt-2 right-0" : ""} ${
            popupPosition === "right" ? "left-full ml-2 top-0" : ""
          } ${popupPosition === "left" ? "top-0 right-full mr-2" : ""}`}
        >
          {signInAllow && (
            <div className="px-4 py-3">
              <p className="text-sm text-gray-900">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">
                {user.email}
              </p>
            </div>
          )}
          <div>
            {menuItems.map((menuItem, index) =>
              menuItem.name !== "Logout" ? (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href={menuItem.path}
                      className={`flex ${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menuItem.icon}
                      {menuItem.name}
                    </a>
                  )}
                </Menu.Item>
              ) : (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => clickItem(menuItem)}
                      className={`flex ${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menuItem.icon}
                      {menuItem.name}
                    </div>
                  )}
                </Menu.Item>
              )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
