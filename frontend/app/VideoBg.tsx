const VideoBg = () => {
  return (
    <video className="video-background" width="100%" height="100%" autoPlay loop muted playsInline>
      <source src="/home-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBg;
