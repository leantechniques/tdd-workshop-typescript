#!/bin/bash
set -euo pipefail
set -x

set -a
: ${TABLE_NAME:=Users} \
  ${ITEM_NAME:=User1}
set +a

echo "$@"
create_table () {
  aws dynamodb create-table \
    --endpoint-url http://localhost:8000 \
    --table-name ${TABLE_NAME} \
    --attribute-definitions AttributeName=id,AttributeType=N \
    --key-schema AttributeName=id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
}
  
create_item () {
aws dynamodb put-item \
--endpoint-url http://localhost:8000 \
--table-name ${TABLE_NAME} \
--item '{
  "id": {"N": "1"},
  "name": {"S": "Dr. Evil"},
  "cash": {"N": "1000000"},
  "holdings": {"L": 
    [
      {
        "M": {
          "coinId": {
            "N": "80"
          },
          "amount": {
            "N": "100"
          }
        }
      },
      {
        "M": {
          "coinId": {
            "N": "90"
          },
          "amount": {
            "N": "200"
          }
        }
      }
    ]
  }
}'
}

# printf "{\"Name\":\"%s\"}" $ITEM_NAME
create_table "$@"
create_item "$@"
