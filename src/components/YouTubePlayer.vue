<template>
  <div class="youtube-player">
    <h2>Latest Vid From Paul's YouTube Channel</h2>
    <youtube :video-id="latestVideo" class="youtube-embed"></youtube>
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
      ],
    };
  },

  computed: {
    randomVideo() {
      let rn = this.randomInteger(0, this.allVideos.length - 1);
      return this.allVideos[rn];
    },

    latestVideo() {
      return this.allVideos[this.allVideos.length - 1];
    },
  },

  methods: {
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style>
.youtube-embed {
  position:       relative;
  width:          100%;
  height:         0;
  padding-bottom: 56.25%;
}

.youtube-embed iframe {
  position: absolute;
  top:      0;
  left:     0;
  width:    100%;
  height:   100%;
}

.control.previous {
  position: absolute;
  top:      0;
  bottom:   0;
  left:     0;
  right:    0;
  margin:   auto;
  width:    50%;
  height:   30%;
}
</style>
