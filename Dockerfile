FROM busybox

WORKDIR /www
COPY index.html .
COPY detail.html .
COPY style.css .

EXPOSE 9696
CMD ["httpd", "-f", "-p", "9696"]
