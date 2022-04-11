FROM registry.redhat.io/ubi8/nginx-118:latest

USER root
COPY dist/hello-world /opt/app-root/src
RUN chown -R 1001:0 /opt/app-root/src
USER 1001
VOLUME [ "/opt/app-root/src/assets/config" ]

CMD /usr/libexec/s2i/run
