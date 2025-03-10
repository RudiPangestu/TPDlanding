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
        bg-white rounded-xl shadow-md p-6 flex flex-col items-center 
        transition-transform transform hover:scale-105 hover:shadow-xl duration-300
      "
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};
export default FeatureCard;
