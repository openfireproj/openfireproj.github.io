$(shell test -f Makef.io || curl -o Makef.io makef.io/npm)
include Makef.io

GITHUBPAGE=app

deploy: package
	cp -rf build $(GITHUBPAGE)
	git reset
	git add $(GITHUBPAGE)
	git commit -m "GitHub Pages Deployment"
	git push origin
	
