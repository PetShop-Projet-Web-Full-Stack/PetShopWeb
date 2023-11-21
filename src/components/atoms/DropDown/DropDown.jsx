import React from 'react';
import {Menu, Transition} from '@headlessui/react';
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const DropdownMenu = ({ menuItems, popupPosition, user, signInAllow }) => {
  return (
    <Menu as="div" className="relative inline-block z-50">
      <div>
        {signInAllow ? (
          <Menu.Button className="gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-green-500 hover:text-white">
            <div className="flex justify-between items-center">
              {/* Assuming user.picture is a component */}
              {user.picture}
              {user.name}
              <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
            </div>
          </Menu.Button>
        ) : (
          <Menu.Button className="inline-flex text-right rounded-md justify-center px-3 py-2 font-semibold text-gray-900 hover:bg-green-500 hover:text-white">
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
            popupPosition === 'top' ? 'mb-2 bottom-full' : ''
          } ${popupPosition === 'bottom' ? 'mt-2 right-0' : ''} ${
            popupPosition === 'right' ? 'left-full ml-2 top-0' : ''
          } ${popupPosition === 'left' ? 'top-0 right-full mr-2' : ''}`}
        >
          {signInAllow && (
            <div className="px-4 py-3">
              <p className="text-sm">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">{user.email}</p>
            </div>
          )}
          <div className="py-1">
            {menuItems.map((menuItem) => (
              <Menu.Item key={menuItem.path}>
                {({ active }) => (
                  <a
                    href={menuItem.path}
                    className={`flex ${active ? 'bg-green-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {/* Assuming menuItem.icon is a component */}
                    {menuItem.icon}
                    {menuItem.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;