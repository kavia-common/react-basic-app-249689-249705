import React, { useState } from 'react';

// Mock data for demonstration - easily replaceable with API calls
const mockUserData = {
  name: 'Sarah Anderson',
  email: 'sarah.anderson@example.com',
  avatar: 'https://ui-avatars.com/api/?name=Sarah+Anderson&background=7C3AED&color=fff&size=128',
  accountCreated: '2023-06-15',
  memberSince: 'June 2023',
};

const mockAddresses = [
  {
    id: 1,
    isPrimary: true,
    label: 'Home',
    street: '123 Maple Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'USA',
  },
  {
    id: 2,
    isPrimary: false,
    label: 'Work',
    street: '456 Tech Boulevard',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    country: 'USA',
  },
];

const mockOrders = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 299.99,
    items: 3,
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-20',
    status: 'shipped',
    total: 149.50,
    items: 2,
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-22',
    status: 'processing',
    total: 89.99,
    items: 1,
  },
  {
    id: 'ORD-2024-004',
    date: '2024-01-25',
    status: 'pending',
    total: 459.00,
    items: 5,
  },
];

/**
 * Status pill component for order status display
 * @param {string} status - The order status
 */
// PUBLIC_INTERFACE
const StatusPill = ({ status }) => {
  const statusConfig = {
    pending: {
      bg: 'bg-status-pending/20',
      text: 'text-status-pending',
      label: 'Pending',
    },
    processing: {
      bg: 'bg-status-processing/20',
      text: 'text-status-processing',
      label: 'Processing',
    },
    shipped: {
      bg: 'bg-status-shipped/20',
      text: 'text-status-shipped',
      label: 'Shipped',
    },
    delivered: {
      bg: 'bg-status-delivered/20',
      text: 'text-status-delivered',
      label: 'Delivered',
    },
    cancelled: {
      bg: 'bg-status-cancelled/20',
      text: 'text-status-cancelled',
      label: 'Cancelled',
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

/**
 * User Profile Page Component
 * Displays user information, saved addresses, and order history
 * with dark blue and purple theme styling
 */
// PUBLIC_INTERFACE
const UserProfile = () => {
  // State management - can be replaced with props or context
  const [userData] = useState(mockUserData);
  const [addresses, setAddresses] = useState(mockAddresses);
  const [orders] = useState(mockOrders);

  /**
   * Handle address editing
   * @param {number} addressId - ID of the address to edit
   */
  // PUBLIC_INTERFACE
  const handleEditAddress = (addressId) => {
    // TODO: Implement edit functionality or connect to API
    console.log('Edit address:', addressId);
  };

  /**
   * Handle address deletion
   * @param {number} addressId - ID of the address to delete
   */
  // PUBLIC_INTERFACE
  const handleDeleteAddress = (addressId) => {
    // TODO: Confirm deletion and connect to API
    setAddresses(addresses.filter(addr => addr.id !== addressId));
  };

  /**
   * Handle viewing order details
   * @param {string} orderId - ID of the order to view
   */
  // PUBLIC_INTERFACE
  const handleViewOrderDetails = (orderId) => {
    // TODO: Navigate to order details page or open modal
    console.log('View order details:', orderId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-darkest via-primary-darker to-primary-dark">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* User Header Section */}
        <div className="bg-gradient-card rounded-2xl shadow-glow p-6 sm:p-8 mb-6 sm:mb-8 border border-secondary/20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={userData.avatar}
                alt={`${userData.name}'s avatar`}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-secondary shadow-glow"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {userData.name}
              </h1>
              <p className="text-secondary-light text-lg mb-4">
                {userData.email}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Member since {userData.memberSince}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <button
                className="px-6 py-2.5 bg-secondary hover:bg-secondary-dark text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                aria-label="Edit profile"
              >
                Edit Profile
              </button>
              <button
                className="px-6 py-2.5 bg-primary-dark hover:bg-primary text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-glow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                aria-label="Change password"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Saved Addresses Section */}
          <div className="bg-gradient-card rounded-2xl shadow-glow p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Saved Addresses
              </h2>
              <button
                className="px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary-light rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                aria-label="Add new address"
              >
                + Add New
              </button>
            </div>

            {addresses.length === 0 ? (
              // Empty state
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">No Addresses Saved</h3>
                <p className="text-gray-500 text-sm">Add your first address to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="bg-primary-darker/50 rounded-xl p-4 border border-secondary/10 hover:border-secondary/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {address.label}
                        </h3>
                        {address.isPrimary && (
                          <span className="px-2 py-1 bg-secondary/20 text-secondary-light text-xs font-semibold rounded-full">
                            Primary
                          </span>
                        )}
                      </div>
                    </div>
                    <address className="text-gray-300 text-sm not-italic leading-relaxed">
                      {address.street}<br />
                      {address.city}, {address.state} {address.zipCode}<br />
                      {address.country}
                    </address>
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => handleEditAddress(address.id)}
                        className="flex-1 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary-light rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                        aria-label={`Edit ${address.label} address`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-primary-darker"
                        aria-label={`Delete ${address.label} address`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Orders Section */}
          <div className="bg-gradient-card rounded-2xl shadow-glow p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Order History
              </h2>
              <button
                className="px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary-light rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                aria-label="View all orders"
              >
                View All
              </button>
            </div>

            {orders.length === 0 ? (
              // Empty state
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">No Orders Yet</h3>
                <p className="text-gray-500 text-sm">Your order history will appear here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-primary-darker/50 rounded-xl p-4 border border-secondary/10 hover:border-secondary/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          Order {order.id}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <StatusPill status={order.status} />
                    </div>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-300">
                        {order.items} {order.items === 1 ? 'item' : 'items'}
                      </span>
                      <span className="text-white font-bold text-lg">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleViewOrderDetails(order.id)}
                      className="w-full px-4 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary-light rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary-darker"
                      aria-label={`View details for order ${order.id}`}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
