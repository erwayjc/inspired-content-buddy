
import React from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const DemoVideo = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">See Inspired in Action</h2>
          <p className="text-lg text-gray-600">
            Watch how Inspired transforms your content marketing workflow in just minutes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
          <div className="relative">
            <AspectRatio ratio={16 / 9} className="bg-black/5">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder image - replace src with your actual thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Demo video thumbnail" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
                
                <Button 
                  size="lg" 
                  className="absolute rounded-full w-20 h-20 bg-primary/90 hover:bg-primary hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                  <span className="sr-only">Play demo video</span>
                </Button>
              </div>
            </AspectRatio>
          </div>
          
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">Inspired: The AI Marketing Butler Demo</h3>
            <p className="text-gray-600">
              This 3-minute demo shows how Inspired creates, optimizes, and schedules your marketing content with minimal effort on your part.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
