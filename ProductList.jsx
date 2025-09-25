import React from 'react';

// ProductCard component that accepts props for name, price, and stock status
const ProductCard = ({ name, price, status }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '16px',
      borderRadius: '8px',
      width: '200px',
      textAlign: 'center',
      backgroundColor: '#ffffff', // White background for better contrast
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Adding a subtle shadow for better visibility
    }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#333' }}>{name}</h3>
      <p style={{ marginBottom: '8px', color: '#333' }}>Price: ${price}</p>
      <p style={{
        fontWeight: 'bold',
        color: status === 'In Stock' ? 'green' : 'red',
        fontSize: '1rem',
      }}>
        Status: {status}
      </p>
    </div>
  );
};

// Parent component to render multiple ProductCards
const ProductList = () => {
  const products = [
    { name: 'Wireless Mouse', price: 25.99, status: 'In Stock' },
    { name: 'Keyboard', price: 45.5, status: 'Out of Stock' },
    { name: 'Monitor', price: 199.99, status: 'In Stock' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: '20px',
      backgroundColor: '#f0f0f0', // Light gray background for better contrast
    }}>
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px', color: '#333' }}>Products List</h2>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          status={product.status}
        />
      ))}
    </div>
  );
};

export default ProductList;
