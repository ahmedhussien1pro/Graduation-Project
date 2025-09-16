import { SelectionLab } from "../../../../Components/SelectionLab/SelectionLab";
import ThemeSwitcher from "../../../../Components/ThemeSwitcher/ThemeSwitcher";
export default function Learn_capital_3() {
  return (
    <>
      <ThemeSwitcher />
      <SelectionLab
        api={"http://127.0.0.1:8080/api/fileInclusionLab3"}
        description={
          "Select a file to view its content and the image Car Brand Logos. This simulates a file inclusion vulnerability in a controlled environment."
        }
        hint={
          "This exercise demonstrates how file inclusion vulnerabilities work. Try to access files by manipulating the input. Always validate and sanitize user input to prevent such attacks!"
        }
        options={["BMW", "GTR", "Honda", "Kia", "Mazda", "Nissan"]}
        question={"What is The Logo"}
        type={"car"}
        navigateTo={"/fileinclusion/fileinclusion_lab"}
      />
    </>
  );
}
