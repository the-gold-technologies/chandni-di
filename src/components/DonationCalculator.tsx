'use client';

import React, { useState } from 'react';
import { Heart, ShieldCheck, Check, Sparkles, Receipt, Download, X } from 'lucide-react';
import { SPONSORSHIP_TIERS } from '@/data/ngoData';

export default function DonationCalculator() {
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [selectedTier, setSelectedTier] = useState<string>('school');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorPan, setDonorPan] = useState<string>('');
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  const currentTier = SPONSORSHIP_TIERS.find((t) => t.id === selectedTier);

  const activeAmount = customAmount
    ? parseInt(customAmount) || 0
    : currentTier?.amount || 2500;

  // 80G gives 50% eligible tax exemption
  const taxDeduction = Math.round(activeAmount * 0.5);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomReceipt = 'CD-80G-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(randomReceipt);
    setShowReceiptModal(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-card p-6 sm:p-8 lg:p-10">
      {/* Frequency Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 font-serif">
            Choose Your Contribution
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500">
            100% of educational donations go directly toward school & college fees
          </p>
        </div>

        <div className="inline-flex p-1 bg-neutral-100 rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              frequency === 'monthly'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Monthly Support
          </button>
          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              frequency === 'one-time'
                ? 'bg-brand-700 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            One-Time Gift
          </button>
        </div>
      </div>

      {/* Preset Sponsorship Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {SPONSORSHIP_TIERS.map((tier) => {
          const isSelected = selectedTier === tier.id && !customAmount;
          return (
            <div
              key={tier.id}
              onClick={() => {
                setSelectedTier(tier.id);
                setCustomAmount('');
              }}
              className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 relative ${
                isSelected
                  ? 'border-brand-700 bg-brand-50/50 shadow-md ring-2 ring-brand-700/20'
                  : 'border-neutral-200 hover:border-neutral-300 bg-white'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-brand-700 text-white text-[10px] font-bold tracking-wide uppercase shadow">
                  Most Impactful
                </span>
              )}
              <div className="text-sm font-bold text-neutral-800 mb-1">{tier.name}</div>
              <div className="flex items-baseline gap-1 my-2">
                <span className="text-3xl font-extrabold text-neutral-900 font-serif">
                  ₹{tier.amount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-neutral-500">/{frequency === 'monthly' ? 'mo' : 'once'}</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {tier.impact}
              </p>
              <div className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block">
                ✓ 80G Tax Benefit: ₹{Math.round(tier.amount * 0.5).toLocaleString('en-IN')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Amount Field */}
      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 mb-6 flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="custom-amount-input" className="text-xs font-semibold text-neutral-700 uppercase tracking-wider shrink-0">
          Or Enter Custom Amount:
        </label>
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-2.5 text-neutral-500 font-bold">₹</span>
          <input
            id="custom-amount-input"
            type="number"
            min="100"
            step="100"
            placeholder="e.g. 10000"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedTier('');
            }}
            className="w-full pl-8 pr-4 py-2 bg-white rounded-lg border border-neutral-300 text-sm font-bold text-neutral-900 focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
          />
        </div>
        <div className="text-xs text-neutral-500">
          Every contribution transforms a child’s future.
        </div>
      </div>

      {/* 80G Tax Exemption Highlights Callout */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              Tax Exemption Certificate under Section 80G
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">
              Indian donors qualify for a 50% deduction. For a donation of{' '}
              <strong className="text-emerald-900">₹{activeAmount.toLocaleString('en-IN')}</strong>, your net taxable income is reduced by{' '}
              <strong className="text-emerald-900">₹{taxDeduction.toLocaleString('en-IN')}</strong>.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-xs font-bold text-emerald-800 bg-white/80 px-3 py-1.5 rounded-full border border-emerald-300">
          Instant 80G Receipt
        </span>
      </div>

      {/* Donation Form */}
      <form onSubmit={handleDonateSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Full Name (for 80G Certificate) *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Sharma"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              PAN Number (Mandatory for 80G Claim) *
            </label>
            <input
              type="text"
              required
              maxLength={10}
              placeholder="ABCDE1234F"
              value={donorPan}
              onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm uppercase tracking-wider focus:outline-none focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-base shadow-lg hover:shadow-xl hover:shadow-brand-700/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>
            Complete Donation of ₹{activeAmount.toLocaleString('en-IN')}{' '}
            {frequency === 'monthly' ? '/ Month' : 'Now'}
          </span>
        </button>

        <p className="text-center text-[11px] text-neutral-400">
          🔒 Secure 256-bit encrypted checkout • Instant downloadable 80G tax receipt issued • NGO Darpan Verified
        </p>
      </form>

      {/* Interactive Simulation Receipt Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative">
            <button
              onClick={() => setShowReceiptModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 mb-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-3">
                <Receipt className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-serif">
                Thank You for Sponsoring a Child!
              </h3>
              <p className="text-sm text-neutral-600">
                Your donation of <strong>₹{activeAmount.toLocaleString('en-IN')}</strong> creates an irreversible path to dignity and education.
              </p>
            </div>

            {/* Mock Tax Receipt Card */}
            <div className="bg-neutral-50 rounded-2xl p-5 border border-dashed border-neutral-300 text-left space-y-3 text-xs text-neutral-700">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200 font-bold">
                <span className="text-brand-800">Chandni Di Social Welfare Trust</span>
                <span className="text-emerald-700">80G RECEIPT: {receiptNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>Donor Name: <strong>{donorName || 'Generous Donor'}</strong></div>
                <div>PAN: <strong>{donorPan || 'ABCDE1234F'}</strong></div>
                <div>Amount Contributed: <strong>₹{activeAmount.toLocaleString('en-IN')}</strong></div>
                <div>Frequency: <strong>{frequency.toUpperCase()}</strong></div>
                <div>Exemption Eligible: <strong className="text-emerald-700">₹{taxDeduction.toLocaleString('en-IN')} (50%)</strong></div>
                <div>Date: <strong>{new Date().toLocaleDateString('en-IN')}</strong></div>
              </div>
              <div className="text-[10px] text-neutral-500 pt-2 border-t border-neutral-200">
                Issued in compliance with Rule 11AA of Income Tax Rules. Valid for tax deduction for FY 2026-27.
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  alert('Tax receipt downloaded for ' + (donorName || 'Donor'));
                  setShowReceiptModal(false);
                }}
                className="flex-1 py-3 rounded-xl bg-neutral-900 hover:bg-black text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download 80G Receipt
              </button>
              <button
                onClick={() => setShowReceiptModal(false)}
                className="py-3 px-6 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-sm hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
