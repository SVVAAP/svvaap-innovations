import React, { useState } from 'react';

const PaymentDemo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('250g');

  // Product details
  const product = {
    name: 'Premium Organic Cardamom',
    subtitle: 'Green Cardamom Pods - Grade A Quality',
    price: 599,
    mrp: 999,
    discount: 40,
    image: 'data:image/jpeg;base64,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',
    rating: 4.5,
    reviews: 1247,
    inStock: true,
    description: 'Our premium organic cardamom is sourced directly from the Western Ghats of India. Known for its intense aroma and flavor, this Grade A cardamom is perfect for both sweet and savory dishes.',
    features: [
      '100% Organic & Chemical-Free',
      'Freshly Harvested',
      'Rich Aroma & Flavor',
      'Premium Grade A Quality',
      'Vacuum Sealed Packaging',
      'Direct from Farmers'
    ],
    weights: [
      { value: '100g', price: 299 },
      { value: '250g', price: 599 },
      { value: '500g', price: 1099 },
      { value: '1kg', price: 1999 }
    ]
  };

  const selectedPrice = product.weights.find(w => w.value === selectedWeight)?.price || product.price;
  const totalPrice = selectedPrice * quantity;

  // Razorpay integration
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBuyNow = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    const options = {
      key: 'rzp_test_NgwEwXk1hnhpL6',
      amount: totalPrice * 100, // Amount in paise
      currency: 'INR',
      name: 'Svvaap Spices',
      description: `${product.name} - ${selectedWeight}`,
      image: 'https://images.unsplash.com/photo-1596040033229-a0b44b6d1041?w=200&q=80',
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log('Payment Response:', response);
        // Here you would typically send the payment details to your backend
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        product: product.name,
        weight: selectedWeight,
        quantity: quantity
      },
      theme: {
        color: '#f97316'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled');
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-600">🌶️ Svvaap Spices</h1>
            <div className="text-sm text-gray-500">Payment Demo</div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Home</span>
          <span>/</span>
          <span>Spices</span>
          <span>/</span>
          <span className="text-orange-600 font-medium">Cardamom</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}% OFF
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    In Stock
                  </div>
                )}
              </div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 border-transparent hover:border-orange-500 cursor-pointer transition-all">
                    <img src={product.image} alt={`View ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 text-lg">{product.subtitle}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg">
                  <span className="font-bold">{product.rating}</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-gray-600">{product.reviews.toLocaleString()} reviews</span>
              </div>

              {/* Price */}
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-orange-600">₹{selectedPrice}</span>
                  <span className="text-xl text-gray-400 line-through">₹{Math.round(selectedPrice * 100 / (100 - product.discount))}</span>
                  <span className="text-green-600 font-semibold text-lg">{product.discount}% off</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
              </div>

              {/* Weight Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Weight:</label>
                <div className="grid grid-cols-4 gap-3">
                  {product.weights.map((weight) => (
                    <button
                      key={weight.value}
                      onClick={() => setSelectedWeight(weight.value)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        selectedWeight === weight.value
                          ? 'bg-orange-500 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {weight.value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity:</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-gray-700 transition-all"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-gray-700 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
                  <span className="text-3xl font-bold text-orange-600">₹{totalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Buy Now with Razorpay</span>
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-xs text-gray-600 font-medium">Free Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🔄</div>
                  <div className="text-xs text-gray-600 font-medium">7 Days Return</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">✅</div>
                  <div className="text-xs text-gray-600 font-medium">Quality Check</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🏆</div>
                  <div className="text-xs text-gray-600 font-medium">Top Brand</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Payment */}
          <div className="border-t px-8 py-6 bg-blue-50">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Secure Payment with Razorpay</h3>
                <p className="text-blue-800 text-sm">
                  This is a demo page showcasing Razorpay payment integration. The payment gateway is in test mode. 
                  You can use test cards to simulate payments. For testing, use card number: 4111 1111 1111 1111, 
                  any future expiry date, and any CVV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDemo;
