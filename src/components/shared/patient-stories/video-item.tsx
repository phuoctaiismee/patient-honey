"use client";

import { Play } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { VideoLightbox } from "../video-lightbox";

interface VideoItem {
  src?: string;
  poster?: string;
  alt?: string;
}

const VideoItem: React.FC<VideoItem> = ({ src, poster, alt }) => {
  return (
    <VideoLightbox
      videoSrc={src}
      poster={poster}
      trigger={
        <motion.div
          className="group relative cursor-pointer overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={poster || ""}
              alt={alt || "Video Thumbnail"}
              width={320}
              height={180}
              className="h-[200px] w-full object-cover lg:h-[220px]"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.7)",
                "0 0 0 10px rgba(255, 255, 255, 0)",
              ],
            }}
            style={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          >
            <Play className="size-5 fill-black text-black" />
          </motion.div>
        </motion.div>
      }
    />
  );
};

export default VideoItem;
