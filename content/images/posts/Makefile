DEFAULT_IMAGES = default-0.png default-1.png default-2.png default-3.png default-4.png default-5.png default-6.png

build: $(DEFAULT_IMAGES)

clean:
	-rm $(DEFAULT_IMAGES)

$(DEFAULT_IMAGES): %.png:
	./generate-default.js
	mv trianglify.png $@
