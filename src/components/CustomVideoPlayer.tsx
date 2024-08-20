import { Maximize, Pause, Play } from 'lucide-react';
import React, { Ref, useRef, useState } from 'react';

const CustomVideoPlayer = ({ src, poster }: { src: string, poster?: string }) => {
    const videoRef: Ref<HTMLVideoElement> = useRef(null);
    const [
        isPlaying,
        setIsPlaying,
    ] = useState(true);

    const handlePlay = () => {
        videoRef.current!.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        videoRef.current!.pause();
        setIsPlaying(false);
    };

    const playVideoToggle = () => {
        if (isPlaying) {
            handlePause();
        }
        else {
            handlePlay();
        }
    };


    return (
        <div className="flex flex-col items-center justify-end relative">
            <video width="320" height="240"
                autoPlay
                ref={videoRef}
                className='rounded w-full focus:rounded-md hover:rounded-md'
                poster={poster}
                onDoubleClick={() => videoRef.current?.requestFullscreen()}
                onClick={playVideoToggle}
            >
                <source src={src} type="video/mp4" />
                <track
                    src={src.replace("mp4", "vtt")}
                />
            </video>
            <div className="md:bottom-5 bottom-1 justify-between md:px-5 px-3 w-full items-center flex space-x-20 absolute">
                {!isPlaying ?
                    <Play
                        className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-1 rounded-md md:size-10 size-8'
                        onClick={handlePlay}
                    />
                    :
                    <Pause
                        className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-1 rounded-md md:size-10 size-8'
                        onClick={handlePause}
                    />
                }
                <Maximize
                    className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-2 rounded-md md:size-11 size-9'
                    onClick={() => { videoRef.current?.requestFullscreen(); handlePlay() }} />
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
