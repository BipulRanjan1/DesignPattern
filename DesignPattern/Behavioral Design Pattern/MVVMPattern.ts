// ViewModel
class VideoViewModel {
    videos: VideoModel[] = [];

    constructor(private view: VideoView) {}

    fetchVideos() {
        // Fetch videos from API
        fetch(video_http + new URLSearchParams({
            key: api_key,
            part: 'snippet,statistics',
            chart: 'mostPopular',
            maxResults: 15,
            regionCode: 'IN'
        }))
        .then(res => res.json())
        .then(data => {
            data.items.forEach(item => {
                this.getChannelIcon(item);
            });
        })
        .catch(err => console.log(err));
    }

    getChannelIcon(video_data: any) {
        // Fetch channel icon
        fetch(channel_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: video_data.snippet.channelId
        }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            this.makeVideoCard(video_data);
        });
    }

    makeVideoCard(data: any) {
        const videoModel = new VideoModel(data.snippet.title, data.snippet.thumbnails.high.url, data.channelThumbnail, data.snippet.publishedAt, data.statistics.viewCount);
        this.videos.push(videoModel);
        this.view.render(this.videos);
    }
}

// Usage
const viewModel = new VideoViewModel(new VideoView(new VideoController([], new VideoView())));
viewModel.fetchVideos();
