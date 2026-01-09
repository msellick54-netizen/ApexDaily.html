
import React from 'react';

interface InsightBoxProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const InsightBox: React.FC<InsightBoxProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1a1a1a] border-l-4 border-l-[#ccff00] p-5 mb-4 rounded-r-md">
      <h4 className="flex items-center gap-2 text-[#ccff00] font-bold text-base mb-2">
        {icon}
        {title}
      </h4>
      <div className="text-[#999999] text-sm leading-relaxed">
        {description}
      </div>
    </div>
  );
};

export default InsightBox;
