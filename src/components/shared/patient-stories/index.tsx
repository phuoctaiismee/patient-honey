import GhostTitle from "@/components/shared/ghost-title";
import { ShineBorder } from "@/components/shared/shine-border";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { motion, type Variants } from "motion/react";
import VideoItem from "./video-item";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const videoItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const highlightBoxVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

type PatientStoriesSectionProps = {
  title: RichTextField;
  videos: {
    poster?: string;
    src?: string;
    alt?: string;
  }[];
  description?: RichTextField;
};

const PatientStoriesSection: React.FC<PatientStoriesSectionProps> = ({
  title,
  videos,
  description,
}) => {
  return (
    <div className="space-y-8 bg-[#252525] px-4 py-12 lg:space-y-16 lg:px-30 lg:py-25">
      <GhostTitle title={title} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {videos.map((video, index) => (
          <motion.div key={index} variants={videoItemVariants}>
            <VideoItem {...video} />
          </motion.div>
        ))}
      </motion.div>
      {description && description.length > 0 && (
        <motion.div
          variants={highlightBoxVariants as never}
          className="relative container max-w-300 z-10 rounded-2xl bg-[#63636314] px-3 py-5 shadow-[inset_-8px_-8px_32px_rgba(255,255,255,0.08)] backdrop-blur-[10px] lg:p-20"
          // style={{
          //   border: '1px solid',
          //   borderImageSource: 'linear-gradient(80.65deg, #000000 -0.1%, #FFFFFF 82.97%, #000000 119.83%)',
          // }}
        >
          <ShineBorder
            borderWidth={1}
            shineColor={["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <div className="text-lg leading-[170%] font-light tracking-[0%] [&>strong]:font-bold [&>em]:italic lg:text-xl lg:leading-[200%]">
                  {children}
                </div>
              ),
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default PatientStoriesSection;
