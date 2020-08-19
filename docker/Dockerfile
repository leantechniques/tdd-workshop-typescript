FROM amazon/dynamodb-local


USER root
RUN yum install -y less
RUN cd /tmp/ && \
    curl -L "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    python -m zipfile -e awscliv2.zip . && \
    chmod -R +x ./aws/ && \
    ./aws/install -i /usr/local/aws-cli -b /usr/local/bin && \
    rm -rf aws

ADD docker-entrypoint.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/docker-entrypoint.sh

ENV AWS_REGION us-west-2
USER dynamodblocal
ENTRYPOINT ["bash","-x","-c","docker-entrypoint.sh"]
