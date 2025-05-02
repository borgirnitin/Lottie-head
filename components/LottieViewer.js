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
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.body.scrollHeight
      const scrollable = docHeight - windowHeight

      const scrollProgress = Math.min(1, scrollTop / scrollable)
      const frame = scrollProgress * anim.totalFrames
      anim.goToAndStop(frame, true)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      anim.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1A1A",
      }}
    />
  )
}
