// Model
var VideoModel = /** @class */ (function () {
    function VideoModel(title, url, channelThumbnail, publishedAt, viewCount) {
        this.title = title;
        this.url = url;
        this.channelThumbnail = channelThumbnail;
        this.publishedAt = publishedAt;
        this.viewCount = viewCount;
    }
    return VideoModel;
}());
// View
var VideoView = /** @class */ (function () {
    function VideoView(controller) {
        this.controller = controller;
    }
    VideoView.prototype.render = function (videos) {
        var videoCardContainer = document.querySelector('.video-container');
        videoCardContainer.innerHTML = "";
        videos.forEach(function (video) {
            var videoElement = document.createElement("div");
            videoElement.innerHTML = "\n                <div class=\"video\" onclick=\"location.href = 'https://youtube.com/watch?v=".concat(video.url, "'\">\n                    <img src=\"").concat(video.url, "\" class=\"thumbnail\" alt=\"\">\n                    <div class=\"content\">\n                        <img src=\"").concat(video.channelThumbnail, "\" class=\"channel-icon\" alt=\"\">\n                        <div class=\"info\">\n                            <h4 class=\"title\">").concat(video.title, "</h4>\n                            <p class=\"channel-name\">By ").concat(video.channelTitle, "</p>\n                            <p class=\"channel-name\">Published ").concat(video.publishedAt, "</p>\n                            <p class=\"channel-name\">").concat(video.viewCount, " views</p>\n                        </div>\n                    </div>\n                </div>\n            ");
            videoCardContainer.appendChild(videoElement);
        });
    };
    return VideoView;
}());
// Controller
var VideoController = /** @class */ (function () {
    function VideoController(model, view) {
        this.model = model;
        this.view = view;
    }
    VideoController.prototype.updateView = function () {
        this.view.render(this.model);
    };
    return VideoController;
}());
// Usage
var model = [];
var view = new VideoView(new VideoController(model, new VideoView()));
var controller = new VideoController(model, view);
controller.updateView();
