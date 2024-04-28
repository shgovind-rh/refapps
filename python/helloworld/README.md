
# Rerence App for nodejs

## Build and Deploy

### For python 3.9

```
oc new-app python:3.9-ubi9~https://github.com/shgovind-rh/refapps.git --context-dir python/helloworld --name python39-hw
```
or
```
oc process -f ./template.yml --param-file=template-python39.param | oc apply -f -
oc start-build python39-hw -F
```

### For python 3.11

```
oc new-app python:3.11-ubi9~https://github.com/shgovind-rh/refapps.git --context-dir nodejs/helloworld --name python311-hw
```
or
```
oc process -f ./template.yml --param-file=template-python311.param | oc apply -f -
oc start-build python311-hw -F
```