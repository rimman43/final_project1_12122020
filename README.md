# Hello Node
This is a very basic Hello World application written with Node.

It includes a `Dockerfile` for building a Docker image with the application, and a `Jenkinsfile` that defines a build pipeline for it.

In this project, the following was acheived: 

Setup a sample application to be managed in git, then install and setup Jenkins so that when we push a commit to Github, Jenkins will automatically trigger a build of the sample application, containerize the sample app, and push the container to Docker Hub.
