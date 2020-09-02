import DynamoDB, {UpdateItemInput} from 'aws-sdk/clients/dynamodb';
import {promisify} from 'util';
import {User} from 'models/user';

let dynamo: DynamoDB.DocumentClient;

function getDynamoDB(): DynamoDB.DocumentClient {
  if (!dynamo) {
    dynamo = new DynamoDB.DocumentClient({
      endpoint: 'http://localhost:8000',
      region: 'us-west-2',
    });
  }
  return dynamo;
}

export async function getItem(id: number) {
  const {Item} = await getDynamoDB()
    .get({
      TableName: 'User',
      Key: {id},
    })
    .promise();

  return Item;
}

export async function updateItem(user: User) {
  return getDynamoDB().put({TableName: 'User', Item: user}).promise();
}
