# refapps

oc new-app dotnet:6.0-ubi8~https://github.com/shgovind-rh/refapps.git --context-dir dotnet/helloworld --name dotnet6-hw
or
oc process -f ./template.yml --param-file=template-dotnet8.param | oc apply -f -
oc start-build dotnet8-hw -F