'use client';

import { useState } from 'react';

interface GiftCardOptionsProps {
  designData: any;
  onBack: () => void;
}

export default function GiftCardOptions({ designData, onBack }: GiftCardOptionsProps) {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'physical'>('email');
  const [deliveryDate, setDeliveryDate] = useState<string>('');

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: Process order via Wine Shipping API
    alert('Gift card order submitted! (Demo mode)');
  };

  const finalAmount = amount === 0 ? parseFloat(customAmount) || 0 : amount;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#2c1810] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white hover:text-[#d4a574] transition-colors flex items-center gap-2"
          >
            <span>←</span> Edit Design
          </button>
          <h3 className="text-white font-semibold">Gift Card Details</h3>
          <div className="w-24"></div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Gift Card Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#2c1810] mb-4">Gift Amount</h4>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        amount === preset
                          ? 'bg-[#8b4513] text-white ring-2 ring-[#8b4513]'
                          : 'bg-[#f8f5f0] text-[#2c1810] hover:bg-[#e8dfd0]'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(0);
                    }}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none"
                    min="10"
                    max="1000"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#2c1810] mb-4">Delivery Method</h4>
                <div className="space-y-3">
                  <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:bg-[#f8f5f0] transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value="email"
                      checked={deliveryMethod === 'email'}
                      onChange={(e) => setDeliveryMethod(e.target.value as 'email')}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-semibold text-[#2c1810]">📧 Email Delivery (Instant)</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Send a digital gift card instantly via email
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:bg-[#f8f5f0] transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value="physical"
                      checked={deliveryMethod === 'physical'}
                      onChange={(e) => setDeliveryMethod(e.target.value as 'physical')}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-semibold text-[#2c1810]">📮 Physical Card (+$5.99)</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Professionally printed and mailed in 3-5 business days
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {deliveryMethod === 'email' && (
                <div>
                  <label className="block text-sm font-semibold text-[#2c1810] mb-2">
                    Delivery Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave blank to send immediately
                  </p>
                </div>
              )}
            </div>

            {/* Right Column - Recipient Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#2c1810] mb-4">Recipient Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">
                      Recipient Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g., Sarah Johnson"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">
                      Recipient Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g., John Smith"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2c1810] mb-2">
                  Personal Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Add a personal message to your gift card..."
                  rows={4}
                  maxLength={250}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#8b4513] focus:ring-2 focus:ring-[#8b4513]/20 outline-none resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {message.length}/250 characters
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 bg-[#f8f5f0] rounded-lg p-6">
            <h4 className="text-lg font-bold text-[#2c1810] mb-4">Order Summary</h4>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Gift Card Amount</span>
                <span className="font-semibold text-[#2c1810]">${finalAmount.toFixed(2)}</span>
              </div>
              {deliveryMethod === 'physical' && (
                <div className="flex justify-between">
                  <span className="text-gray-700">Physical Card Fee</span>
                  <span className="font-semibold text-[#2c1810]">$5.99</span>
                </div>
              )}
              <div className="border-t-2 border-[#d4a574] pt-2 flex justify-between text-xl">
                <span className="font-bold text-[#2c1810]">Total</span>
                <span className="font-bold text-[#8b4513]">
                  ${(finalAmount + (deliveryMethod === 'physical' ? 5.99 : 0)).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              type="submit"
              disabled={finalAmount < 10}
              className="w-full py-4 bg-[#8b4513] hover:bg-[#7a3d0f] disabled:bg-gray-400 text-white rounded-lg font-bold text-lg transition-colors shadow-lg disabled:cursor-not-allowed"
            >
              {finalAmount < 10 ? 'Minimum $10 Required' : 'Proceed to Checkout'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
