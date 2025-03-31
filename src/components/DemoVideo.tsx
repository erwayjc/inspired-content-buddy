
import React from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const DemoVideo = () => {
  return (
    <section id="demo" className="relative py-28 overflow-hidden">
      {/* Background gradient and decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content side */}
          <div className="lg:w-2/5 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Experience the <span className="gradient-text">Inspired</span> Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our 3-minute demo showcases how Inspired transforms your content creation workflow, saving you hours while delivering better results.
            </p>
            
            <div className="flex items-center space-x-5 mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold gradient-text">15+</span>
                <span className="text-sm text-gray-500">Hours saved weekly</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold gradient-text">68%</span>
                <span className="text-sm text-gray-500">Higher engagement</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold gradient-text">24/7</span>
                <span className="text-sm text-gray-500">Content creation</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="rounded-full shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Full Demo
            </Button>
          </div>
          
          {/* Video side */}
          <div className="lg:w-3/5 relative mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <AspectRatio ratio={16 / 9} className="bg-black/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Video thumbnail */}
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Inspired AI demo video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10"></div>
                  
                  {/* Play button */}
                  <Button 
                    size="icon" 
                    className="absolute rounded-full w-20 h-20 bg-white/95 hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-8 h-8 text-primary ml-1" />
                    <span className="sr-only">Play demo video</span>
                  </Button>
                </div>
              </AspectRatio>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
