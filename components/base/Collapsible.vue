<script>
import { h } from 'vue';

export default defineComponent({
  name: 'TransitionCollapse',
  render() {
    const data = {
      props: {
        name: 'collapse',
      },
      on: {
        afterEnter(element) {
          element.style.height = 'auto';
        },
        enter(element) {
          const { width } = getComputedStyle(element);

          element.style.width = width;
          element.style.position = 'absolute';
          element.style.visibility = 'hidden';
          element.style.height = 'auto';

          const { height } = getComputedStyle(element);

          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;

          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;

          requestAnimationFrame(() => {
            element.style.height = height;
          });
        },
        leave(element) {
          const height = getComputedStyle(element).height;
          element.style.height = height;

          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;

          requestAnimationFrame(() => {
            element.style.height = 0;
          });
        },
      },
    };

    return h('transition', data);
  },
});
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
