import React from "react";
import { useForm } from "react-hook-form/dist/index.ie11";

function App() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
  });
  const { isValid } = formState;

  const onSubmit = (data) => {
    //alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        ref={register({
          required: true,
        })}
      />
      <input type="submit" name="name" disabled={!isValid} value="Submit" />
    </form>
  );
}

export default App;
