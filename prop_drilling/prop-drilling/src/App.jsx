
import { MyStudent, Num, Student } from "./Components/index.js";
import { studentsData } from "../src/data.js";
import { MyContext } from "./MyContext.js";

function App() {
  // const studentInfo = studentsData;

  return (
    <>
      {/* <Universtiy /> */}
      {/* <MyContext.Provider value={studentInfo}>
      <Student />
      </MyContext.Provider> */}
      {/* It is redux  practice */}
      {/* <Num/> */}
      <MyStudent />

    </>
  );
}

export default App;
