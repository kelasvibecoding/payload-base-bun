# Projects 15

## Metadata
- **Category**: Projects
- **Objective**: Create a highly immersive, stacked video-preview portfolio gallery.
- **Use Case**: Film production studios, motion graphics designers, or high-budget digital product launches.
- **Visual Style**: Eliminates standard grids entirely. Stacks full-width `h-[50vh]` strips vertically on the page. Uses large, editorial typography anchored to the bottom edge of the strip.
- **Interactivity**: When a user hovers over a project row, the static thumbnail swaps (via opacity fade `duration-700`) to a playing `<video>` element. The video pauses and resets when the cursor leaves to preserve performance and prevent audio/visual chaos.

## Description
Projects 15 is built for motion. By utilizing short native HTML5 `<video>` elements with the `muted` and `loop` attributes, it provides an unparalleled level of visual feedback when browsing case studies. The architecture intelligently manages the `videoRef` for each row, ensuring videos are heavily optimized: they only play when hovered, saving massive amounts of client-side CPU over running multiple instances simultaneously.

## Source Code

```tsx
"use client";

import { AudioLines } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface Projects15Props {
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
      className="group relative h-[50vh] w-full cursor-pointer overflow-hidden"
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

const Projects15: React.FC<Projects15Props> = ({ className }) => {
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
      {/* Header Section */}
      <div className="relative h-[50vh] bg-background">
        <div className="absolute inset-0 bottom-12 flex items-end">
          <div className="px-6 text-left text-foreground sm:px-8 md:px-12 lg:px-16 xl:px-20">
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
        </div>
      </div>

      {/* Video Sections */}
      <div className="w-full">
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

export { Projects15 };
```
