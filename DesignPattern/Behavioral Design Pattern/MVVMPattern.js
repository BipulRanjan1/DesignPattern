// ViewModel
var VideoViewModel = /** @class */ (function () {
    function VideoViewModel(view) {
        this.view = view;
        this.videos = [];
    }
    VideoViewModel.prototype.fetchVideos = function () {
        var _this = this;
        // Fetch videos from API
        fetch(video_http + new URLSearchParams({
            key: api_key,
            part: 'snippet,statistics',
            chart: 'mostPopular',
            maxResults: 15,
            regionCode: 'IN'
        }))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            data.items.forEach(function (item) {
                _this.getChannelIcon(item);
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    VideoViewModel.prototype.getChannelIcon = function (video_data) {
        var _this = this;
        // Fetch channel icon
        fetch(channel_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: video_data.snippet.channelId
        }))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            _this.makeVideoCard(video_data);
        });
    };
    VideoViewModel.prototype.makeVideoCard = function (data) {
        var videoModel = new VideoModel(data.snippet.title, data.snippet.thumbnails.high.url, data.channelThumbnail, data.snippet.publishedAt, data.statistics.viewCount);
        this.videos.push(videoModel);
        this.view.render(this.videos);
    };
    return VideoViewModel;
}());
// Usage
var viewModel = new VideoViewModel(new VideoView(new VideoController([], new VideoView())));
viewModel.fetchVideos();
