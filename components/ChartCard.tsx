
import React from 'react';

interface ChartCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-[#999999] mb-6">{subtitle}</p>
      <div className="h-[350px] w-full">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
