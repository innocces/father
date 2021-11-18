import { defineComponent } from "vue";

export default defineComponent({
  name: "Foo",
  props: {
    name: String,
  },
  setup(props) {
    return () => {
      return <div>{props.name}</div>;
    };
  },
});
