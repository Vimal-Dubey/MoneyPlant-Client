// Import necessary dependencies
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ethers } from 'ethers';

// Navigation links
const navigation = [
  { name: 'Invest', href: '#' },
  { name: 'What we do', href: '#' },
  { name: 'How it works', href: '#' },
  { name: 'Our Team', href: '#' },
];

const ConnectMetamask = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const currentAddress = await signer.getAddress();
      console.log("Connected to:", currentAddress);
      return currentAddress;
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
    }
  } else {
    console.log("Install MetaMask");
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = async () => {
    const connectedAddress = await ConnectMetamask();
    setIsConnected(true);
    setAddress(connectedAddress);
  };

  return (
    <div>
      <header className="navbar absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!isConnected? (
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handleConnect}
                aria-label="Connect wallet"
              >
                Connect <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {`${address.slice(0, 6)}...`}
                {/* {address} */}
              </p>
            )}
          </div>
        </nav>
        {/* Mobile Menu */}
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                  loading="lazy"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <button
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onClick={handleConnect}
              >
                Connect Wallet
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;