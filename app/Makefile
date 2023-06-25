.PHONY: help run start stop shell build _app _base

default: help

help: ## show this help
	@echo
	@fgrep -h " ## " $(MAKEFILE_LIST) | fgrep -v fgrep | sed -Ee 's/([a-z.]*):[^#]*##(.*)/\1##\2/' | column -t -s "##"
	@echo

run: start ## run the application locally
	@docker attach $$(docker compose ps --quiet app)

start: _app ## run the application locally in debug mode
	@docker compose up --detach app

stop: ## stop the application
	@docker-compose down

shell: _base ## shell into a development container
	@docker compose run base sh

build: _base ## build the application for deployment
	@docker compose run base yarn generate

# private

_app:
	@docker compose build app

_base:
	@docker compose build base
