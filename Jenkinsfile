pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/prasanth-devops/todo-webapp.git'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t prasanth/todo-webapp:latest .'
      }
    }
    stage('Push to Docker Hub') {
      steps {
        sh '''
          docker login -u <your-dockerhub-username> -p <your-password>
          docker push prasanth/todo-webapp:latest
        '''
      }
    }
  }
}
