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
        dir(path: 'examples/jeder-app-ts/src/plugins/jeder-plugin') {
          script {
            sh 'yarn build'
          }

        }

      }
    }

    stage('error') {
      steps {
        dir(path: 'examples/jeder-app-ts/config') {
          sh '''chmod +x add-ip.sh
./add-ip.sh'''
        }

      }
    }

    stage('start') {
      steps {
        dir(path: 'examples/jeder-app-ts/') {
          sh 'yarn develop --watch-admin'
        }

      }
    }

  }
}