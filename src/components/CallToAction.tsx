
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
      className={`px-6 py-6 text-base font-medium rounded-full ${
        isPrimary
          ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
          : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CallToAction;
