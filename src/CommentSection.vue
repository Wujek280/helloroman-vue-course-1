<template>
  <ul>
    <li v-for="comment in comments">
      <section :key="comment.id">
        <h3>{{ comment.heading || "Loading ..."}}</h3>
        <hr>
        <p>{{ comment.content || "Loading content ..."}}</p>
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CommentSection",
  data() {
    return {
      comments: [
        { id: "ba394i", heading: "Hello World", content: "Initial post" },
        {
          id: "e2138s",
          heading: "New component",
          content: "Introducing GlobalSearch component"
        }
      ]
    };
  }
};
</script>

<style scoped>
h3 {
  margin: 0;
}

li {
  list-style-type: none;
  background: #eee;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
}

section {
  margin-left: 5px;
}
</style>


