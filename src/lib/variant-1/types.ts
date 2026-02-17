export interface PerspectiveLink {
    label: string
    url: string
}

export interface TimelineItem {
    label: string
    date: string
}

export interface TimelineColumn {
    items: TimelineItem[]
}

export interface TimelineData {
    left: TimelineColumn
    right: TimelineColumn
}

export interface Perspective {
    title: string
    description?: string
    links?: PerspectiveLink[]
    timeline?: TimelineData
    position: "top" | "top-left" | "left" | "center" | "top-right" | "bottom" | "bottom-left" | "bottom-right"
}

export interface ParticleUserData {
    baseAngle: number
    angleSpan: number
    baseY: number
    speed: number
    radius: number
}

export interface CameraAnimation {
    x: number
    y: number
    z: number
    rotY: number
}

export interface CylinderConfig {
    radius: number
    height: number
    radialSegments: number
    heightSegments: number
}

export interface ParticleConfig {
    numParticles: number
    particleRadius: number
    segments: number
    angleSpan: number
}

import type { Mesh } from "ogl"

export type ParticleMesh = Mesh & { userData: ParticleUserData }
