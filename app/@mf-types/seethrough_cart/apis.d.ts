
    export type RemoteKeys = 'seethrough_cart/BasicCart' | 'seethrough_cart/FullCart';
    type PackageType<T> = T extends 'seethrough_cart/FullCart' ? typeof import('seethrough_cart/FullCart') :T extends 'seethrough_cart/BasicCart' ? typeof import('seethrough_cart/BasicCart') :any;