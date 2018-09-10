#!/bin/bash

#######################
# JABIL Co            #
# Trackchainer        #
# Author : Melvyn Tie #
#######################

# Exit on first error, print all commands.
#set -v


################################################################################
# CLEAN THE CONTAINERS AND IMAGES
################################################################################

export COMPOSE_PROJECT_NAME=trackchainer

# remove the docker containers
docker rm -f $(docker ps -aq)

# remove the untagged images
docker rmi $(docker images -f "dangling=true" -q)

# remove docker images
images=( trackchainer-ca trackchainer-peer orderer0 app )

for i in "${images[@]}"
do
    echo Removing image : $i
    docker rmi -f $i
done

# docker rmi -f $(docker images | grep none)
images=(dev-trackchainer-peer)

for i in "${images[@]}"
do
	echo Removing image : $i
    docker rmi -f $(docker images | grep $i )
done

# Shut down the Docker containers for the system tests.
docker-compose -f network/docker-compose.yml kill && docker-compose -f network/docker-compose.yml down

# remove the local state
rm -f network/hfc-key-store/*

# remove chaincode docker images
docker rmi $(docker images dev-* -q)

################################################################################
# YOUR SYSTEM IS CLEAN NOW
###############################################################################
