import { useEffect, useRef } from "react"
import lottie from "lottie-web"

export default function Home() {
  const containerRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://raw.githubusercontent.com/borgirnitin/Head/main/head-compress.json"
    })
    animationRef.current = anim

    const handleMouseMove = (e) => {
      const progress = e.clientX / window.innerWidth
      anim.goToAndStop(progress * anim.totalFrames, true)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      anim.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    />
  )
}
