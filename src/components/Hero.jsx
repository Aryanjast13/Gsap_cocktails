import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { SplitText } from 'gsap/all'
import { useRef } from 'react'

const Hero = () => {
  const videoRef = useRef()
  
  useGSAP(() => {
   // Detect if screen is mobile
  const isMobile = window.innerWidth <= 768;

  
    const heroSplit = new SplitText(".title", { type: 'chars,words' });
    const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });
    
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
    
    
    // Define scroll positions based on device
  const startValue = isMobile ? "top 50%" : "center 60%";
  const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    }

  },[])




  return (
    <>
    <section id='hero' className='noisy'>
      <h1 className='title'>Mojito</h1>
      
      <img src="/images/hero-left-leaf.png" className='left-leaf' alt="left-leaf" />
      <img src="/images/hero-right-leaf.png" className='right-leaf' alt="right-leaf" />

      <div className='hero-bottom-content'>
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className='subtitle'>
               Sip the Spirit <br /> of Summer
            </p>
          </div>
          <div className='view-cocktails'>
            <p className='subtitle'>
              Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
            </p>
                <a href="#cocktails">View cocktails</a>
          </div>
        </div>
      </div>
      
    </section>

    <div className='video absolute  inset-0'>
        <video ref={videoRef} muted  playsInline preload='auto' src="videos/output.mp4"></video>
    </div>
    </>
    
  )
}

export default Hero