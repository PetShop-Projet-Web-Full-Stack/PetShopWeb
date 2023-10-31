import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ComboBox = ({ items, modifySelectedValue, popupPosition }) => {
  const [valueSelected, setValueSelected] = useState(null);

  const valueSelectedItem = items.find(item => item.value === valueSelected) || {
    icon: ChevronDownIcon,
    name: 'Aucune selection 😢',
    value: null
  };

  return (
    <div className="flex top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md text-gray-900 border hover:bg-xgreen-999 hover:text-white border-gray-400 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {valueSelectedItem.name}
                <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Menu.Items className={`absolute mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${popupPosition === 'top' ? 'mb-2 bottom-full origin-bottom-left left-10' : ''}`}>
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`group flex w-full items-center rounded-md px-2 py-2 text-sm ${active ? 'bg-xgreen-999 text-white' : 'text-gray-900'}`}
                      onClick={() => {
                        setValueSelected(item.value);
                        modifySelectedValue(item.value);
                      }}
                    >
                      <item.icon className={`mr-2 h-5 w-5 ${active ? 'text-white' : 'text-xgreen-999'}`} aria-hidden="true" />
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ComboBox;