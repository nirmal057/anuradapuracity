import React, { lazy } from 'react';
import { Button } from './Button';
interface CardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageAlt?: string;
}
export function Card({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  imageAlt
}: CardProps) {
  return <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img src={image} alt={imageAlt || title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Button href={ctaLink} variant="outline" size="sm">
          {ctaText}
        </Button>
      </div>
    </div>;
}