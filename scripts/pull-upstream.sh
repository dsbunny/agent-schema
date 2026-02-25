#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/agent-schema"
CAPDB_SCHEMA_COMMIT=$(cd ../capdb-schema && git rev-parse --short HEAD)
PUBLISHER_SCHEMA_COMMIT=$(cd ../publisher-schema && git rev-parse --short HEAD)
RMM_SCHEMA_COMMIT=$(cd ../rmm-schema && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/LICENSE" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
	--tab \
  	--arg capdb_commit "$CAPDB_SCHEMA_COMMIT" \
  	--arg publisher_commit "$PUBLISHER_SCHEMA_COMMIT" \
  	--arg rmm_commit "$RMM_SCHEMA_COMMIT" \
	'
  	.peerDependencies["@dsbunny/capdb-schema"]      = "github:dsbunny/capdb-schema" 				|
  	.peerDependencies["@dsbunny/publisher-schema"]  = "github:dsbunny/publisher-schema"  				|
  	.peerDependencies["@dsbunny/rmm-schema"]        = "github:dsbunny/rmm-schema"					|
  	.devDependencies["@dsbunny/capdb-schema"]       = ("github:dsbunny/capdb-schema#" + $capdb_commit)		|
  	.devDependencies["@dsbunny/publisher-schema"]   = ("github:dsbunny/publisher-schema#" + $publisher_commit)	|
  	.devDependencies["@dsbunny/rmm-schema"]         = ("github:dsbunny/rmm-schema#" + $rmm_commit)
	' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json
