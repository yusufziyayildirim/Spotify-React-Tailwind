import { Icon } from "assets/icons/Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "utils/Utils";
import CustomRange from "./CustomRange";
import { useMemo } from "react";


const Player = () => {
    const [audio, state, controls, ref] = useAudio({
        src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3'
    });

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if (state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])

    return (
        <div className="flex px-4 justify-between items-center h-full">
            <div className="min-w-[11.25rem] w-[30%]">
                <div className="flex items-center">
                    <div className="flex items-center mr-3">
                        <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                            <img src="https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714" alt="" />
                            <button
                                className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center">
                                <Icon size={16} name="arrowLeft" />
                            </button>
                        </div>
                        <div>
                            <h6 className="text-sm line-clamp-1"></h6>
                            <p className="text-[0.688rem] text-white text-opacity-70"></p>
                        </div>
                    </div>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="heart" />
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="pictureInPicture" />
                    </button>
                </div>
            </div>
            <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col px-4 items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="shuffle" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerPrev" />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="w-8 h-8  flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition">
                        <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerNext" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="repeat" />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    <div className="text-[0.668rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    {audio}
                    <CustomRange 
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.668rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="lyrics" />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="queue" />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="device" />
                </button>
                <button
                    onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button
                    // onClick={toggle}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="fullScreen" />
                </button>
            </div>
        </div>
    )
}

export default Player