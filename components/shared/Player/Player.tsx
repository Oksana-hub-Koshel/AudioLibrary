import { WaveSurfer, WaveForm as WF, Region, Marker } from "wavesurfer-react";
import { Range, Direction, getTrackBackground } from "react-range";
import { useEffect, useMemo, useRef, useState, useCallback, memo } from "react";
import styles from "./Player.module.css";
import { Icon } from "@iconify/react";
import formatTime from "../../../utils/formatTime";
import Waveform from "react-audio-waveform";
// import song from '../../../public/Nirvana — Smell Like Teen Spirit (www.lightaudio.ru).mp3'

let audio: any;
let context: any;

const Player = (props: any) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<any>(100);
  const [pause, setPause] = useState<boolean>(true);
  const wavesurferRef = useRef();

  // const play = () => {
  //   // context.state === "suspended" ? context.resume(): context.suspend() ;
  //
  //   if (pause) {
  //     // audio.play()
  //     wavesurferRef.current.play();
  //     // renderFrame()
  //     setPause(false);
  //   } else {
  //     wavesurferRef.current.pause();
  //     // cancelAnimationFrame(requestRef.current)
  //     // audio.pause()
  //     setPause(true);
  //   }
  // };
  // const TEST_PEAKS = [
  //   0.04, 0.99, 0.54, 0.74, 0.76, 0.52, 0.79, 0.72, 0.83, 0.67, 0.88, 0.99,
  //   0.95, 0.9399999999999999, 0.91, 0.82, 0.96, 0.91, 0.93, 0.93, 0.98, 0.99,
  //   0.98, 0.99, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.85, 0.82, 0.96,
  //   0.99, 0.99, 0.99, 0.97, 0.97, 0.98, 1, 0.98, 0.98, 0.98, 0.98, 0.99, 0.99,
  //   0.98, 0.98, 0.98, 0.99, 0.98, 0.99, 0.99, 0.98, 0.99, 0.9, 0.8, 0.91, 0.9,
  //   0.88, 0.97, 0.98, 0.92, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.99, 0.98,
  //   0.98, 0.97, 0.98, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.98, 0.99, 0.99,
  //   0.98, 0.99, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.99, 1, 0.99, 0.93, 0.96,
  //   0.83, 0.9399999999999999, 0.98, 0,
  // ];
  //
  // const handleWSMount = useCallback((waveSurfer: any) => {
  //   wavesurferRef.current = waveSurfer;
  //
  //   if (wavesurferRef.current) {
  //     wavesurferRef.current.load(
  //       "/Nirvana — Smell Like Teen Spirit (www.lightaudio.ru).mp3"
  //     );
  //
  //     console.log();
  //
  //     wavesurferRef.current.on("ready", () => {
  //       let audio_duration = +wavesurferRef.current.getDuration().toFixed(0);
  //
  //       console.log("WaveSurfer is ready", audio_duration);
  //
  //       setDuration(audio_duration);
  //     });
  //
  //     wavesurferRef.current.on("loading", (data) => {
  //       console.log("loading --> ", data);
  //     });
  //
  //     wavesurferRef.current.on("audioprocess", (data) => {
  //       // console.log("audioprocess --> ", data);
  //       if (currentTime != +data.toFixed(0)) {
  //         // console.log(data)
  //         setCurrentTime(+data.toFixed(0));
  //       }
  //     });
  //
  //     wavesurferRef.current.on("seek", (data) => {
  //       console.log(data);
  //       wavesurferRef.current.play();
  //       setPause(false);
  //     });
  //   }
  // }, []);
  //
  // const handleVolume = (vol: number) => {
  //   wavesurferRef.current.setVolume(vol / 100);
  //   setVolume(vol);
  // };

  return (
    <div className={styles.player}>
      {/*<div className={styles.player_img}>*/}
      {/*    <img src="/nevermind.jpg"></img>*/}
      {/*</div>*/}
      {/*<div className={styles.info}>*/}
      {/*    <h3>Smell Like Teen Spirit Song</h3>*/}
      {/*    <p>Nirvana</p>*/}
      {/*</div>*/}
      {/*<div className={styles.sub_info}>*/}
      {/*    <div className={styles.info_left}>*/}
      {/*        <div className={styles.time}>*/}
      {/*            <span>{formatTime(currentTime)}</span>*/}
      {/*        </div>*/}
      {/*        <div className={styles.bpm}>*/}
      {/*            138 BPM */}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    <div className={styles.slash}>*/}
      {/*    / */}
      {/*    </div>*/}
      {/*    <div className={styles.info_left}>*/}
      {/*        <div className={styles.time}>*/}
      {/*            {formatTime(duration)}*/}
      {/*        </div>*/}
      {/*        <div className={styles.bpm}>*/}
      {/*            Vocal*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    /!* <div className={styles.time}>*/}
      {/*         */}
      {/*    </div>*/}
      {/*    <div className={styles.bpm}>*/}
      {/*        138 BPM Non Vocal*/}
      {/*    </div> *!/*/}
      {/*</div>*/}
      {/*<div className={styles.wave}>*/}
      {/*/!* <canvas*/}
      {/*    ref={analyzerCanvas}*/}
      {/*    id="analyzer"*/}
      {/*    >*/}
      {/*</canvas> *!/*/}
      {/*/!* <Waveform*/}
      {/*barWidth={1}*/}
      {/*peaks={peaks}*/}
      {/*height={80}*/}
      {/*// width={'100%'}*/}
      {/*pos={currentTime}*/}
      {/*duration={duration}*/}
      {/*onClick={handleClickWave}*/}
      {/*color="#676767"*/}
      {/*progressGradientColors={[[0, "#888"], [1, "#aaa"]]}*/}
      {/*transitionDuration={300}*/}
      {/*/> *!/*/}
      {/*<WaveSurfer onMount={handleWSMount} >*/}
      {/*    <WF */}
      {/*    id="waveform" */}
      {/*    height={50}*/}
      {/*    normalize={true}*/}
      {/*    cursorColor="transparent" */}
      {/*    waveColor={'#ddf'}*/}
      {/*    progressColor="#0bf">*/}
      {/*    </WF>*/}
      {/*</WaveSurfer>*/}
      {/*</div>*/}
      {/*<div className={styles.volume}>*/}
      {/*    <div className={styles.volume__button}>*/}
      {/*        <Icon icon="bi:volume-up-fill" />*/}
      {/*    </div>*/}
      {/*    <div className={styles.volume__range}>*/}
      {/*        <Range*/}
      {/*            step={1}*/}
      {/*            min={0}*/}
      {/*            max={100}*/}
      {/*            direction={Direction.Up}*/}
      {/*            values={[volume]}*/}
      {/*            onChange={handleVolume}*/}
      {/*            renderTrack={({props, children}) => (*/}
      {/*                <div*/}
      {/*                    {...props}*/}
      {/*                    style={{*/}
      {/*                        ...props.style,*/}
      {/*                        height: '100px',*/}
      {/*                        width: '4px',*/}
      {/*                        background: getTrackBackground({*/}
      {/*                            */}
      {/*                            direction: Direction.Up,*/}
      {/*                            values: [volume],*/}
      {/*                            colors: ["#2fa3bb", "#ccc"],*/}
      {/*                            min: 0,*/}
      {/*                            max: 100*/}
      {/*                        }),*/}
      {/*                    }}  */}
      {/*                >*/}
      {/*                    {children}*/}
      {/*                </div>*/}
      {/*            )}*/}
      {/*            renderThumb={({ props }) => (*/}
      {/*                // <div*/}
      {/*                //     {...props}*/}
      {/*                //     style={{*/}
      {/*                //         ...props.style,*/}
      {/*                //         height: '16px',*/}
      {/*                //         width: '16px',*/}
      {/*                //         backgroundColor: '#2fa3bb',*/}
      {/*                //         borderRadius: '50%'*/}
      {/*                //     }}*/}
      {/*                // />*/}
      {/*                <div {...props} style={{...props.style, background: '#2fa3bb', borderRadius: '50%', width: 20, height: 20 }}>*/}
      {/*                    */}
      {/*                    <Icon icon={'bi:record-circle-fill'}></Icon>*/}
      {/*                </div>*/}
      {/*            )}*/}
      {/*        />*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className={styles.controls}>*/}
      {/*    <div className={styles.prev}><Icon icon="bx:skip-previous" /></div>*/}
      {/*    <div onClick={play} className={styles.play}>*/}
      {/*        {!pause ? (*/}
      {/*            */}
      {/*        <Icon icon="bi:pause-fill" />*/}
      {/*        ) : (*/}
      {/*            */}
      {/*        <Icon icon="bi:play-fill" />*/}
      {/*        )}*/}
      {/*    </div>*/}
      {/*    <div className={styles.next}><Icon icon="bx:skip-next" /></div>*/}
      {/*    <div className={styles.toSong}><Icon icon="bi:box-arrow-up-right" /></div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Player;
