import MyInput from "../components/MyInput";

// sebuah function atau class yang me-return JSX (React extension JS XML)
// yang bentuknya menyerupai markup language (HTML)

// karena component ini akan di gunakan di tempat lain atau di component lain
// kita perlu melakukan export default

// component tidak melulu component di file terpisah, di satu file yg sama juga bisa

// component hanya bisa me return 1 parent component/element
// harus ada pembungkus nya <></> atau fragment

function MyButton(props) {
  return (
    <>
      <MyInput />
      <button {...props}>This is button</button>
    </>
  );
}

export default function ReactComponent() {
  return (
    <div className="App">
      <h1>Hi... React Component</h1>
      <MyButton
        onClick={() => {
          alert("Hi Rid");
        }}
      />
      {/* <MyInput /> */}
    </div>
  );
}
