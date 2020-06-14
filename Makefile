build:
	yarn build
clean:
	mv public/.gitignore ./.gitignore_public_tmp
	rm -rf public/*
	mv ./.gitignore_public_tmp public/.gitignore
deploy: build
	firebase deploy
