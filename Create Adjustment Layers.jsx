function getExtensionPath(path) {
    adjustmentLayerPRPath = path+"/adjustmentLayer.prproj";
    adjustmentLayerPRPath = adjustmentLayerPRPath.replace(/%20/g, " ");
    
    var adjustmentItem;
             if(adjustmentItem == null) {
                app.project.importSequences(adjustmentLayerPRPath, ["e70122dd-d6fe-4d37-bd46-9a3769bac51d"]);
                }
    }