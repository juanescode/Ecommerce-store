"use client"

import { Tab } from "@headlessui/react"
import Image from "next/image"

import {Image as ImageType} from "@/types"

interface GalleryProps {
    images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {

  return (
    <div>
        
    </div>
  )
}

export default Gallery