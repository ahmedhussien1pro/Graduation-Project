import React from "react";
import JWTUser from "../Components/JWTUser";

export default function JWTAttacks_lab3() {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab3jwt";
  const tokenName = "jwtToken_1";
  // const tokenPath = "jwtToken_1";
  const hint = "lab3";
  const lab = "lab3";
  return (
    <div>
      <JWTUser
        apiEndpoint={apiEndpoint}
        hint={hint}
        lab={lab}
        tokenName={tokenName}
        condition={`username==="adin"`}
      />
    </div>
  );
}
