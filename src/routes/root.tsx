import { Outlet } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <div>Hello World</div>
      <Outlet />
    </>
  );
}
