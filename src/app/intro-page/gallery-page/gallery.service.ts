export class GelleryService {
    images: string[] = [
        'DSC_5346.jpg',
        'DSC09159.jpg',
        'DSC07093.jpg',
        'DSC06769.jpg',
        'DSC_5346.jpg',
        'DSC09247.jpg',
        'DSC03405.jpg'
      ];

    getImages() {
        return this.images.slice();
    }
}
