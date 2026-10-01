'use client';

import React from 'react';
import { Users, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { IMPACT_STATS } from '@/data/ngoData';

const iconMap: Record<string, React.ReactNode> = {
  mainstreamed: <Users className="w-7 h-7 text-brand-600" />,
  'currently-studying': <GraduationCap className="w-7 h-7 text-gold-600" />,
  'fully-adopted': <HeartHandshake className="w-7 h-7 text-emerald-600" />,
  'growth-centres': <MapPin className="w-7 h-7 text-blue-600" />
};

export default function ImpactCounters() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {IMPACT_STATS.map((stat) => (
        <div
          key={stat.id}
          className="relative bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1.5 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:scale-110 transition-transform">
              {iconMap[stat.id] || <Users className="w-6 h-6 text-brand-600" />}
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
              Verified
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-serif">
              {stat.value}
            </div>
            <h3 className="text-base font-bold text-neutral-800">
              {stat.label}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed pt-1">
              {stat.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
            <span>Grassroots Impact</span>
            <span className="text-brand-700 font-semibold group-hover:translate-x-1 transition-transform">
              Learn more →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
