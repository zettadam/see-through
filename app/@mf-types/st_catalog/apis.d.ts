
    export type RemoteKeys = 'st_catalog/CatalogCarousel' | 'st_catalog/CatalogDetails' | 'st_catalog/CatalogListing';
    type PackageType<T> = T extends 'st_catalog/CatalogListing' ? typeof import('st_catalog/CatalogListing') :T extends 'st_catalog/CatalogDetails' ? typeof import('st_catalog/CatalogDetails') :T extends 'st_catalog/CatalogCarousel' ? typeof import('st_catalog/CatalogCarousel') :any;