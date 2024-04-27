
# Rerence App for nodejs

## Build and Deploy

```
oc new-app nodejs:18-ubi9~https://github.com/shgovind-rh/refapps.git --context-dir nodejs/helloworld --name nodejs18-hw
```
or
```
oc process -f ./template.yml --param-file=template-nodejs18.param | oc apply -f -
oc start-build nodejs18-hw -F
```