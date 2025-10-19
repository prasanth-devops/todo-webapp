pipeline {
    agent any

    environment {
        IMAGE_NAME = "prasanthR25/todo-webapp:latest"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out the GitHub repository..."
                git 'https://github.com/prasanth-devops/todo-webapp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image $IMAGE_NAME..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Logging in to Docker Hub and pushing the image..."
                sh '''
                    echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                    docker push $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! Docker image pushed to Docker Hub."
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}
