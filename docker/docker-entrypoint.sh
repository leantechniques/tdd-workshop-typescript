#!/bin/bash
set -eux
  
echo "$@"

# turn on bash's job control
set -m
  
# Start the primary process and put it in the background
java -jar DynamoDBLocal.jar -sharedDb -inMemory &

# the my_helper_process might need to know how to wait on the
# primary process to start before it does its work and returns
while ! ( aws dynamodb describe-limits --endpoint-url http://localhost:8000 ); do sleep 1; done

# Start the helper process
. /src/db-init.sh

echo "Created $TABLE_NAME"
# now we bring the primary process back into the foreground
# and leave it there
fg %1
