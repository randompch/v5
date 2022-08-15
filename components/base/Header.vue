<template>
  <header class="relative flex justify-center w-full pb-4 text-base bg-slate-50 dark:bg-slate-900 transition-colors min-h-[90vh] text-slate-700 dark:text-white">
    <InputColorModeSwitcher class="absolute z-10 top-10 right-10 xl:fixed xl:top-10 xl:right-10" />
    <div class="container max-w-6xl mt-[50vh] p-4">
      <ProfileIntroduction />
      <div class="w-full mt-9">
        <ProfileDetails v-show="isActive" />
        <!-- <ProfileGithub /> -->
        <div class="flex flex-wrap">
          <BaseButton
            v-if="!isActive"
            class="mr-2 font-medium transition group text-amber-400"
            is-unstyled
            @click="readMore"
          >
            Read more
            <span class="block w-auto max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-400" />
          </BaseButton>
          <p>
            Or see my experiences below<span class="text-amber-400">.</span>👇
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
