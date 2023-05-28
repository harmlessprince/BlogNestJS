pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/harmlessprince/BlogNestJS', branch: 'master')
      }
    }

    stage('Install Dependnciesss') {
      agent {
        node {
          label 'use npm'
        }

      }
      steps {
        sh 'npm install'
      }
    }

  }
}