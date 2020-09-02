import {
  DynamoDB,
  GetItemCommandInput,
  TransactGetItemsCommandInput,
  UpdateItemInput,
} from '@aws-sdk/client-dynamodb';

let dynamo: DynamoDB;

function getDynamoDB(): DynamoDB {
  if (!dynamo) {
    dynamo = new DynamoDB({endpoint: 'http://localhost:8000', region: "us-west-2"});
  }
  return dynamo;
}

export async function getItem(args: GetItemCommandInput) {
  return await getDynamoDB().getItem(args);
}

export async function getItems(args: TransactGetItemsCommandInput) {
  return await getDynamoDB().transactGetItems(args);
}

export async function updateItem(args: UpdateItemInput) {
  return await getDynamoDB().updateItem(args);
}
