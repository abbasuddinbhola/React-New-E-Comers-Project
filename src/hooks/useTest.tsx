import { useState } from "react";

export default function useTest() {
    const [test, setTest] = useState(0);


    return [test, setTest];
}