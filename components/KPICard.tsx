
import React from 'react';

interface KPICardProps {
  value: string | number;
  label: string;
  sublabel: string;
}

const KPICard: React.FC<KPICardProps> = ({ value, label, sublabel }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#333333] border-l-4 border-l-[#ccff00] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all hover:border-[#444444]">
      <div className="text-5xl font-black text-[#ccff00] font-montserrat mb-2">
        {value}
      </div>
      <div className="text-sm font-semibold text-[#999999] uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="text-xs text-white">
        {sublabel}
      </div>
    </div>
  );
};

export default KPICard;
