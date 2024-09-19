SHELL := /bin/sh

build:
	docker compose build

start:
	docker compose up -d

clean:
	docker compose down

logs:
	docker compose logs --follow

restart:
	docker compose restart
