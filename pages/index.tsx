import s from "./index.module.css";

export default function Home(): React.ReactElement {
  return (
    <main className={s.container}>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className={s.hero}>
      <SwappableBlock id="test1" success={}>
        <Variation>
          <h1>My Company</h1>
        </Variation>
        <Variation>
          <h1>My Cool Company</h1>
        </Variation>
      </SwappableBlock>
      <h2>Lorem tempus lacinia in nec.</h2>
      <p>
        Leo cursus adipiscing finibus ligula lectus finibus. Nec metus duis
        fusce at arcu. Ligula sapien interdum fusce mauris fringilla maecenas
        sed leo. Lorem tempus lacinia in nec. Tempus in purus vulputate arcu
        mauris lorem arcu fermentum. Eu arcu eu maximus convallis vulputate
        vulputate posuere dolor ut. Sit arcu mauris ut dolor. Orci interdum at
        ipsum cursus rutrum donec pulvinar fermentum.
      </p>
      <img src="https://via.placeholder.com/300/0000FF/808080" />
      <SwappableBlock id="test2">
        <Variation>
          <button>Buy Now</button>
        </Variation>
        <Variation>
          <button>Buy Right Now!</button>
        </Variation>
      </SwappableBlock>
    </div>
  );
}

/*

We define a `<Swappable>` instance with x number of `<Variation>` children. Swappable needs a unique id along with
a mechanism for determining "success". This can be a click, time on page, or another user action perhaps?

If the success metric is a click on an element, we need to ensure that element has a unique identifier.

We don't really care what version of the <Swappable> element is being clicked,
as long as that "swappable block" is being clicked at all is good enough. We don't need
to run the combinatorial explosion

Create a unique hash of all the variation values to tag the `swappable` slot.

Note: If any variations pull from a dynamic source, the swappable slot itself will have a different hash. How do we prevent this type of data from occurring? Or is this done at the edge-level and it is not a problem?


*/
