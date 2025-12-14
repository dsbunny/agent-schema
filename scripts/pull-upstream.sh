#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/agent-schema"
CAPABILITY_SCHEMA_COMMIT=$(cd ../capability-schema && git rev-parse --short HEAD)
PUBLISHER_SCHEMA_COMMIT=$(cd ../publisher-schema && git rev-parse --short HEAD)
RMM_SCHEMA_COMMIT=$(cd ../rmm-schema && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
	--tab \
  	--arg cap_commit "$CAPABILITY_SCHEMA_COMMIT" \
  	--arg pub_commit "$PUBLISHER_SCHEMA_COMMIT" \
  	--arg rmm_commit "$RMM_SCHEMA_COMMIT" \
	'
  	.peerDependencies["@dsbunny/capability-schema"] = "github:dsbunny/capability-schema" 			|
  	.peerDependencies["@dsbunny/publisher-schema"]  = "github:dsbunny/publisher-schema"  			|
  	.peerDependencies["@dsbunny/rmm-schema"]        = "github:dsbunny/rmm-schema"				|
  	.devDependencies["@dsbunny/capability-schema"]  = ("github:dsbunny/capability-schema#" + $cap_commit)	|
  	.devDependencies["@dsbunny/publisher-schema"]   = ("github:dsbunny/publisher-schema#" + $pub_commit)	|
  	.devDependencies["@dsbunny/rmm-schema"]         = ("github:dsbunny/rmm-schema#" + $rmm_commit)
	' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json
