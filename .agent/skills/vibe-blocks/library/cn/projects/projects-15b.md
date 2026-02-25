# Projects 15b

## Metadata
- **Category**: Projects
- **Objective**: Integrate the textual header directly into the masonry flow of a 2-column video gallery.
- **Use Case**: Landing pages where vertical space is at a premium and the header can act as the first "block" in the grid.
- **Visual Style**: Uses `grid-cols-1 md:grid-cols-2`. Crucially, the `<div className="relative h-[50vh] md:h-[60vh]">` header is placed *inside* the grid itself, taking up the top-left cell on desktop. Video blocks flow seamlessly after it.
- **Interactivity**: Same robust React `useRef` video-on-hover mechanics. Replaces static imagery with a video playback loop when the user hovers over the block.

## Description
Projects 15b provides an asymmetrical entry point. By making the header text an equal citizen within the grid structure, the first video project sits immediately adjacent to the headline, drastically reducing the time-to-first-visual. This is a common pattern in brutalist or high-fashion ecommerce sites where the hero text and the first product share the fold line.

## Source Code

```tsx
"use client";

import { AudioLines } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface Projects15bProps {
  className?: string;
}

interface VideoSectionProps {
  videoSrc: string;
  thumbnailSrc: string;
  studioName: string;
  projectTitle: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  thumbnailSrc,
  studioName,
  projectTitle,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative h-[50vh] w-full cursor-pointer overflow-hidden md:h-[60vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnailSrc}
        alt={projectTitle}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/20" />

      <div className="absolute inset-0 bottom-12 flex items-end">
        <div className="px-6 text-left text-white sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <p className="mb-2 text-xs font-medium tracking-wider uppercase opacity-80 sm:mb-3 sm:text-sm md:mb-4 md:text-base">
            {studioName}
          </p>
          <h2 className="max-w-md text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:max-w-lg">
            {projectTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

const Projects15b: React.FC<Projects15bProps> = ({ className }) => {
  const videoSections = [
    {
      thumbnailSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
      videoSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/3571264-hd_1280_720_30fps.mp4",
      studioName: "MERIDIAN FILMS",
      projectTitle: "Coastal Reflections",
    },

    {
      thumbnailSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
      videoSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/1448735-hd_1366_720_24fps.mp4",
      studioName: "ZENITH VISUALS",
      projectTitle: "Ethereal Moments",
    },
    {
      thumbnailSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg",
      videoSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/19348567-hd_1280_720_25fps.mp4",
      studioName: "NEXUS CREATIVE",
      projectTitle: "Deserted Frontiers",
    },
    {
      thumbnailSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
      videoSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/9882072-hd_1280_720_30fps.mp4",
      studioName: "PRISM STUDIOS",
      projectTitle: "Nature's Symphony",
    },
  ];

  return (
    <section className={cn("min-h-screen bg-background", className)}>
      {/* All Sections in 2 Column Grid */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* Header Section */}
        <div className="relative h-[50vh] bg-background md:h-[60vh]">
          <div className="absolute inset-0 bottom-12 flex items-end">
            <div className="px-6 text-left text-foreground sm:px-8 md:px-12 lg:px-16 xl:px-20">
              <h1 className="mb-4 max-w-1/2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:mb-8 lg:text-8xl">
                Explore Our Projects
              </h1>

              <div className="flex items-center">
                <p className="mr-4 text-sm font-medium tracking-wider uppercase opacity-80">
                  Our Work
                </p>
                <div className="opacity-60">
                  <AudioLines className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Sections */}
        {videoSections.map((section, index) => (
          <VideoSection
            key={index}
            videoSrc={section.videoSrc}
            thumbnailSrc={section.thumbnailSrc}
            studioName={section.studioName}
            projectTitle={section.projectTitle}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects15b };
```
