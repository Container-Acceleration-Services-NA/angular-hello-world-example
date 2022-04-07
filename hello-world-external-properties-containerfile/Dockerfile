# Stage 2: Serve app with nginx server
FROM registry.redhat.io/ubi8/nginx-118:latest

# Add application sources to a directory that the assemble script expects them
# and set permissions so that the container runs without root access
# With older docker that does not support --chown option for ADD statement,
# use these statements instead:
USER root
ADD dist/hello-world /opt/app-root/src
RUN chown -R 1001:0 /opt/app-root/src
USER 1001

# Run script uses standard ways to run the application
CMD /usr/libexec/s2i/run
