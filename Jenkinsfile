pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/harmlessprince/BlogNestJS', branch: 'master')
      }
    }

    stage('Install Dependnciesss') {
      steps {
        sh 'npm install'
      }
    }

  }
}