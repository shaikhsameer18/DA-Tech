import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
  };
  onPlay: (videoId: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      onClick={() => onPlay(video.id)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <video
          src={video.videoUrl}
          poster={video.thumbnail}
          className="object-contain w-full h-48 transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
        <Play className="w-16 h-16 text-white" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="text-lg font-bold text-white">{video.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;