const Mockup1 = ({ setMockup, mockup }) => {
  const handleNextSlide = () => {
    console.log("next slide");
    setMockup(mockup+1);
  }
  return (
    <div onClick={handleNextSlide} style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: "url('/mockup1.png')",
      backgroundSize: "cover",
    }}></div>
  );
}

export default Mockup1;