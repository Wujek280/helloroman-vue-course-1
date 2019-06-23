<template>
  <div class="main-content">
    <!-- Sth -->
    <h2 :style="headingH1">Hello {{username}}</h2>
    <hr>
    <!-- Looking for {{ Search || "Nothin ..." }} -->
    Looking for {{ "Nothin ..." }}
    <!-- Comments -->
    <CommentSection/>
  </div>
</template>


<script>
import CommentSection from "./CommentSection";

export default {
  name: "MainContent",
  components: {
    CommentSection
  },
  data() {
    return {
      username: "mjw",
      headingH1: { color: "#226", fontFamily: "Courier" }
    };
  }
};
</script>

