<template>
  <header class="relative flex justify-center w-full pb-4 text-base bg-zinc-50 dark:bg-zinc-900 min-h-[90vh] text-zinc-700 dark:text-zinc-300">
    <div class="container max-w-6xl mt-[40vh] p-4">
      <ProfileIntroduction />
      <div class="w-full mt-9">
        <transition
          @enter="slideDown"
          @leave="slideUp"
        >
          <ProfileDetails v-show="isActive" />
        </transition>
        <ProfileGithub />
        <div class="flex flex-wrap">
          <BaseButton
            v-if="!isActive"
            class="mr-2 font-medium transition shadow-base hover:shadow-expanded shadow-emerald-450 hover:shadow-emerald-450"
            is-unstyled
            @click="readMore"
          >
            Read more
          </BaseButton>
          <p>
            Or see my experiences below<span class="text-emerald-450">.</span>👇
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isActive = ref(false);
const readMore = () => {
  isActive.value = !isActive.value;
};

const slideDown = (el, done) => {
  this.$velocity(el, 'slideDown', {
    duration: 'fast',
    complete: done,
  });
};

const slideUp = (el, done) => {
  this.$velocity(el, 'slideUp', {
    duration: 'fast',
    complete: done,
  });
};
</script>
<!--
<style lang="scss" scoped>
header {
  min-height: 80vh;
  display: flex;
  // align-items: center;
  padding-top: 40vh;
  padding-bottom: 2vh;
  background-color: #fcfcfc;

  h1 {
    font-size: rem(28px);
    font-weight: $fsemibold;
  }

  p {
    font-size: rem(18px);
    width: 50%;

    @include mobile {
      width: 100%;
    }

    &.resume {
      margin-top: 20px;
      text-align: justify;
    }

    &.seework {
      display: inline-block;
      font-size: rem(18px);
      margin-top: 20px;
    }
  }

  .readmore {
    margin-top: 20px;
    margin-right: 5px;
  }
}

.is-green {
  color: $apiGreen;
}

.is-grey-lite {
  color: $apiGreyMid;

  a {
    color: $apiGreyMid;
  }
}
</style> -->
