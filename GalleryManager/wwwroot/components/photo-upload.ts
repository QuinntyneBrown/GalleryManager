export class PhotoUploadComponent {
    constructor(private $attrs: ng.IAttributes,
        private $element: ng.IAugmentedJQuery,
        private $http: ng.IHttpService,
        private $scope: ng.IScope) {

    }


    onInit = () => {
        var drop = <any>this.$element.find(".photoUpload-dropZone")[0];
        drop.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            angular.element(dragEvent.currentTarget).scope();
        }, false);


        var $http = this.$http;
        drop.addEventListener("drop", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
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