import React from "react";
import JWTUser from "../Components/JWTUser";

export default function JWTAttacks_lab1() {
  const apiEndpoint = "http://127.0.0.1:8080/api/lab1jwt";
  const tokenName = "jwtToken_1";
  const hint = "lab1";
  const lab = "lab1";
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
