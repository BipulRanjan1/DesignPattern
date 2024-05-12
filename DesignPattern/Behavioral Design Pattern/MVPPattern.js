// Presenter
var VideoPresenter = /** @class */ (function () {
    function VideoPresenter(model, view) {
        this.model = model;
        this.view = view;
    }
    VideoPresenter.prototype.initialize = function () {
        this.view.render(this.model);
    };
    return VideoPresenter;
}());
// Usage
var model = [];
var view = new VideoView(new VideoController(model, new VideoView()));
var presenter = new VideoPresenter(model, view);
presenter.initialize();
