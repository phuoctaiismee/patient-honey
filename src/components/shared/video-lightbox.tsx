"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, useEffect, useRef } from "react";

type VideoLightboxProps = {
  trigger: ReactNode;
  videoSrc?: string;
  poster?: string;
};

export function VideoLightbox({
  trigger,
  videoSrc,
  poster,
}: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    // clean up video on close
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl border-none bg-black p-0">
        <div className="relative aspect-video w-full bg-black">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              controls
              autoPlay
              className="h-full w-full object-contain"
            />
          ) : (
            <div>No Video</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
