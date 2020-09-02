import { GetItemCommand, AttributeValue } from "@aws-sdk/client-dynamodb"
import { getItem } from "../../src/repositories/dynamo.repository";

it("should read user 1", async () => {
  await getItem({
    TableName: "User",
    Key: {id: {N: "1"}}
  });
})