
# Rerence App for dotnet

## Build and Deploy

```
oc new-app dotnet:8.0-ubi8~https://github.com/shgovind-rh/refapps.git#dotnet8 --context-dir dotnet/helloworld --name dotnet8-hw
```
or
```
oc process -f ./template.yml --param-file=template-dotnet8.param | oc apply -f -
oc start-build dotnet8-hw -F
```