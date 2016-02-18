export class PhotoUploadComponent {
    constructor(private $attrs: ng.IAttributes,
        private $element: ng.IAugmentedJQuery,
        private $http: ng.IHttpService,
        private $routeParams: angular.route.IRouteParamsService,
        private $scope: ng.IScope) {        
    }


    onInit = () => {
        var drop = null;
        for (var i = 0; i < this.$element[0].children.length; i++) {
            if (this.$element[0].children[i].className == "photoUpload-dropZone") {
                drop = this.$element[0].children[i];
                break;
            }
        }

        drop.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();            
        }, false);
        
        drop.addEventListener("drop", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            var scope = angular.element(dragEvent.currentTarget).scope();
            var galleryId = (<any>scope).vm.$routeParams.galleryId;
            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
                var packageFiles = function (fileList: FileList) {
                    var formData = new FormData();
                    for (var i = 0; i < fileList.length; i++) {
                        formData.append(fileList[i].name, fileList[i]);
                    }
                    return formData;
                }

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/api/photo/upload", true);
                xhr.setRequestHeader("x-galleryId", galleryId);
                xhr.onload = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            //responseText = xhr.responseText;
                        }
                        else {
                            console.error(xhr.statusText);
                        }
                    }
                };
                xhr.send(packageFiles(dragEvent.dataTransfer.files));
                return "";
            }


        }, false);
    }
}