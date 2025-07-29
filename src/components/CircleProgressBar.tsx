'use client'
import React, { useEffect, useRef } from 'react'

interface CircleProgressBarProps {
  progress: number
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ progress }) => {
  const circleRef = useRef<SVGCircleElement>(null)
  const radius = 40
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      const offset = circumference - (progress / 100) * circumference
      circle.style.strokeDashoffset = offset.toString()
    }
  }, [progress])
  return (
    <>
      <svg width={100} height={100} viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={radius} className="progressbar" strokeWidth={5} fill="none" />
        <circle
          ref={circleRef}
          cx={50}
          cy={50}
          r={radius}
          className="progressbar"
          strokeWidth={5}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
        />
      </svg>
      <div className="count">{progress}%</div>
    </>
  )
}

export default CircleProgressBar
