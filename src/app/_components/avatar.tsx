"use client"

import React, { useState } from "react"

type AvatarProps = {
  src?: string | null
  name?: string
  size?: number
  className?: string
  alt?: string
}

function getInitials(name?: string) {
  if (!name) return "?"
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function stringToColor(str = "", saturation = 50, lightness = 50) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = Math.abs(hash) % 360
  return `hsl(${hue} ${saturation}% ${lightness}%)`
}

export default function Avatar({ src, name, size = 48, className = "", alt = "avatar" }: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const initials = getInitials(name)
  const bg = stringToColor(name || "default")

  const dimension = typeof size === "number" ? size : parseInt(String(size), 10) || 48

  return (
    <div
      style={{ width: dimension, height: dimension, display: "inline-block" }}
      className={className}
      aria-hidden={!name}
    >
      {src && !imgError ? (
        // Use a plain img so onError handling is straightforward in the app router
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={dimension}
          height={dimension}
          onError={() => setImgError(true)}
          style={{ width: dimension, height: dimension, objectFit: "cover", borderRadius: "50%" }}
        />
      ) : (
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name || "avatar"}
        >
          <rect width="100%" height="100%" rx={dimension / 2} ry={dimension / 2} fill={bg} />
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
            fontSize={Math.round(dimension / 2.6)}
            fill="white"
            fontWeight={600}
          >
            {initials}
          </text>
        </svg>
      )}
    </div>
  )
}
