import { Maximize, Pause, Play } from 'lucide-react';
import React, { KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';

const CustomVideoPlayer = ({ src, poster }: { src: string, poster?: string }) => {
    const videoRef: Ref<HTMLVideoElement> = useRef(null);
    const [
        isPlaying,
        setIsPlaying,
    ] = useState(false);
    const [
        isFullScreen,
        setIsFullScreen,
    ] = useState(false);

    const playVideoToggle = async () => {
        if (isPlaying) {
            videoRef.current!.pause();
            setIsPlaying(false);
        }
        else {
            await videoRef.current!.play();
            setIsPlaying(true);
        }
    };

    const handleKeyPress = (event: globalThis.KeyboardEvent) => {
        if (event.key === 'f' || event.key === 'F') {
            if (!isFullScreen) {
                videoRef.current?.requestFullscreen();
            } else if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            setIsFullScreen(!isFullScreen);
        }
        if (event.key === ' ') {
            playVideoToggle();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isFullScreen, isPlaying]);




    return (
        <div className="flex flex-col items-center justify-end relative">
            <video width="320" height="240"
                ref={videoRef}
                className='rounded w-full focus:rounded-md hover:rounded-md outline-none'
                poster={poster}
                onDoubleClick={() => videoRef.current?.requestFullscreen()}
                onClick={playVideoToggle}
                src={src}
                preload='none'
            >
                <source src={src} type="video/mp4" />
                <track
                    src={src.replace("mp4", "vtt")}
                />
                Your browser does not support the video tag.
            </video>
            <div className="md:bottom-5 bottom-1 justify-between md:px-5 px-3 w-full items-center flex space-x-20 absolute">
                {!isPlaying ?
                    <Play
                        className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-1 rounded-md md:size-10 size-8'
                        onClick={playVideoToggle}
                    />
                    :
                    <Pause
                        className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-1 rounded-md md:size-10 size-8'
                        onClick={playVideoToggle}
                    />
                }
                <Maximize
                    className='duration-300 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 text-gray-100 hover:text-gray-300 backdrop-blur-md p-2 rounded-md md:size-11 size-9'
                    onClick={() => { videoRef.current?.requestFullscreen(); }} />
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
