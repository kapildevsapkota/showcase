"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from 'lucide-react'

interface WebsiteModalProps {
  isOpen: boolean
  onClose: () => void
  url: string
  name: string
}

export default function WebsiteModal({ isOpen, onClose, url, name }: WebsiteModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-4 md:max-w-[90vw] md:h-[90vh] md:p-0 md:gap-0">
        <DialogTitle hidden>{name}</DialogTitle>
        
        <div className="absolute right-4 top-4 z-50 md:right-4 md:top-4">
          <button
            onClick={onClose}
            className="rounded-full bg-white p-2 backdrop-blur  hover:bg-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="h-full w-full overflow-hidden rounded-lg md:h-full md:w-full">
          <iframe
            src={url}
            title={`${name} website`}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
