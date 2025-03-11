import { FC } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="
        bg-white rounded-xl shadow-md p-8 flex flex-col items-center 
        transition-all transform hover:scale-105 hover:shadow-xl duration-300
        border border-transparent hover:border-gray-200
      "
    >
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;