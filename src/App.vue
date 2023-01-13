<template>
    <div id="app" class="container">
        <div class="row mt-5">
            <div class="col-md-12 col-lg-6">
                <h2>Paul Hellings</h2>
                <p>
                    Paul loves electronic music and the instruments that make it. He gets inspired by the many corners you can
                    find within dance music. Whether its cheesy 80s synthpop, heavy dutch hardcore, pounding techno or spacy
                    trance; you can find the influences back in the music Paul is making.
                </p>
                <p>
                    His weapons of choice are mostly hardware synthesizers, drum machines and some modular stuff. If it has
                    buttons and makes sound its probably on his wishlist or in his studio.
                </p>
                <div class="media-icons">
                    <media-icon
                        v-for="(mediaIcon, key) in mediaIcons"
                        :key="key"
                        :url="mediaIcon.url"
                        :name="mediaIcon.name"
                        :fa-class="mediaIcon.class"
                    ></media-icon>
                </div>
            </div>
            <div class="col-md-12 d-lg-none">
                <hr class="mt-4 mb-4" />
            </div>
            <div class="col-md-12 col-lg-6">
                <h2>Latest Release</h2>
                <SongLinks />
            </div>
        </div>
        <hr class="mt-4 mb-4" />
        <div class="row mb-5">
            <div class="col">
                <you-tube-player></you-tube-player>
            </div>
        </div>
    </div>
</template>

<script>
import SongLinks from "./components/SongLinks.vue";
import MediaIcon from "./components/MediaIcon.vue";
import YouTubePlayer from "./components/YouTubePlayer.vue";

export default {
    name: "app",
    data() {
        return {
            mediaIcons: [
                {
                    url: "https://paulhellings.bandcamp.com/releases",
                    name: "Bandcamp",
                    class: "fab fa-bandcamp",
                },
                {
                    url: "https://soundcloud.com/paulhellings",
                    name: "Soundcloud",
                    class: "fab fa-soundcloud",
                },
                {
                    url: "https://www.instagram.com/synthsandcats/",
                    name: "Instagram",
                    class: "fab fa-instagram ",
                },
                {
                    url: "https://www.facebook.com/PaulHellingsDj/",
                    name: "Facebook",
                    class: "fab fa-facebook",
                },
                {
                    url: "https://twitter.com/kobuz",
                    name: "Twitter",
                    class: "fab fa-twitter",
                },
                {
                    url: "https://space-enigma.bandcamp.com ",
                    name: "Bandcamp Space Enigma",
                    class: "fab fa-bandcamp",
                },
            ],
        };
    },
    components: {
        SongLinks,
        MediaIcon,
        YouTubePlayer,
    },
};
</script>

<style>
.media-icons {
    text-align: center;
    display:flex;
    justify-content: center;
}

.media-icon {
    display: inline-block;
    font-size: xx-large;
    margin: 10px;
}
.media-icon a {
    color: rgba(0, 0, 0, 0.8);
}

.media-icons a:hover {
    color: rgba(0, 0, 0, 1);
}

.media-icon:hover .media-icon span {
    opacity: 1;
}
.media-icon span {
    display: block;
    font-size: small;
    line-height: 1;
    opacity: 0;
    -webkit-transition: opacity 0.4s; /* For Safari 3.1 to 6.0 */
    transition: opacity 0.4s;
}
</style>
