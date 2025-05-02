import { useEffect, useRef } from "react"
import lottie from "lottie-web"

export default function LottieViewer() {
  const containerRef = useRef()
  const animRef = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://raw.githubusercontent.com/borgirnitin/Head/main/head-compress.json",
    })

    animRef.current = anim

    const handleScroll = () => {
      const section = containerRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Section visible
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const sectionHeight = rect.height
        const scrollProgress = 1 - (rect.bottom - visibleHeight) / sectionHeight

        const frame = Math.max(0, Math.min(anim.totalFrames, scrollProgress * anim.totalFrames))
        anim.goToAndStop(frame, true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      anim.destroy()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1A1A",
        margin: "100vh 0", // Add spacing to make scrollable
      }}
    />
  )
}
