pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/harmlessprince/BlogNestJS', branch: 'master')
      }
    }

    stage('Install Dependnciesss') {
      agent any
      steps {
        sh 'npm install'
      }
    }

  }
}