import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
//   altText = 'Tilted card image',
//   captionText = '',
  containerHeight = '900px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  marginTop = 17
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

//   function handleMouseEnter() {
//     scale.set(scaleOnHover);
//     opacity.set(1);
//   }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative rounded-2xl h-full perspective-midrange items-center justify-center px-8 mt-20 bg-linear-to-r bg-[#000b26]  "
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
    //   onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
            className="w-full h-full relative transform-3d"
            style={{
                rotateX,
                rotateY
            }}
        >

        <div className=" flex flex-row gap-50 p-5 w-full h-full text-white">
  
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center space-y-4 ml-10">
                <h1 className="text-5xl font-bold">
                Himanshu Khandelwal 
                </h1>
                <h3 className='text-3xl'>
                    I'm a Full Stack Engineer<br/>
                </h3>
                <p className="text-neutral-400 max-w-md">
                Building clean, scalable React applications with modern UI patterns.
                </p>
                <br/><br/>
                <div className='gap-3 flex '>
                    <button className='text-white bg-purple-950 text-xl p-3 rounded-2xl'>View Projects</button>
                    <button className='text-white border-purple-700 border-2 text-xl p-3 rounded-2xl'>Download CV</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center items-center">
            <img
                src={imageSrc}
                className="object-cover shadow-xl rounded-3xl"
                style={{
                width: imageWidth,
                height: imageHeight,
                // perfect oval
                }}
            />
        </div>


</div>


        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-2 will-change-transform transform:translateZ(30px)">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-4px bg-white px-2.5 py-1 text-[10px] text-[#2d2d2d] opacity-0 z-3 hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
         
        </motion.figcaption>
      )}
    </figure>
  );
}
