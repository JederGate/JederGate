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

        stage('Build Example App') {
            steps {
                dir('examples/jeder-app-ts') {
                    script {
                        sh 'yarn build'
                    }
                }
            }
        }
    }
}
