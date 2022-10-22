function MyCustomButton(props) {
  // Area JS
  return (
    // Area JSX
    <button {...props}>{props.content}</button>
  );
}

function MyCustomDiv(props) {
  return (
    <div
      style={{
        padding: 20,
        margin: "20px 0",
        backgroundColor: "whitesmoke",
        borderRadius: 12,
        color: "black",
      }}
    >
      {props.children}
    </div>
  );
}

export default function ReactProps() {
  return (
    <div className="App">
      <h1>Hi... React Props</h1>
      <MyCustomButton
        content="Button 1"
        style={{ backgroundColor: "red" }}
        onClick={() => {
          alert("Hi Rid");
        }}
      />

      <MyCustomDiv>
        <h1>any other which is</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          eligendi nesciunt ut, dolore culpa cumque excepturi praesentium nam
          perspiciatis beatae temporibus repudiandae. Odio beatae nisi harum
          numquam esse, et molestiae!
        </p>
        <MyCustomButton
          content="Button 2"
          style={{ backgroundColor: "blue" }}
        />
      </MyCustomDiv>

      <MyCustomDiv>
        <h1>Another Div 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fugit
          dolore repudiandae nesciunt omnis eaque, facere repellat natus
          corporis? Consequuntur quos nobis pariatur. Dolores velit laboriosam
          impedit aspernatur. Tempore, error.
        </p>
        <MyCustomButton content="Button 3" bgColor="green" />
      </MyCustomDiv>
    </div>
  );
}
