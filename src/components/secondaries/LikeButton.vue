<template>
    <div class="p-2">
          <button class="default like-btn animated">
            <span class="like-icon"> <b-icon icon="heart"></b-icon> </span>
            <span > {{ nbLikes }} </span>
        </button>
    </div>
</template>

<script>

export default {
    name: 'LikeButton',

    props: {
        nbLikes: Number,
    }
}
</script>

<style scoped lang="scss">

.like-btn {
    background-color: rgba(252, 6, 6, 0.13);
    color: #e74c3c;
    &:hover {
        background-color: rgba(#e7c3c3, 0.9);
    }

}

.like-btn-liked {
    border: none;
    background-color: #fff;
    color: #e74c3c;
}

.like-icon {
    margin-right: 0.2rem;
}

</style>
