import styled from 'styled-components';

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  background: url(./background.jpg) no-repeat;
  background-size: cover;
`;

function VideoBackground() {
  return (
    <Video
      src="./background.mp4"
      poster="./background.jpg"
      playsInline
      autoPlay
      muted
      loop
    />
  );
}

export default VideoBackground;
