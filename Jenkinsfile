pipeline {
  agent any

  environment {
    IMAGE_NAME = "prasanthr25/todo-webapp:latest"   // ✅ Use your Docker Hub username
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') 
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/prasanth-devops/todo-webapp.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        sh '''
          echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
          docker push $IMAGE_NAME
        '''
      }
    }
  }
}
