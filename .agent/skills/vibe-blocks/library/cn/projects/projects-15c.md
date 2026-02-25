# Projects 15c

## Metadata
- **Category**: Projects
- **Objective**: Provide a contained, rounded-card version of the stacked video gallery.
- **Use Case**: Traditional SaaS platforms or modern web applications where full-bleed components break the established boxed grid.
- **Visual Style**: Restores the `container mx-auto` bounding box. Applies `rounded-lg` bounding radiuses to the video blocks, and spaces them out (`space-y-8 md:space-y-12`) rather than abutting them directly.
- **Interactivity**: The standard VideoSection behavior: hovering fades out the placeholder `<img>` and plays a `<video>` tag seamlessly under a subtle text gradient.

## Description
Projects 15c takes the cinema-scale immersion of the core 15 component and applies standard container boundaries. This makes it far easier to integrate into a standard corporate or app-style website that already uses max-widths and rounded corners heavily. The video elements remain large (`h-[50vh]`), retaining the high visual impact.

## Source Code

```tsx
"use client";

import { AudioLines } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface Projects15cProps {
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
      className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-lg md:h-[60vh]"
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

const Projects15c: React.FC<Projects15cProps> = ({ className }) => {
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
    <section className={cn("bg-background py-8 md:py-32", className)}>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-left text-foreground">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:mb-8 lg:text-8xl">
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

        {/* Video Sections with Padding */}
        <div className="space-y-8 md:space-y-12">
          {videoSections.map((section, index) => (
            <div key={index}>
              <VideoSection
                videoSrc={section.videoSrc}
                thumbnailSrc={section.thumbnailSrc}
                studioName={section.studioName}
                projectTitle={section.projectTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects15c };
```
