export IMAGE_NAME="wnyao/test-today-weather:latest"
export NAMESPACE=test-today-weather
export DEPLOYMENT=deployment/test-today-weather

# build docker image
docker rmi -f $IMAGE_NAME
docker buildx build --platform linux/arm64,linux/amd64 -t $IMAGE_NAME -f ../Dockerfile ../ --push

# kubernetes deploy
kubectl --kubeconfig ~/.kube/k8s-1-20-2-do-0-sgp1-1616949725694-kubeconfig.yaml \
    --insecure-skip-tls-verify=true \
    set env --namespace $NAMESPACE $DEPLOYMENT \
    -e DEPLOY_TIMESTAMP="$(date +%s)"
