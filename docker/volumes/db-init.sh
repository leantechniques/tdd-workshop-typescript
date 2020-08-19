#!/bin/bash
set -euo pipefail
set -x

set -a
: ${TABLE_NAME:=OtherTable} \
  ${ITEM_NAME:=OtherItem}
set +a

echo "$@"
create_table () {
  aws dynamodb create-table \
    --endpoint-url http://localhost:8000 \
    --table-name ${TABLE_NAME} \
    --attribute-definitions AttributeName=Name,AttributeType=S \
    --key-schema AttributeName=Name,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
}
  
create_item () {
aws dynamodb put-item \
--endpoint-url http://localhost:8000 \
--table-name ${TABLE_NAME} \
--item '{
  "Name": {"S": "Green tea"},
  "Pros": {"SS": ["Delicious", "Supposedly healthy"]},
  "Cons": {"SS": ["Sometimes too bitter"]}
}'
}

# printf "{\"Name\":\"%s\"}" $ITEM_NAME
create_table "$@"
create_item "$@"
