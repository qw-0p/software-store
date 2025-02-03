THIS_FILE := $(lastword $(MAKEFILE_LIST))

.PHONY: help build up start down destroy stop restart logs logs-api ps login-timescale login-api db-shell

help:
	make -pRrq  -f $(THIS_FILE) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'
build:
	docker-compose -f docker-compose.development.yml build $(c)
up:
	docker-compose -f docker-compose.development.yml up $(c)
start:
	docker-compose -f docker-compose.development.yml start $(c)
down:
	docker-compose -f docker-compose.development.yml down $(c)
destroy:
	docker-compose -f docker-compose.development.yml down -v $(c)
stop:
	docker-compose -f docker-compose.development.yml stop $(c)
restart:
	docker-compose -f docker-compose.development.yml stop $(c)
	docker-compose -f docker-compose.development.yml up -d $(c)
logs:
	docker-compose -f docker-compose.development.yml logs --tail=100 -f $(c)
ps:
	docker-compose -f docker-compose.development.yml ps
db-shell:
	docker-compose -f docker-compose.development.yml exec postgres psql -Upostgres
