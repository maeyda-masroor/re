import YouTube, { YouTubeProps } from 'react-youtube';
function Gallery(){
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '270',
        width: '270',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };    
    return <section class="container py-2">
      <section class="">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
                <div class="mask" propsstyle="background-color: rgba(251, 251, 251, 0.2);"></div>
              </a>
            </div>
          </div>
    
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
                <div class="mask" propsstyle="background-color: rgba(251, 251, 251, 0.2);"></div>
              </a>
            </div>
          </div>
    
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
                <YouTube videoId="BIyWWkr-Wf4" opts={opts} onReady={onPlayerReady} />
              <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal3">
                <div class="mask" propsstyle="background-color: rgba(251, 251, 251, 0.2);"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="">
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div class="text-center py-3">
                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModal2Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/wTcNtgA6gHs"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div class="text-center py-3">
                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModal3Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
    
              <div class="text-center py-3">
                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

}
export default Gallery;