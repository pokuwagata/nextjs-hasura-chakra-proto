import { GraphQLClient } from "graphql-request";
import { getSdk } from "type/generated/graphql";

const client = new GraphQLClient("http://localhost:8080/v1/graphql");
export const sdk = getSdk(client);
