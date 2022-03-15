<template>
    <div class="p-2">
          <button class="default comment-btn animated">
            <span class="comment-icon"> <b-icon icon="chat-fill"></b-icon> </span>
            <span> {{ nbComments }} </span>
            </button>
    </div>
</template>

<script>

export default {
    name: 'CommentButton',

        props: {
        nbComments: Number,
    }
}
</script>

<style scoped lang="scss">

.comment-btn {
    background-color: rgb(31, 6, 252);
    color: #ffffff;

    &:hover {
        background-color: rgba(#220ce096, 0.9);
    }
}

.comment-icon {
    margin-right: 0.2rem;
}
</style>
