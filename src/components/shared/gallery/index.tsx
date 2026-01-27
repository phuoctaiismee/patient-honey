"use client";

import GhostTitle from "@/components/shared/ghost-title";
import { Content, GroupField, ImageField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { motion, type Variants } from "motion/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Simplify } from "../../../../prismicio-types";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
interface GallerySectionProps {
  title: RichTextField;
  images: GroupField<Simplify<Content.OfficeGallerySliceDefaultPrimaryGalleryImagesItem>>;
  logo: ImageField;
}
const GallerySection = ({ title, images, logo }: GallerySectionProps) => {
  const gallery_1 = images[0];
  const gallery_2 = images[1];
  const gallery_3 = images[2];
  const gallery_4 = images[3];
  const gallery_5 = images[4];
  const gallery_6 = images[5];
  const gallery_7 = images[6];
  const gallery_8 = images[7];

  return (
    <div className="space-y-8 overflow-hidden bg-[#252525] pt-12 lg:space-y-16 lg:pt-25">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        <GhostTitle title={title} />
      </motion.div>
      <PhotoProvider>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            variants={rowVariants}
            className="flex flex-col gap-5 overflow-hidden lg:h-[336px] lg:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full lg:flex-2"
            >
              <PhotoView src={gallery_1?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_1?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_2?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_2?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_3?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_3?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
          </motion.div>
          <motion.div
            variants={rowVariants}
            className="flex flex-col gap-5 lg:h-[336px] lg:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_4?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_4?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
            <motion.div
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center bg-[#1089C0] px-7 py-6"
            >
              <PrismicNextImage
                field={logo}
                className="h-[166px] w-[260px] text-white"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_5?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_5?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
          </motion.div>
          <motion.div
            variants={rowVariants}
            className="flex flex-col gap-5 lg:h-[336px] lg:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_6?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_6?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_7?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_7?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="lg:flex-1"
            >
              <PhotoView src={gallery_8?.image.url ?? ""}>
                <PrismicNextImage
                  field={gallery_8?.image}
                  width={800}
                  height={600}
                  className="h-full min-w-0 object-cover"
                />
              </PhotoView>
            </motion.div>
          </motion.div>
        </motion.div>
      </PhotoProvider>
    </div>
  );
};

export default GallerySection;
