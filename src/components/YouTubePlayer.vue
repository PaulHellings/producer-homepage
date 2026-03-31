<template>
  <div class="youtube-player">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="mb-0">{{ currentVideoId ? 'Random' : 'Latest' }} Vid From Paul's YouTube Channel</h2>
      <button class="btn btn-outline-dark btn-sm" @click="setRandomVideo">Randomize video</button>
    </div>
    <youtube :video-id="currentVideo" class="youtube-embed"></youtube>
  </div>
</template>

<script>
export default {
  name: 'MediaIcon',

  data() {
    return {
      allVideos: [
        'v7BVJCHMeCw',
        '2a7Ut4V6ykQ',
        'XpiKEZ2F1kM',
        'HXItMLKD9E0',
        'z8e49pTwoac',
        'VB4Hpzf8YxI',
        'fv2S4AeUQ2A',
        'YElPQz53-Ls',
        '87dUqhfkknc',
        'Lf6yWWtU328',
        'QQs_0IgWvrU',
        'SpQj83RhtZE',
        '7VIAwpmQ3t4',
        'QY-VwKWa8wU',
        'N91SXVggrhM',
        'ZRnmxQlVDPw',
        'ZNCRWgFSX3g',
        'CmHF_UJGVRI',
        'J1nh-q1DtyU',
        'xhrTQPyJIwc',
        '1EeMYqc3auA',
        'jnLVC0Vxiec',
        'rF0b4tNYUGU',
        '1dQIiU-E_xk',
        'Mi3UMnxw4qI',
        'RPtRlgob1GM'
      ],
      currentVideoId: null,
    };
  },

  computed: {
    currentVideo() {
      if (this.currentVideoId) {
        return this.currentVideoId;
      }
      return this.allVideos[this.allVideos.length - 1];
    },
  },

  methods: {
    setRandomVideo() {
      let rn = this.randomInteger(0, this.allVideos.length - 1);
      this.currentVideoId = this.allVideos[rn];
    },
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style>
.youtube-embed {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.youtube-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.control.previous {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: 30%;
}
</style>
