import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import one from "../../assets/videos/1.mp4"
import two from "../../assets/videos/2.mp4"
import three from "../../assets/videos/3.mp4"
import oneimg from "../../assets/videos/one.png"
import twoimg from "../../assets/videos/two.png"
import threeimg from "../../assets/videos/three.png"


const videos = [
  {
    id: '1',
    title: 'Gaming PC Build',
    thumbnail: oneimg,
    videoUrl: one,
  },
  {
    id: '2',
    title: 'AMD Ryzen 9 5900X Build',
    thumbnail: twoimg,
    videoUrl: two,
  },
  {
    id: '3',
    title: 'Threadripper 3960X Build',
    thumbnail: threeimg,
    videoUrl: three,
  },
];

const Videos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const handlePlayVideo = (videoId: string) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
    }
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-20 transition-colors duration-300 bg-white dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Featured <span className="text-red-600">Videos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Watch our latest project highlights and technology demonstrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={handlePlayVideo}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseVideo}
        videoUrl={selectedVideo?.videoUrl || ''}
        title={selectedVideo?.title || ''}
      />
    </section>
  );
};

export default Videos;