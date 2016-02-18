export * from "./brand/addBrandReducer";

export * from "./gallery/addGalleryReducer";
export * from "./gallery/allGalleriesReducer";
export * from "./gallery/removeGalleryReducer";

export * from "./tag/addTagReducer";
export * from "./tag/allTagsReducer";
export * from "./tag/removeTagReducer";

export * from "./photo/addPhotoReducer";
export * from "./photo/allPhotosReducer";
export * from "./photo/removePhotoReducer";

export * from "./user/userLoggedInReducer";


angular.module("reducers", ["store"]).config(["reducersProvider", reducersProvider=> {


}]);