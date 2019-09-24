Start docker:

    docker run -d -v `pwd`/data:/tmp/mongo -e DATA_DIR=/tmp/mongo -p 15221:27017 ehazlett/mongodb