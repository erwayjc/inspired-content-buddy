
import React from "react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  text: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

const CallToAction = ({ text, isPrimary = true, onClick }: CallToActionProps) => {
  return (
    <Button
      size="lg"
      className={`px-6 py-6 text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
        isPrimary
          ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-primary/20"
          : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CallToAction;
