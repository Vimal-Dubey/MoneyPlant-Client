import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import {abi, contractStrategyAddress, contractDcaoutAddress} from '../utils/ContractInfo';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    amount: '',
    frequency: '',
    period: 'day',
    startDate: '',
    endDate: '',
    startTime: '',
  });

  // State for token and balance
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [addFunds, setAddFunds] = useState({ tokenAddress: '', amount: '' });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const strategyCon = new ethers.Contract(contractStrategyAddress, abi, signer);
        const [token, bal] = await strategyCon.getuserbalance(signer);

        setToken(token); // Update state with token
        setBalance(bal.toString()); // Update state with balance as string
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  const handleAddFundsChange = (e) => {
    setAddFunds({...addFunds, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const strategyCon = new ethers.Contract(contractStrategyAddress, abi, signer);
      const amountInWei = ethers.parseUnits(addFunds.amount, 'ether'); // Assuming the amount is in ether

     const tx = await strategyCon.deposit(addFunds.tokenAddress, amountInWei);
     await tx.wait();
     const [token, bal] = await strategyCon.getuserbalance(signer);
     setToken(token); // Update state with token
        setBalance(bal.toString()); // Update state with balance as string

  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Sidebar for creating strategy */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-indigo-600" />
              <span>Create Your Own Strategy</span>
            </h2>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Sell amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                      Every
                    </label>
                    <input
                      type="number"
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <label htmlFor="period" className="block text-sm font-medium text-gray-700">
                      Trade on
                    </label>
                    <select
                      id="period"
                      name="period"
                      value={formData.period}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="w-full md:w-1/2 mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                      From
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 mb-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                      To
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right side for viewing created strategies and investment history */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-indigo-600" />
              <span>Your Strategies</span>
            </h2>
            {/* Display token and balance */}
            <div className="mb-4">
              <p><strong>Token:</strong> {token}</p>
              <p><strong>Balance:</strong> {balance}</p>
            </div>


            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="tokenAddress" className="block text-sm font-medium text-gray-700">
            Token Address
          </label>
          <input
            type="text"
            id="tokenAddress"
            name="tokenAddress"
            value={addFunds.tokenAddress}
            onChange={handleAddFundsChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={addFunds.amount}
            onChange={handleAddFundsChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Funds
        </button>
      </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;