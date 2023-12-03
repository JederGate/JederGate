pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'yarn install'
                }
            }
        }

        stage('Setup') {
            steps {
                script {
                    sh 'yarn setup'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'yarn build'
                }
            }
        }

        
    }
}
