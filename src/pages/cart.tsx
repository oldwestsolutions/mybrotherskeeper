import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './cart.module.css';

// Define the CartItem type
type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  size?: string;
  color?: string;
};

const Cart: NextPage = () => {
  // Mock cart items - this would come from your state management solution in a real app
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Basketball Shoes',
      price: 149.99,
      image: '/images/product-1.jpg',
      quantity: 1,
      size: 'US 10',
      color: 'Black/Red'
    },
    {
      id: '2',
      name: 'Athletic Performance Hoodie',
      price: 79.99,
      image: '/images/product-2.jpg',
      quantity: 2,
      size: 'Large',
      color: 'Navy Blue'
    }
  ]);

  // Function to remove item from cart
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Function to update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
  
  // Calculate tax (assume 8.5%)
  const tax = subtotal * 0.085;
  
  // Calculate total
  const total = subtotal + tax;

  return (
    <>
      <Head>
        <title>Shopping Cart | My Brother's Keeper</title>
        <meta name="description" content="Review your cart and checkout" />
      </Head>
      
      <div className={styles.container}>
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
            <Link href="/shoes" className={styles.continueShoppingBtn}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        width={120} 
                        height={120} 
                      />
                    ) : (
                      <div className={styles.imagePlaceholder} />
                    )}
                  </div>
                  
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <div className={styles.itemMeta}>
                      {item.size && <span>Size: {item.size}</span>}
                      {item.color && <span>Color: {item.color}</span>}
                    </div>
                    <div className={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className={styles.itemControls}>
                      <div className={styles.quantityControl}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      
                      <button 
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.orderSummary}>
              <h2>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Tax (8.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
              
              <Link href="/shoes" className={styles.continueShopping}>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart; 