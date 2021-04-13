<template>
  <div class="media-icon">
    <a target="_blank" :href="url">
      <i :class="faClass"></i>
    </a>
    <div class="media-name">
      <a target="_blank" :href="url">{{name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaIcon",
  props: ["url", "name", "faClass"]
};
</script>

<style>
.media-icon {
  display: inline-block;
  font-size: xx-large;
  margin: 10px;
  opacity: 0.85;
  -webkit-transition: opacity 0.4s; /* For Safari 3.1 to 6.0 */
  transition: opacity 0.4s;
}

.media-icon:hover {
  opacity: 1;
}
.media-name {
  display: block;
  font-size: small;
  line-height: 1;
  opacity: 0;
  -webkit-transition: opacity 0.4s; /* For Safari 3.1 to 6.0 */
  transition: opacity 0.4s;
}
.media-name a {
  text-decoration: none;
}

.media-icon:hover .media-name {
        opacity: 1;
      }

@media (hover: none) {
    .media-icon .media-name {
        opacity: 1;
      }
}
</style>
