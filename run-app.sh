#!/bin/bash
if [ $1 == "--dev" ]; then
    docker-compose down
    docker-compose up -d --build
fi
if [ $1 == "--prod" ]; then
    docker-compose -f docker-compose-prod.yml down
    docker-compose -f docker-compose-prod.yml up -d --build
fi