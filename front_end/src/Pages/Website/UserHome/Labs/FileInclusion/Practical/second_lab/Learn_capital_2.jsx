import { SelectionLab } from "../../../../Components/SelectionLab/SelectionLab";
import ThemeSwitcher from "../../../../Components/ThemeSwitcher/ThemeSwitcher";
export default function Learn_capital_2() {
  return (
    <>
      <ThemeSwitcher />
      <SelectionLab
        api={"http://127.0.0.1:8080/api/fileInclusionLab2"}
        description={
          "Select a file to view its content and the image of Fruits. This simulates a file inclusion vulnerability in a controlled environment."
        }
        hint={
          "This exercise demonstrates how file inclusion vulnerabilities work. Try to access files by manipulating the input. Always validate and sanitize user input to prevent such attacks!"
        }
        options={[
          "Apple",
          "Banana",
          "Guava",
          "Mango",
          "Strawberry",
          "WaterMelon",
        ]}
        question={"What is The Fruit?"}
        type={"fruit"}
        navigateTo={"/fileinclusion/fileinclusion_lab"}
      />
    </>
  );
}
