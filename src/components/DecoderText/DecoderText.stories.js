export default {
  title: "DecoderText",
  args: {
    text: "Slick cyberpunk text",
  },
};

export const Text = ({ text }) => (
  <div>
    <DecoderText delay={0} text={text} />
  </div>
);
