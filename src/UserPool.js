import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_ljCVhbg8y",
    ClientId: "v8ertpsbdq9hhocngpvvsob8i"
}

export default new CognitoUserPool(poolData);