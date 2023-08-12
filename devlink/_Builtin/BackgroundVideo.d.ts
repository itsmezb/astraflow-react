import React from "react";
declare type BackgroundVideoWrapperProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  sources?: string[];
  posterImage?: "";
  autoPlay?: boolean;
  loop?: boolean;
  children?: React.ReactElement<BackgroundVideoPlayPauseButtonProps>;
};
export declare const BackgroundVideoWrapper: ({
  tag,
  className,
  autoPlay,
  loop,
  sources,
  posterImage,
  children,
}: BackgroundVideoWrapperProps) => any;
declare type BackgroundVideoPlayPauseButtonProps = {
  className?: string;
  children: React.ReactElement<
    | BackgroundVideoPlayPauseButtonPlayingProps
    | BackgroundVideoPlayPauseButtonPausedProps
  >[];
};
export declare const BackgroundVideoPlayPauseButton: ({
  children,
  className,
}: BackgroundVideoPlayPauseButtonProps) => any;
declare type BackgroundVideoPlayPauseButtonPlayingProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPlaying: ({
  children,
}: BackgroundVideoPlayPauseButtonPlayingProps) => any;
declare type BackgroundVideoPlayPauseButtonPausedProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPaused: ({
  children,
}: BackgroundVideoPlayPauseButtonPausedProps) => any;
export {};
