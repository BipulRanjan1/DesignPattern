// Model
class VideoModel {
    constructor(public title: string, public url: string, public channelThumbnail: string, public publishedAt: string, public viewCount: number) {}
}

// View
class VideoView {
    constructor(private controller: VideoController) {}

    render(videos: VideoModel[]) {
        const videoCardContainer = document.querySelector('.video-container');
        videoCardContainer.innerHTML = "";
        videos.forEach(video => {
            const videoElement = document.createElement("div");
            videoElement.innerHTML = `
                <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${video.url}'">
                    <img src="${video.url}" class="thumbnail" alt="">
                    <div class="content">
                        <img src="${video.channelThumbnail}" class="channel-icon" alt="">
                        <div class="info">
                            <h4 class="title">${video.title}</h4>
                            <p class="channel-name">By ${video.channelTitle}</p>
                            <p class="channel-name">Published ${video.publishedAt}</p>
                            <p class="channel-name">${video.viewCount} views</p>
                        </div>
                    </div>
                </div>
            `;
            videoCardContainer.appendChild(videoElement);
        });
    }
}

// Controller
class VideoController {
    private model: VideoModel[];
    private view: VideoView;

    constructor(model: VideoModel[], view: VideoView) {
        this.model = model;
        this.view = view;
    }

    updateView() {
        this.view.render(this.model);
    }
}

// Usage
const model = [];
const view = new VideoView(new VideoController(model, new VideoView()));
const controller = new VideoController(model, view);
controller.updateView();
