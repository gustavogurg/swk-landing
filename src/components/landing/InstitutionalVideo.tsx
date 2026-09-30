"use client";

import { useRef, useState } from "react";
import { BASE_PATH } from "./config";

export default function InstitutionalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function startVideo() {
    setStarted(true);
    void videoRef.current?.play().catch(() => {
      // Native controls remain available if the browser blocks playback.
    });
  }

  return (
    <figure>
      <div className="lk-video-shell">
        <video
          ref={videoRef}
          className="block aspect-video w-full object-cover"
          src={`${BASE_PATH}/landing/video-institucional.mp4`}
          poster={`${BASE_PATH}/landing/video-institucional-poster.jpg`}
          preload="none"
          playsInline
          controls={started}
          aria-label="Vídeo institucional da SWK Vision Solutions"
        />
        {!started && (
          <button
            type="button"
            onClick={startVideo}
            className="lk-video-play"
            aria-label="Reproduzir vídeo institucional da SWK com áudio"
          >
            <span className="lk-video-play-icon" aria-hidden="true">▶</span>
            <span>Assista ao vídeo institucional</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-[var(--lk-slate)]">
        Conheça a SWK e as aplicações da nossa tecnologia.
      </figcaption>
    </figure>
  );
}
