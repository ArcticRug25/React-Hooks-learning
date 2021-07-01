import { useState } from "react";
import { Button } from "antd";

export default function Test2() {
  const [count, setCount] = useState(0);
  console.log("render");

  return (
    <div>
      <p>{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        add
      </Button>
    </div>
  );
}
