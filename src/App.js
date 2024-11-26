import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [itemDetails, setItemDetails] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', price: 0, is_offer: false });

  const apiUrl = 'https://test-kync8c77p-pauls-projects-04b89378.vercel.app';

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items`);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchItemDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/${itemId}`);
      setItemDetails(response.data);
    } catch (error) {
      console.error(`Error fetching item with ID ${itemId}:`, error);
    }
  };

  const createNewItem = async () => {
    try {
      const response = await axios.post(`${apiUrl}/items`, newItem);
      console.log('Created new item:', response.data);
      setNewItem({ name: '', price: 0, is_offer: false });
    } catch (error) {
      console.error('Error creating new item:', error);
    }
  };

  const updateItem = async () => {
    try {
      const response = await axios.put(`${apiUrl}/items/${itemId}`, newItem);
      console.log('Updated item:', response.data);
    } catch (error) {
      console.error(`Error updating item with ID ${itemId}:`, error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>FastAPI React Testing</h1>

      <div>
        <h2>Get All Items</h2>
        <button onClick={fetchItems}>Fetch Items</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Get Item Details by ID</h2>
        <input
          type="text"
          placeholder="Enter item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <button onClick={fetchItemDetails}>Fetch Item Details</button>
        {itemDetails && (
          <div>
            <h3>Item Details:</h3>
            <p>Name: {itemDetails.name}</p>
            <p>Price: {itemDetails.price}</p>
            <p>Is Offer: {itemDetails.is_offer ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>

      <div>
        <h2>Create New Item</h2>
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Item price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        />
        <label>
          Is Offer:
          <input
            type="checkbox"
            checked={newItem.is_offer}
            onChange={(e) => setNewItem({ ...newItem, is_offer: e.target.checked })}
          />
        </label>
        <button onClick={createNewItem}>Create Item</button>
      </div>

      <div>
        <h2>Update Item</h2>
        <input
          type="text"
          placeholder="Enter item ID to update"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Updated item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Updated item price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        />
        <label>
          Is Offer:
          <input
            type="checkbox"
            checked={newItem.is_offer}
            onChange={(e) => setNewItem({ ...newItem, is_offer: e.target.checked })}
          />
        </label>
        <button onClick={updateItem}>Update Item</button>
      </div>
    </div>
  );
}

export default App;

