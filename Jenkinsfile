node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
       app = docker.build("example/node")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://harbor.ks.io:8443', 'harbor') {
            app.push("${env.BUILD_NUMBER}")
        }
    }
    
    stage('Trigger ManifestUpdate') {
        echo "triggering maifestExampleNodeJob"
        build job: 'maifestExampleNode', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
    }
}
