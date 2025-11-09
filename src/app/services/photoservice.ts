import { Injectable } from '@angular/core';
import { ImageItem } from '../models/imageitem';

@Injectable({
    providedIn: 'root'
})
export class Photoservice {
    constructor() { }

    getImages(): Promise<ImageItem[]> {
        // Minimal mock implementation
        return Promise.resolve([
            {
                itemImageSrc: 'assets/gallery/Photo_1.jpg',
                thumbnailImageSrc: 'assets/gallery/Photo_1.jpg',
                alt: 'Image 1',
                title: 'Gallery Image 1'
            },
            {
                itemImageSrc: 'assets/gallery/Photo_2.jpg',
                thumbnailImageSrc: 'assets/gallery/Photo_2.jpg',
                alt: 'Image 2',
                title: 'Gallery Image 2'
            },
             {
                itemImageSrc: 'assets/gallery/Photo_3.jpg',
                thumbnailImageSrc: 'assets/gallery/Photo_3.jpg',
                alt: 'Image 3',
                title: 'Gallery Image 3'
            },
           
        ]);
    }
}
