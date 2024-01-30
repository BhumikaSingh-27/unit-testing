import { render,screen } from "@testing-library/react";
import App from "./App";

test("First test case to render app",()=>{
  render(<App />)
  const text = screen.getByText("This is my first Test case");
  const heading = screen.getByText(/unit testing/i)
  const imageTitle = screen.getByTitle("Birthday gift shoes")
  expect(text).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(imageTitle).toBeInTheDocument();

})

// test("First test case to render app",()=>{
//   render(<App />)
//   const text = screen.getByText(/This is my first Test case/i);
//   expect(text).toBeInTheDocument();
// })