#!/bin/bash
set -e
IFS='|'

AMPLIFY_APP_ID='d2qinv37csnup5'
AMPLIFY_ENVIRONMENT='devq'

AWSCLOUDFORMATIONCONFIG="{\
	\"configLevel\":\"project\",\
	\"useProfile\":true,\
	\"profileName\":\"default\",\
	\"region\":\"us-east-1\"\
}"
AMPLIFY="{\
	\"appId\":\"$AMPLIFY_APP_ID\",\
	\"envName\":\"$AMPLIFY_ENVIRONMENT\",\
}"

PROVIDERS="{\
	\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG}"

amplify pull \
	  --amplify $AMPLIFY \
	    --providers $PROVIDERS \
	      --yes || true
